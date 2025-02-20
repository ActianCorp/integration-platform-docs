---
title: Introduction
---

# Introduction

This reference includes the complete set of GraphQL types, queries, mutations, and their parameters for retrieving catalog items and mutating them (updates, deletes and creates).

## Authentication

To use the API, you must provide a valid API key in the HTTP headers of your requests.

Here are the steps to authenticate your calls:

* Create a new API Key in the dedicated section of the Admin page:
  *  `https://your_tenant.zeenea.app/admin/settings/api-keys`
* Make sure to store the API SECRET in a secure location, as it will no longer be displayed after you close the window
* In your HTTP requests, add the following headers:
    * `X-API-SECRET: {api-secret-value}`

## GraphQL schema

There are several ways to retrieve the GraphQL schema definition (that can be necessary to generate client code). First, you can leverage GraphQL introspection APIs:

### With Gradle/Apollo plugin:

```
./gradlew downloadApolloSchema --endpoint="https://_your_tenant_.zeenea.app/api/catalog/graphql" \
      --schema=schema.graphql --header="X-API-SECRET: TOKEN_API_SECRET_HERE"
```

### With Python/sgqlc

```
py -m sgqlc.introspection -H "X-API-SECRET: TOKEN_API_SECRET" -H "Accept: application/json" \
    https://_your_tenant_.zeenea.app/api/catalog/graphql schema.graphql
```

