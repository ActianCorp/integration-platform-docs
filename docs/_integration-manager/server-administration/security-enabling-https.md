---
layout: default
title: Enabling HTTPS
nav_order: 1
parent: Server Administration
---
# Enabling HTTPS

## IMPORTANT!

### Using HTTPS is always recommended. API tokens, credentials, and payloads are subject to hijack otherwise.

### HTTPS is always enabled and enforced for Integration Manager powered by DataCloud (SaaS and VPC).
<br>
HTTPS encryption is configured using a Keystore file (which contains one or more SSL certificates). 

### In general, SSL certificates have 2 functions:
* encryption
* authenticate the identity of the certificate’s owner

### There are 2 types of SSL certificates:
* **CA-Signed:** When you purchase a CA-Signed certificate, you’re required to undergo a validation process that confirms key identifying information. A CA-Signed certificate is trusted by every browser or device that trusts the certificate authority. Certificate authorities are required to undergo regular audits and must comply with a strict set of guidelines to be trusted. 
* **Self-Signed:** When you sign a certificate yourself, you’re not performing the requisite validation. Browsers have been designed to NOT trust certificates by default. Use of a self-signed certificate will generate a browser error for any attempt to access over HTTPS. Self-signed certificates are only appropriate for testing environments and non-public networks. 

## Step 1: Create Keystore/Import Certificate

Note that either keytool or OpenSSL tools can be used to generate, import, and manage certificates from the command line. For OpenSSL certificate instructions, see https://www.openssl.org/.

### Option A: How to Create and Import a CA-Signed Certificate

Open a command console and change directory to the JRE bin folder.

Create a new keystore file using Java keytool. You can use whatever alias and filename you choose. For illustration purposes, we are using "integration-manager" and "keystore.p12", respectively.

Then, create a certificate signing request file using your newly created keystore.

```
cd (ProgramData)/Actian/IntegrationManager/jre/bin
keytool -genkey -alias integration-manager -keyalg RSA -keystore keystore.p12
keytool -certreq -alias integration-manager -keyalg RSA -file certificate-signing-request.txt -keystore keystore.p12
```

Send the certificate request to the Certificate Authority you are using. 

### Wait for your new certificate to arrive...

When your certificate(s) arrive, import them (usually \*.cer files) into your keystore. Often times there are multiple cert files provided, each with it's own unique name. Note "root" and "intermediate" are just example names. The "server" certificate will replace the existing self-signed one in the keystore, so you should use the same alias you specified in step 2 when generating the signing request.

```
keytool -import -alias root -keystore keystore.p12 -trustcacerts -file root.cer
keytool -import -alias intermediate -keystore keystore.p12 -trustcacerts -file intermediate.cer
keytool -import -alias integration-manager -keystore keystore.p12 -trustcacerts -file server.cer
```

Contact your Certificate Authority with any specific questions/concerns/issues you encounter during import. Actian Support will not be able to resolve issues with CA-Signed Certificates.

### Option B: How to Create and Import a Self-Signed Certificate

**Self-signed certs should not be used in production environments!**

Open a command console and change directory to the JRE bin folder.

Create a new keystore file using Java keytool. You can use whatever alias and filename you choose. For illustration purposes, we are using "integration-manager" and "keystore.p12", respectively.

You will be prompted to set a keystore password and also add identity details (name, company, address, etc).

```
cd (ProgramData)/Actian/IntegrationManager/jre/bin
keytool -genkeypair -alias integration-manager -keyalg RSA -keysize 2048 -storetype PKCS12 -keystore keystore.p12 -validity 3650
```

## Step 2: Configure Integration Manager

For illustration purposes, we are using "integration-manager" and "keystore.p12", respectively.

* These properties apply to Self-Signed and CA-Signed keystores 
* Note that any application.properties change requires a restart of the Integration Manager Service
* It is always good practice to make sure you do not have duplicate properties in your file

Add to application.properties:
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

"cacerts" is an embedded keystore for the Java Runtime Environment.

Export the certificate out of the keystore:

```
keytool -exportcert -alias integration-manager -keystore keystore.p12 -file integration-manager.cer -storetype pkcs12 -noprompt -storepass D0N0tU5eTh1sP@ssW0rd!
```

Import the certificate to the jre/lib/security/cacerts keystore:

```
keytool -import -alias integration-manager -file integration-manager.cer -keystore "(ProgramData)/Actian/IntegrationManager/jre/lib/security/cacerts" -storepass D0N0tU5eTh1sP@ssW0rd!
```