---
title: Web Server Properties
hide_table_of_contents: true
tags:
 - Content Issues
---

# Web Server Properties

Refer to the following table for available Web Server properties:

| Property| Description| Default |
| --- | --- | --- |
| `im.base-url` | Allows you to set or customize the base URL for creating or resolving API URLs | `http://IM_SERVER_DOMAIN_NAME:{server.port}` |
| `security.require-ssl` | Strictly disallows any non-https traffic | `false` |
| `server.port` | Port used for API and UI access | `8080` |
| `server.ssl.key-alias` | The alias/certificate name used for encrypting HTTPS traffic | — |
| `server.ssl.key-store` | The keystore file location containing the HTTPS certificate | — |
| `server.ssl.key-store-password` | The certificate password | — |
| `server.ssl.key-store-type` | The keystore type (`PKCS12` recommended) | — |
| `spring.servlet.multipart.enabled` | Whether to enable support of multipart uploads | `true` |
| `spring.servlet.multipart.file-size-threshold` | Threshold after which files are written to disk. <font color="red">In what unit? Bytes? KB?</font> | 100KB <font color="red">What would you enter for 100KB?</font>|
| `spring.servlet.multipart.location` | Intermediate location of uploaded files | `{sharedDataPath}/tmp` |
| `spring.servlet.multipart.max-file-size` | Max file size <font color="red">In what unit? Bytes? MB?</font> | 1MB <font color="red">What would you enter for 1MB?</font> |
| `spring.servlet.multipart.max-request-size` | Max request size <font color="red">In what unit? Bytes? MB?</font> | 10MB <font color="red">What would you enter for 10MB?</font> |