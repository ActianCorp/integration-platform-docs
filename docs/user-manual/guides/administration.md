---
title: Administration
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import HTTPSnippet1 from '!!raw-loader!./snippets/strict-mode/disable/http.txt'
import BashSnippet1 from '!!raw-loader!./snippets/strict-mode/disable/bash.txt'
import PythonSnippet1 from '!!raw-loader!./snippets/strict-mode/disable/python.txt'
import TypescriptSnippet1 from '!!raw-loader!./snippets/strict-mode/disable/typescript.txt'
import RustSnippet1 from '!!raw-loader!./snippets/strict-mode/disable/rust.txt'
import JavaSnippet1 from '!!raw-loader!./snippets/strict-mode/disable/java.txt'
import CSharpSnippet1 from '!!raw-loader!./snippets/strict-mode/disable/csharp.txt'
import GoSnippet1 from '!!raw-loader!./snippets/strict-mode/disable/go.txt'

import HTTPSnippet2 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-retrieve/http.txt'
import BashSnippet2 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-retrieve/bash.txt'
import PythonSnippet2 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-retrieve/python.txt'
import TypescriptSnippet2 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-retrieve/typescript.txt'
import RustSnippet2 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-retrieve/rust.txt'
import JavaSnippet2 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-retrieve/java.txt'
import CSharpSnippet2 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-retrieve/csharp.txt'
import GoSnippet2 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-retrieve/go.txt'

import HTTPSnippet3 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-retrieve-off/http.txt'
import BashSnippet3 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-retrieve-off/bash.txt'
import PythonSnippet3 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-retrieve-off/python.txt'
import TypescriptSnippet3 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-retrieve-off/typescript.txt'
import RustSnippet3 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-retrieve-off/rust.txt'
import JavaSnippet3 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-retrieve-off/java.txt'
import CSharpSnippet3 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-retrieve-off/csharp.txt'
import GoSnippet3 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-retrieve-off/go.txt'

import HTTPSnippet4 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-update/http.txt'
import BashSnippet4 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-update/bash.txt'
import PythonSnippet4 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-update/python.txt'
import TypescriptSnippet4 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-update/typescript.txt'
import RustSnippet4 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-update/rust.txt'
import JavaSnippet4 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-update/java.txt'
import CSharpSnippet4 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-update/csharp.txt'
import GoSnippet4 from '!!raw-loader!./snippets/strict-mode/unindexed-filtering-update/go.txt'

# Administration

Cortex exposes administration tools which enable to modify at runtime the behavior of a Cortex instance without changing its configuration manually.

## Locking

A locking API enables users to restrict the possible operations on a Cortex process.
It is important to mention that:

- The configuration is not persistent therefore it is necessary to lock again following a restart.
- Locking applies to a single node only. It is necessary to call lock on all the desired nodes in a distributed deployment setup.

Lock request sample:

```http
POST /locks
{
    "error_message": "write is forbidden",
    "write": true
}
```

Write flags enables/disables write lock.
If the write lock is set to true, Cortex doesn't allow creating new collections or adding new data to the existing storage.
However, deletion operations or updates are not forbidden under the write lock.
This feature enables administrators to prevent a Cortex process from using more disk space while permitting users to search and delete unnecessary data.

You can optionally provide the error message that should be used for error responses to users.

## Recovery mode

*Available as of v1.2.0*

Recovery mode can help in situations where Cortex fails to start repeatedly.
When starting in recovery mode, Cortex only loads collection metadata to prevent
going out of memory. This allows you to resolve out of memory situations, for
example, by deleting a collection. After resolving Cortex can be restarted
normally to continue operation.

