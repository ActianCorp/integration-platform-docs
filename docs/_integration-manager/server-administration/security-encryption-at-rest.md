---
layout: default
title: Encryption-at-Rest
nav_order: 2
parent: Server Administration
---
# Encryption-at-Rest

## IMPORTANT!

### Macro values often contain sensitive data. To prevent exposure, it is best practice to encrypt these values at rest, i.e. at the database level.

### Macro encryption is always enabled and enforced for Integration Manager powered by DataCloud (SaaS or VPC).
<br>
After you enable encryption, macro values will never be retrievable directly from the database. You must maintain the certificate you used, as it is the only mechanism available to decrypt macro values. The public and private keys cannot be changed.

If you have existing macros defined, they must be updated through the user interface or API after encryption is enabled.

If you choose to disable encryption, all existing macro values will need to be updated to expected values.

## Step 1: Obtain or Create a new Encryption Keystore

### Self-signed certs are generally acceptable for at-rest data encryption because identity verification is not required at the application level.

Note that either keytool or OpenSSL tools can be used to generate the certificates from the command line. For OpenSSL certificate instructions, see https://www.openssl.org/.

Open a command console and change directory to the JRE bin folder.

Create a new keystore file using Java keytool. You can use whatever alias and filename you choose. For illustration purposes, we are using "integration-manager" and "keystore.p12", respectively.

You will be prompted to set a keystore password and also add identity details (name, company, address, etc).

```
cd (ProgramData)/Actian/IntegrationManager/jre/bin
keytool -genkeypair -alias integration-manager -keyalg RSA -keysize 2048 -storetype PKCS12 -keystore keystore.p12 -validity 3650
```

## Step 2: Configure Integration Manager Encryption Properties

For illustration purposes, we are using "integration-manager" and "keystore.p12", respectively.
* Note that any application.properties change requires a restart of the Integration Manager Service
* It is always good practice to make sure you do not have duplicate properties in your file

Add to application.properties:
```
# Macro Encryption Properties
encryption.enabled=true
encryption.key-store=${sharedDataPath}/conf/encryption/keystore.p12
encryption.key-store-password=D0N0tU5eTh1sP@ssW0rd! 
encryption.certificate-name=integration-manager
```