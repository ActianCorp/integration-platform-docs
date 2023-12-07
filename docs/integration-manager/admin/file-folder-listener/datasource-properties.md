---
title: Datasource Properties
hide_table_of_contents: true
---

# Datasource Properties

| Property | Description | Default |
| :--- | :--- | :--- |
| `spring.datasource.driver-class-name` | JDBC Driver class name for the persistence instance (`org.h2.Driver` &#124; `com.microsoft.sqlserver.jdbc.SQLServerDriver` &#124; `com.mysql.jdbc.Driver`) | `org.h2.Driver` |
| `spring.datasource.url` | JDBC URL String for connection to the persistence instance | `jdbc:h2:{sharedDataPath}/embedded/data/h2; DB_CLOSE_ON_EXIT=FALSE` |
| `spring.datasource.initialization-mode` | **Note:** This function is delegated to liquibase. Do not edit. | never |
| `spring.datasource.continue-on-error` | (`true` &#124; `false`)<br /> By default, Spring Boot enables the fail-fast feature of the Spring JDBC initializer. This means that, if the scripts cause exceptions, the application fails to start. | `false` |
| `spring.liquibase.change-log` | Location of the liquibase change-log, which drives database initialization and database updates for newer versions. | `classpath:db.changelog-master.xml` |