In recovery mode, collection operations are limited to
[deleting](#) a
collection. That is because only collection metadata is loaded during recovery.

To enable recovery mode with the Cortex Docker image you must set the
environment variable `CORTEX_ALLOW_RECOVERY_MODE=true`. The container will try
to start normally first, and restarts in recovery mode if initialization fails
due to an out of memory error. This behavior is disabled by default.

If using a Cortex binary, recovery mode can be enabled by setting a recovery
message in an environment variable, such as
`CORTEX__STORAGE__RECOVERY_MODE="My recovery message"`.


## Strict mode

*Available as of v1.13.0*

Strict mode is a feature to restrict certain type of operations on a collection in order to protect the Cortex cluster.

The goal is to prevent inefficient usage patterns that could overload the system.

Strict mode ensures a more predictable and responsive service when you do not have control over the queries that are being executed.

Upon crossing a limit, the server will return a client side error with the information about the limit that was crossed.

The `strict_mode_config` can be enabled when [creating](#) a new collection, see [schema definitions](https://api.cortex.tech/api-reference/collections/create-collection#request.body.strict_mode_config) for all the available `strict_mode_config` parameters.

As part of the config, the `enabled` field act as a toggle to enable or disable the strict mode dynamically.

It is possible to raise the default limits and/or disable strict mode entirely. Though, in order to ensure a stable cluster we strongly recommend to keep strict mode enabled using its default configuration. For disabling strict mode on an existing collection use:

<Tabs>
  <TabItem value="http" label="http">
    <CodeBlock language="http">
      {HTTPSnippet1}
    </CodeBlock>
  </TabItem>
  <TabItem value="bash" label="bash">
    <CodeBlock language="bash">
      {BashSnippet1}
    </CodeBlock>
  </TabItem>
  <TabItem value="python" label="python">
    <CodeBlock language="python">
      {PythonSnippet1}
    </CodeBlock>
  </TabItem>
  <TabItem value="typescript" label="typescript">
    <CodeBlock language="typescript">
      {TypescriptSnippet1}
    </CodeBlock>
  </TabItem>
  <TabItem value="rust" label="rust">
    <CodeBlock language="rust">
      {RustSnippet1}
    </CodeBlock>
  </TabItem>
  <TabItem value="java" label="java">
    <CodeBlock language="java">
      {JavaSnippet1}
    </CodeBlock>
  </TabItem>
  <TabItem value="csharp" label="csharp">
    <CodeBlock language="csharp">
      {CSharpSnippet1}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="go">
    <CodeBlock language="go">
      {GoSnippet1}
    </CodeBlock>
  </TabItem>
</Tabs>

### Collection with multiple vectors

*Available as of v0.10.0*

It is possible to have multiple vectors per record.
This feature allows for multiple vector storages per collection. 
To distinguish vectors in one record, they should have a unique name defined when creating the collection.
Each named vector in this mode has its distance and size:



### Disable retrieving via non indexed payload

Setting `unindexed_filtering_retrieve` to false prevents retrieving points by filtering on a non indexed payload key which can be very slow.

<Tabs>
  <TabItem value="http" label="http">
    <CodeBlock language="http">
      {HTTPSnippet2}
    </CodeBlock>
  </TabItem>
  <TabItem value="bash" label="bash">
    <CodeBlock language="bash">
      {BashSnippet2}
    </CodeBlock>
  </TabItem>
  <TabItem value="python" label="python">
    <CodeBlock language="python">
      {PythonSnippet2}
    </CodeBlock>
  </TabItem>
  <TabItem value="typescript" label="typescript">
    <CodeBlock language="typescript">
      {TypescriptSnippet2}
    </CodeBlock>
  </TabItem>
  <TabItem value="rust" label="rust">
    <CodeBlock language="rust">
      {RustSnippet2}
    </CodeBlock>
  </TabItem>
  <TabItem value="java" label="java">
    <CodeBlock language="java">
      {JavaSnippet2}
    </CodeBlock>
  </TabItem>
  <TabItem value="csharp" label="csharp">
    <CodeBlock language="csharp">
      {CSharpSnippet2}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="go">
    <CodeBlock language="go">
      {GoSnippet2}
    </CodeBlock>
  </TabItem>
</Tabs>

Or turn it off later on an existing collection through the [collection update](#) API.

<Tabs>
  <TabItem value="http" label="http">
    <CodeBlock language="http">
      {HTTPSnippet3}
    </CodeBlock>
  </TabItem>
  <TabItem value="bash" label="bash">
    <CodeBlock language="bash">
      {BashSnippet3}
    </CodeBlock>
  </TabItem>
  <TabItem value="python" label="python">
    <CodeBlock language="python">
      {PythonSnippet3}
    </CodeBlock>
  </TabItem>
  <TabItem value="typescript" label="typescript">
    <CodeBlock language="typescript">
      {TypescriptSnippet3}
    </CodeBlock>
  </TabItem>
  <TabItem value="rust" label="rust">
    <CodeBlock language="rust">
      {RustSnippet3}
    </CodeBlock>
  </TabItem>
  <TabItem value="java" label="java">
    <CodeBlock language="java">
      {JavaSnippet3}
    </CodeBlock>
  </TabItem>
  <TabItem value="csharp" label="csharp">
    <CodeBlock language="csharp">
      {CSharpSnippet3}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="go">
    <CodeBlock language="go">
      {GoSnippet3}
    </CodeBlock>
  </TabItem>
</Tabs>

### Disable updating via non indexed payload

Setting `unindexed_filtering_update` to false prevents updating points by filtering on a non indexed payload key which can be very slow.

<Tabs>
  <TabItem value="http" label="http">
    <CodeBlock language="http">
      {HTTPSnippet4}
    </CodeBlock>
  </TabItem>
  <TabItem value="bash" label="bash">
    <CodeBlock language="bash">
      {BashSnippet4}
    </CodeBlock>
  </TabItem>
  <TabItem value="python" label="python">
    <CodeBlock language="python">
      {PythonSnippet4}
    </CodeBlock>
  </TabItem>
  <TabItem value="typescript" label="typescript">
    <CodeBlock language="typescript">
      {TypescriptSnippet4}
    </CodeBlock>
  </TabItem>
  <TabItem value="rust" label="rust">
    <CodeBlock language="rust">
      {RustSnippet4}
    </CodeBlock>
  </TabItem>
  <TabItem value="java" label="java">
    <CodeBlock language="java">
      {JavaSnippet4}
    </CodeBlock>
  </TabItem>
  <TabItem value="csharp" label="csharp">
    <CodeBlock language="csharp">
      {CSharpSnippet4}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="go">
    <CodeBlock language="go">
      {GoSnippet4}
    </CodeBlock>
  </TabItem>
</Tabs>

...