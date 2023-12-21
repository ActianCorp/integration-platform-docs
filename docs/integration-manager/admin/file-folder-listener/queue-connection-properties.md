---
title: Queue Connection Properties
hide_table_of_contents: true
tags:
 - Content Issues
---

# Queue Connection Properties

| Property| Description| Default |
| --- | --- | --- |
| `queue.host` | RabbitMQ server name or Cluster domain | — |
| `queue.port`| RabbitMQ messaging port | `8063`|
| `queue.username` | RabbitMQ user. This should be a user with administrative privileges that can create users, queues, and exchanges. | — |
| `queue.password` | RabbitMQ user password | — |
| `queue.connectionTimeout` | RabbitMQ connection timeout property | — |
| `queue.ssl.enabled`| Enable TLS for messaging protocol <font color="red">What are the allowable values -- true/false?</font> | — |
| `queue.ssl.key-store` | The keystore file location containing the alias used to encrypt messages | — |
| `queue.ssl.key-store- password`| The keystore alias password | — |
| `queue.ssl.key-store-type` | The keystore type (`PKCS12` recommended) | — |
| `queue.ssl.protocol` | Enable TLS for messaging protocol <font color="red">This seems like the wrong description. Same as queue.ssl.enabled. What are the allowable values?</font> | — |