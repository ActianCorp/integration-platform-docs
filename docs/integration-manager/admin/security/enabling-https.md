---
title: Enabling HTTPS
---

# Enabling HTTPS
 
:::danger[IMPORTANT!]

Using HTTPS is always recommended. Otherwise, API tokens, credentials, and payloads are subject to hijack.

HTTPS is always enabled and enforced for Integration Manager powered by DataCloud (SaaS and VPC).

:::

###  SSL Certificates

HTTPS encryption is configured using a Keystore file, which contains one or more SSL certificates. In general, SSL certificates have two functions:

* Encryption
* Authenticate the identity of the certificate’s owner

There are 2 types of SSL certificates:
* **CA-Signed:** When you purchase a CA-Signed certificate, you’re required to undergo a validation process that confirms key identifying information. A CA-Signed certificate is trusted by every browser or device that trusts the certificate authority. Certificate authorities are required to undergo regular audits and must comply with a strict set of guidelines to be trusted. 
* **Self-Signed:** When you sign a certificate yourself, you are not performing the requisite validation. Browsers have been designed to NOT trust certificates by default. Using a self-signed certificate will generate a browser error for any attempt to access over HTTPS. Self-signed certificates are appropriate only for testing environments and non-public networks. 

To enable HTTPS, you must accomplish the following tasks:
1. Create a keystore file and import certificate.
2. Configure Integration Manager’s SSL properties.
3. Import your certificates into your Java library.

## Step 1: Create Keystore/Import Certificate

You can use either keytool or OpenSSL tools to generate, import, and manage certificates from the command line. 

This step explains how to accomplish the task using keytool. For OpenSSL certificate instructions, see https://www.openssl.org/.

### Option A: Create and Import a CA-Signed Certificate

1. Open a command console and change directory to the JRE bin folder.

    ```
    cd (ProgramData)/Actian/IntegrationManager/jre/bin
    ```

2. Create a new keystore file using Java keytool. You can use whatever alias and filename you choose. For illustration purposes, we are using "integration-manager" and "keystore.p12", respectively.

    ```
    keytool -genkey -alias integration-manager -keyalg RSA -keystore keystore.p12
    ```

3. Create a certificate signing request file using your newly created keystore. For example:

    ```
    keytool -certreq -alias integration-manager -keyalg RSA -file certificate-signing-request.txt -keystore keystore.p12
    ```

4. Send the certificate request to the Certificate Authority you are using. 

5. Wait for your new certificate to arrive.

6. When your certificate(s) arrive, import them (usually \*.cer files) into your keystore. Often, multiple cert files are provided, each with its own unique name. Note that "root" and "intermediate" are just example names. The "server" certificate will replace the existing self-signed one in the keystore, so you should use the same alias you specified in step 2 when generating the signing request.

Contact your Certificate Authority with any specific questions/concerns/issues you encounter during import. Actian Support will not be able to resolve issues with CA-Signed Certificates.

### Option B: Create and Import a Self-Signed Certificate

:::caution

Self-signed certs should not be used in production environments!

:::

1. Open a command console and change directory to the JRE bin folder.

    ```
    cd (ProgramData)/Actian/IntegrationManager/jre/bin
    ```

2. Create a new keystore file using Java keytool. You can use whatever alias and filename you choose. In this example, we are using "integration-manager" and "keystore.p12", respectively.

    ```
    keytool -genkeypair -alias integration-manager -keyalg RSA -keysize 2048 -storetype PKCS12 -keystore keystore.p12 -validity 3650
    ```

3. You will be prompted to set a keystore password and also add identity details (name, company, address, etc.).

## Step 2: Configure Integration Manager SSL Properties

Note the following:

* These properties apply to Self-Signed and CA-Signed keystores.
* Any change to application.properties requires a restart of the Integration Manager Service.
* It is always best practice to make sure you do not have duplicate properties in your file.

Add the following to application.properties. You can use whatever alias and filename you choose. In this example, we are using "integration-manager" and "keystore.p12", respectively.

```
# Enable SSL
security.require-ssl=true
server.port=443
server.ssl.key-alias=integration-manager
server.ssl.key-store=${sharedDataPath}/conf/ssl/keystore.p12
server.ssl.key-store-password=D0N0tU5eTh1sP@ssW0rd!
server.ssl.key-store-type=PKCS12
im.base-url=https://IM_SERVER_HOSTNAME:${server.port}
```


## Step 3: Import Your Certificates into Java jre/lib/security/cacerts

The “cacerts” directory is an embedded keystore for the Java Runtime Environment.

To import your certificates:

1. Export the certificate out of the keystore:

   ```
      keytool -exportcert -alias integration-manager -keystore keystore.p12 -file integration-manager.cer -storetype pkcs12 -noprompt -storepass D0N0tU5eTh1sP@ssW0rd!
   ```

2. Import the certificate to the jre/lib/security/cacerts keystore:

   ```
   keytool -import -alias integration-manager -file integration-manager.cer -keystore "(ProgramData)/Actian/IntegrationManager/jre/lib/security/cacerts" -storepass D0N0tU5eTh1sP@ssW0rd!
   ```
