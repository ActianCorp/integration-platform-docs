---
title: Encryption-at-Rest
---

# Encryption-at-Rest

:::danger[IMPORTANT!]
Macro values often contain sensitive data. To prevent exposure, it is best practice to encrypt these values at rest, meaning at the database level.

Macro encryption is always enabled and enforced for Integration Manager powered by DataCloud (SaaS or VPC).
:::

After you enable encryption, macro values will never be retrievable directly from the database. You must maintain the certificate you used, as it is the only mechanism available to decrypt macro values. The public and private keys cannot be changed.

If you have existing macros defined, they must be updated through the user interface or API after encryption is enabled.

If you choose to disable encryption, all existing macro values will need to be updated to expected values.

## Step 1: Obtain or Create a new Encryption Keystore

:::note
Self-signed certs are generally acceptable for at-rest data encryption because identity verification is not required at the application level.
:::

You can use either keytool or OpenSSL tools can be used to generate the certificates from the command line. 

This step explains how to accomplish the task using keytool. For OpenSSL certificate instructions, see https://www.openssl.org/.

To create a new encryption keystore:

1. Open a command console and change directory to the JRE bin folder.

    ```
    cd <ProgramDataDirectory>/Actian/IntegrationManager/jre/bin
    ```

2. Create a new keystore file using Java keytool. You can use whatever alias and filename you choose. In this example, we are using "integration-manager" and "keystore.p12", respectively.

    ```
    keytool -genkeypair -alias integration-manager -keyalg RSA -keysize 2048 -storetype PKCS12 -keystore keystore.p12 -validity 3650
    ```

3. You will be prompted to set a keystore password and also add identity details (name, company, address, etc.).

## Step 2: Configure Integration Manager Encryption Properties


:::note[Notes]
   * Any change to `application.properties` requires a restart of the Integration Manager Service.
   * It is always best practice to make sure you do not have duplicate properties in your file.
:::

Add the following to `application.properties`. You can use whatever alias and filename you choose. In this example, we are using "integration-manager" and "keystore.p12", respectively.
```
# Macro Encryption Properties
encryption.enabled=true
encryption.key-store=${sharedDataPath}/conf/encryption/keystore.p12
encryption.key-store-password=D0N0tU5eTh1sP@ssW0rd! 
encryption.certificate-name=integration-manager
```
