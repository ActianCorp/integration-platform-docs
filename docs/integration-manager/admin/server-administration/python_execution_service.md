---
title: Python Execution Service
---

# Python Execution Service

## Overview

The Python Execution Service executes uploaded `.py` scripts as jobs. Runtime parameters can come from optional macros (in the job config) or a plain `.env` file loaded inside the script. Only core job metadata (e.g., `jobId`, `engineType`, `packageName`) is required; the `macros` section is optional.

## Architecture
* **Engine Service:** `PythonExecutionService` - lifecycle (`init`, `run`, `stop`, `close`)  
* **Command Builder:** `PythonCommandBuilder` - builds command + environment variables from macros (if any)  
* **Engine Validator:** `PythonEngineValidator` - validates Python installation path & executable  
* **Configuration:** `python.enabled`, `python.installPath` in `application.properties`  

## Configuration (`application.properties`)
```properties
python.enabled=true
python.installPath=/Library/Frameworks/Python.framework/Versions/3.13
```

## Execution Workflow
1. Upload `app.py` (optionally `.env`).  
2. (Optional) Define macros in job config OR rely solely on `.env`.  
3. Validator checks configured Python install path.  
4. Engine runs `python3 app.py` (fallback `python`).  
5. Merged stdout/stderr streamed to job log.  

## Macros (Optional)
* Defined under `runtimeConfig.macros` in the job config JSON (optional section).  
* Each macro becomes an environment variable before the process starts.  
* Secure values (`secure=true`) decrypted prior to injection.  
* Missing or null values are skipped silently.  
* If you omit `macros`, no variables are injected this way (only those you load from `.env` inside the script).  

Access pattern inside Python:
```python
import os
value = os.getenv("MACRO_NAME")
```

### Bulk Injection via `.env`
`.env` is a plain text file of `KEY=VALUE` entries (NOT JSON). It provides an alternative to manual macro creation. User can upload the `.env` file to jobconfig files and run the job.

Upload workflow:
1. Include `.env` alongside `app.py`
2. Platform may auto-convert entries to macros (optional)
3. If not converted, load with `python-dotenv` inside the script

## `.env` File (Alternative / Complement)
* Plain text `KEY=VALUE` lines (NOT JSON).  
* Not auto-loaded by the worker; your script must load it (e.g. `python-dotenv`) unless the platform separately converts entries into macros.  
* Supports comments starting with `#`.  
* Quotes optional; recommended for values with spaces.  

Sample `.env`:
```dotenv
APP_NAME="HelloWorld Demo"
APP_VERSION=1.0.0
APP_AUTHOR=Author1
```

Loading inside `app.py` when macros are not used:
```python
from dotenv import load_dotenv
load_dotenv(override=True)
```

## Choosing Between Macros and `.env`
* Use macros when you want immediate environment variables without code changes.  
* Use `.env` only when you prefer bundling parameters with the script and are willing to load them in code. Parameters can be injected via macros or a bulk `.env` file. On-premise users configure Python in `application.properties`.
* Both can coexist; macros override same-named variables loaded from `.env` if present first.  

## Example Script `app.py`
```python
import os

try:
    from dotenv import load_dotenv
    load_dotenv(override=True)
except ImportError:
    pass

app_name = os.getenv("APP_NAME", "UnknownApp")
app_version = os.getenv("APP_VERSION", "0.0.0")
app_author = os.getenv("APP_AUTHOR", "UnknownAuthor")

print(f"Hello from {app_name}")
print(f"Version: {app_version}")
print(f"Author: {app_author}")
```


Omit the `macros` object entirely if relying only on `.env`.

## Inline `.env` Sample (Full)
```dotenv
APP_NAME=HelloWorld Demo
APP_VERSION=1.0.0
APP_AUTHOR=Author1
```

## Error Handling
* Blank or invalid `python.installPath`: job fails before execution.  
* No executable `python` / `python3` found: validation failure.  
* Secure macro decryption failure: warns; skips that variable.  
* Missing macro or `.env` key: script uses default fallback.  

## Security
* Mark sensitive macro values with `secure=true` (encrypted at rest; decrypted before launch).  
* Plain `.env` values are not decrypted; avoid storing secrets there if macros are available.  
* Only uploaded `.py` files are executed.  

## Troubleshooting
* Variable missing: confirm macro exists OR that `python-dotenv` is installed and `.env` present.  
* Path issues: verify `python.installPath` and permissions.  
* Unexpected defaults: ensure no typos in key names.  

## Future Enhancements
* Virtual environment / venv activation.  
* Dependency installation hook.  
* Structured result metadata and exit code mapping.  

## Checklist
* `python.enabled=true` set.  
* Valid `python.installPath` with executable.  
* `app.py` uploaded; `packageName` matches.  
* (Optional) Macros defined OR `.env` uploaded.  
* Secure values flagged where needed.  

```