---
title: Access Token Signatures
tags:
 - Content Issues
---

# Access Token Signatures

<font color="red">
Draft topic for Jira issue IP-5162.

Need intro here, and review of content below.
</font>
 
Create a new keystore with keypair to be used for token signatures:

`keytool -genkeypair -alias integration-manager -keyalg RSA -keystore token.keystore`

Export the public key and save to file:

`keytool -export -alias integration-manager -keystore token.keystore | openssl x509 -inform der -pubkey -noout`

Configure the following properties for Integration Manager in `application.properties`:

```
oauth.server.token.key-alias=integration-manager
oauth.server.token.key-store=/<path-to-keystore>/token.keystore
oauth.server.token.key-store-password=<keystore-password>
oauth.server.token.public-key=<path-to-public-key>/token-public-key.txt
```