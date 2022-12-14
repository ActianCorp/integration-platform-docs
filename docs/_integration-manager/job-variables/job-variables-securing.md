---
layout: default
title: Securing Macros
nav_order: 5
parent: Job Macros
---
# Securing Macros

You can permanently encrypt macro values by using the Secure flag. Once a macro is flagged as secure, it can never be read outside of the integration engine runtime.

When you set a macro as secure, it is masked at all levels of the Integration Manager application and can never be "revealed" directly, including from the UI, the API, or any logging mechanism.

Note that secure macros can still be edited and/or deleted by users with write permission to the macro parent object, but the value can never be viewed (by anyone).

Semantically, this is often referred to as API encryption. For encryption-at-rest details, see the Integration Manager Admin documentation. Note that all macros are encrypted-at-rest on the DataCloud Platform.