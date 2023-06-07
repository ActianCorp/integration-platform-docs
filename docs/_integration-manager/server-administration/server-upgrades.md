---
layout: default
title: Server Upgrades
nav_order: 900
parent: Server Administration
---
# Server Upgrades

## Overview

Integration Manager server upgrades are safe and reversible for 3.x.a -> 3.x.b upgrades. It is highly recommended to test upgrades first on a development server to identify any post-upgrade issues (i.e. test your deployed integrations) in order to prevent a rollback scenario.

Upgrade installations will typically require an uninstall, but note that uninstall will ONLY remove application libraries, it will NOT remove any of your application data or configuration metadata.

## Upgrade Instructions

Upgrade instructions are no different than new installation instructions, see [QuickStart Install](https://actiancorp.github.io/integration-platform-docs/integration-agent/quickstart-install)