---
title: Zookeeper
---

# Zookeeper

## Overview

ZooKeeper is a distributed, open-source coordination service for distributed applications. 

Integration Manager leverages ZooKeeper for Job Execution Mutex capabilities when executing across multiple engines, multiple workers, and/or distributed worker pools.

Integration Manager is compatible with Apache ZooKeeper 3.6.3 in Standalone Operation or Replicated Ensemble Deployments.

## Quick Start Installation

**Prerequisite**: Java 11

1. Download Apache ZooKeeper 3.6.3: [https://www.apache.org/dyn/closer.lua/zookeeper/zookeeper-3.6.3/apache-zookeeper-3.6.3-bin.tar.gz](https://www.apache.org/dyn/closer.lua/zookeeper/zookeeper-3.6.3/apache-zookeeper-3.6.3-bin.tar.gz)
2. Unzip to a Java-friendly path (no spaces), e.g. C:/ProgramData/Apache/zookeeper-3.6.3 (Windows), or /opt/Apache/zookeeper-3.6.3 (Linux)
3. Create data directory at `../Apache/zookeeper-3.6.3/data`.
4. Rename `zoo_sample.cfg` to `zoo.cfg` in `../Apache/zookeeper-3.6.3/conf`.
5. In `zoo.cfg`, set:
   * Windows: `dataDir=C:/ProgramData/Apache/zookeeper-3.6.3/data`
   * Linux: `dataDir=/opt/Apache/zookeeper-3.6.3/data`
6. Add a new system environment variable `ZOOKEEPER_HOME`:
   * Windows: `ZOOKEEPER_HOME = C:/ProgramData/Apache/zookeeper-3.6.3`
   * Linux: ```ZOOKEEPER_HOME = /opt/Apache/zookeeper-3.6.3```
7. Edit the system environment variable PATH by adding the entry:
   ```
   %ZOOKEEPER_HOME%/bin
   ```
8.  Open a command prompt and type `zkserver` to verify your installation.

## Integration Manager Configuration

Integration Manager uses the "zookeeper" prefix properties in the `application.properties` file to connect to a ZooKeeper Standalone or Ensemble deployment.

:::note
   Any change to `application.properties` requires a restart of the Integration Manager Service.
:::

Here are some example properties to connect Integration Manager to a ZooKeeper deployment:
```
# ZooKeeper Connection Info
zookeeper.enabled=true
zookeeper.connection-string=10.0.1.101:2181,10.0.2.101:2181,10.0.3.101:2181 # comma separated list of zk ensemble IP(s) and port(s)
```

## Additional Notes

* For additional information and installation verification activities, see: https://zookeeper.apache.org/doc/r3.6.3/zookeeperStarted.html
* Replicated Ensemble deployment is recommended when high-availability is required: https://zookeeper.apache.org/doc/r3.6.3/zookeeperAdmin.html#sc_zkMulitServerSetup