Or you can just download the latest schema [here](https://docs.zeenea.com/schema.graphql)

## Principles
Zeenea Catalog API leverages GraphQL to allow querying the catalog graph while defining precisely the properties and edges that you need in the result.

Zeenea Catalog API is based on GraphQL. To learn more about GraphQL, and how it differs from traditional REST APIs, please visit the official GraphQL website.

Zeenea Catalog API also follows Relay convention. While Relay has initially been designed to support React web development at scale on top of GraphQL, it is also a very opiniated framework on how to design a GraphQL API, and especially how to manage connections between entities in a GraphQL schema. Following those conventions allows developers to use one of the Relay client libraries to simplify script development, especially handling paginated lists of connected items.

You can learn more on Relay on the [official Relay website](https://relay.dev/).

As an example is often more explanatory than long sentences, here is a query that will retrieve a dataset with a couple of properties, and two connections: fields and curator.

```graphql
$ref = 'DATABASE/starwars/rockets';
```

```graphql
$ref = 'DATABASE/starwars/rockets';
query datasetsAndFields($ref: ItemReference!) {
  item(ref: $ref) {
    type
    key
    name
    schema: property(ref: "schema")
    table_name: property(ref: "source_name")
    classification: property(ref: "classification")
    domain: property(ref: "business_domain")
    fields: connection(ref: "fields") {
      nodes {
        name
        type
        pii: property(ref: "PII")
      }
    }
    curators: connection(ref: "curators", first: 1) {
      nodes {
        name
        email: property(ref: "email")
      }
    }
  }
}
```

This illustrates the main principles of the API:

* items are located using a reference, that can carry different ways to identify an object
* properties defined in the metamodel can be retrieved by using a reference (eg. classification), and the property pseudo-field defined in the graphql schema
* lists of connected items can be retrieved by using a named alias (eg. fields), and the connection pseudo-field defined in the graphql schema

The former query would produce the following payload:

```graphql
{
  "data": {
    "type": "dataset",
    "key": "DATABASE/starwars/rockets",
    "name": "Star wars rockets",
    "schema": "starwars",
    "table_name": "rockets",
    "classification": "Internal",
    "domain": "Space exploration",
    "fields": {
      "nodes": [
        {
          "name": "id",
          "type": "Number",
          "pii": "false"
        },
        {
          "name": "model",
          "type": "Text",
          "pii": "false"
        },
        {
          "name": "pilot",
          "type": "Text",
          "pii": "true"
        }
      ]
    },
    "curators": {
      "nodes": [
        {
          "name": "Paul Smith",
          "email": "psmith@nowhere.far"
        }
      ]
    }
  }
}
```

Using the API requires former knowledge of the metamodel defined in the target catalog (item types, properties, links).

### Generic item model

Unlike most GraphQL APIs, Zeenea relies on a very generic GraphQL schema that reflects the very dynamic nature of the Zeenea Metamodel.

The GraphQL schema exposed by the API is the following:

  ![](/img/zeenea-graphql-schema.png)

The schema mostly relies on a single type, Item, that contains a few attributes that are common to all item types, and two pseudo-fields :

* property, used to retrieve the value or values of a property defined in the metamodel
* connection, used to retrieve a collection of items linked to their parent through a named link.

In Zeenea's data model, all links between items are bi-directional and may have different cardinalities. In the GraphQL API, links are fetched in a given direction (from a parent item), using the name of the relation in that direction, and are always considered having a many cardinality.

For instance, datasets and fields are linked in the Zeenea model by a one-to-many relationship. In the GraphQL API, it will map to 2 differents named connections:

* from the dataset, you can fetch the fields connection to get the list of all the items of type field of the dataset
* from the field, you can fetch the dataset connection to fetch the item of type dataset. It will be mapped to a connection of size 1.

Properties and connections are identified by codes. Those codes are defined in the metamodel.

Item is an interface, that is specialized for some of the item types to provide information that is specific to that type. So far, only the Dataset and Data Process type is specialized.

You can retrieve type-specific information by using the ...on GraphQL operator. A sample query illustrates its use in the Examples section below.

### Reference system

To retrieve information, the API relies on a set of reference types to identify items or elements of the metamodel.

The ItemReference is used to reference an item. It can map to the item unique ID (retrieved from the API) or one of the unique keys available for an item.

The PropertyReference is the way to retrieve a property of an item. It maps to the code or the name of the property (case sensitive) as defined in the metamodel. Properties can be user-defined (then the name is available in the user-defined metamodel), or built-in.

Built-in property are referenced here.

The ConnectionReference identifies links between items. Links are bi-directional by design, but may have different names depending on the direction used to fetch them.

Connection names are referenced here.

### Using connections

Similarly to properties, connections are identified by code using the ConnectionReference type.

As connections can be of any size, they are always paginated, using the standard Relay mechanism. The default (and max) page size is 20.

To iterate through a connection pages, you must use the PageInfo object. See sample here.

### Dealing with errors

Except when there is a server or access failure (that will raise a 40X or 5XX HTTP response code), GraphQL always returns a HTTP Status Code 200, and potential errors are included in the response payload.

The generic structure of a GraphQL query is the following (see GraphQL spec for a comprehensive documentation).

```graphql
{
  "errors": [ { ... }],
  "data": { ... },
  "extensions" : { ... }
}
```

An error object has the following form (we use the extensionsmechanism to provide more context to the error, especially when the error comes from reference resolution):

```graphql
{
  "message": "Property domain has not been found",
  "path": ["contact", "domain"],
  "locations": [
    {
      "line": 6,
      "column": 3
    }
  ],
  "extensions": {
    "code": "PROPERTY_NOT_FOUND",
    "value": "domain",
    "availableValues": ["firstName", "lastName", "email", "phone"]
  }
}
```

The list of error codes can be found here

### Complexity check

GraphQL provides a very powerful semantic to query a graph-based system. This power comes with a drawback: it is theoretically possible to forge a query that would retrieve the entire graph, or recursively load connections with an infinite depth - leading to potentially disastrous performance issues.

To protect the system from over complex queries, Zeenea performs a complexity check on every query. Complexity check is performed on the structure of the query, not on the size of the results - this means that a query that passes the check will always pass it, even if the size of the results increases.

The complexity score of a query is provided in the extensions attribute of the GraphQL response payload:

```graphql
{
  "errors": [],
  "data": {},
  "extensions": {
    "complexityScore": 20
  }
}
```

If one of your query is too complex, you will have to decompose it to simpler sub-queries.

For instance, let's consider the following query:

```graphql
query datasetsAndFields($datasetRef: ItemReference!) {
  item(ref: $datasetRef) {
    fields: connection(ref: "fields") {
      nodes {
        definitions: connection(ref: "definitions") {
          nodes {
            implementations: connection(ref: "implementations") {
              nodes {
                type
                name
                description
              }
            }
          }
        }
      }
    }
  }
}
```

Submitting this query might raise a complexity check error (QUERY_TOO_COMPLEX). In this case, you can reduce the depth of the initial query by removing one of the connection traversals:

```graphql
query datasetsAndFields($datasetRef: ItemReference!) {
  item(ref: $datasetRef) {
    fields: connection(ref: "fields") {
      nodes {
        definitions: connection(ref: "definitions") {
          nodes {
            key
          }
        }
      }
    }
  }
}
```

While iterating the definitions connection, you can submit a sub-query to retrieve the implementations connection, using the key of the parent item. For each item in the definitions connection, you can run the sub-query:

```graphql
query businessTermImplementations($key: ItemReference!) {
  connection(sourceRef: $key, connectionRef: "implementations") {
    nodes {
      type
      name
      description
    }
  }
}
```