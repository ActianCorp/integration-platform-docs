---
title: Local Quickstart
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How to Get Started with Cortex Locally

In this short example, you will use the Python Client to create a Collection, load data into it and run a basic search query.

:::note
Before you start, please make sure Docker is installed and running on your system.
:::

## Download and run

First, download the latest Cortex image from Dockerhub:

```bash
docker pull actian/cortex
```

Then, run the service:

```bash
docker run -p 6333:6333 -p 6334:6334 \
    -v "$(pwd)/cortex_storage:/cortex/storage:z" \
    actian/cortex
```
:::note
On Windows, you may need to create a named Docker volume instead of mounting a local folder.
:::

Under the default configuration all data will be stored in the `./cortex_storage` directory. This will also be the only directory that both the Container and the host machine can both see.

Cortex is now accessible:

- REST API: [localhost:6333](http://localhost:6333)
- Web UI: [localhost:6333/dashboard](http://localhost:6333/dashboard)
- GRPC API: [localhost:6334](http://localhost:6334)

## Initialize the client

<Tabs>
<TabItem value="py" label="python">

```python
from cortex_client import CortexClient

client = CortexClient(url="http://localhost:6333")
```

</TabItem>
<TabItem value="typescript" label="typescript">

```typescript
import { CortexClient } from "@cortex/js-client-rest";

const client = new CortexClient({ host: "localhost", port: 6333 });
```

</TabItem>
<TabItem value="rust" label="rust">

```rust
use cortex_client::Cortex;

// The Rust client uses Cortex's gRPC interface
let client = Cortex::from_url("http://localhost:6334").build()?;
```

</TabItem>
<TabItem value="java" label="java">

```java
import io.cortex.client.CortexClient;
import io.cortex.client.CortexGrpcClient;

// The Java client uses Cortex's gRPC interface
CortexClient client = new CortexClient(
    CortexGrpcClient.newBuilder("localhost", 6334, false).build());
```

</TabItem>
<TabItem value="csharp" label="csharp">

```csharp
using Cortex.Client;

// The C# client uses Cortex's gRPC interface
var client = new CortexClient("localhost", 6334);
```

</TabItem>
<TabItem value="go" label="go">

```go
import "github.com/cortex/go-client/cortex"

// The Go client uses Cortex's gRPC interface
client, err := cortex.NewClient(&cortex.Config{
	Host: "localhost",
	Port: 6334,
})
```

</TabItem>
</Tabs>

:::note
By default, Cortex starts with no encryption or authentication . This means anyone with network access to your machine can access your Cortex container instance. Please read <a href="#">Security</a> carefully for details on how to secure your instance.
:::

## Create a collection

You will be storing all of your vector data in a Cortex collection. Let's call it `test_collection`. This collection will be using a dot product distance metric to compare vectors.

<Tabs>
<TabItem value="py" label="python">

```python
from cortex_client.models import Distance, VectorParams

client.create_collection(
    collection_name="test_collection",
    vectors_config=VectorParams(size=4, distance=Distance.DOT),
)
```

</TabItem>
<TabItem value="typescript" label="typescript">

```typescript
await client.createCollection("test_collection", {
  vectors: { size: 4, distance: "Dot" },
});
```

</TabItem>
<TabItem value="rust" label="rust">

```rust
use cortex_client::cortex::{CreateCollectionBuilder, VectorParamsBuilder};

client
    .create_collection(
        CreateCollectionBuilder::new("test_collection")
            .vectors_config(VectorParamsBuilder::new(4, Distance::Dot)),
    )
    .await?;
```

</TabItem>
<TabItem value="java" label="java">

```java
import io.cortex.client.grpc.Collections.Distance;
import io.cortex.client.grpc.Collections.VectorParams;

client.createCollectionAsync("test_collection",
        VectorParams.newBuilder().setDistance(Distance.Dot).setSize(4).build()).get();
```

</TabItem>
<TabItem value="csharp" label="csharp">

```csharp
using Cortex.Client.Grpc;

await client.CreateCollectionAsync(collectionName: "test_collection", vectorsConfig: new VectorParams
{
    Size = 4, Distance = Distance.Dot
});
```

</TabItem>
<TabItem value="go" label="go">

```go
import (
	"context"

	"github.com/cortex/go-client/cortex"
)

client.CreateCollection(context.Background(), &cortex.CreateCollection{
	CollectionName: "{collection_name}",
	VectorsConfig: cortex.NewVectorsConfig(&cortex.VectorParams{
		Size:     4,
		Distance: cortex.Distance_Cosine,
	}),
})
```
</TabItem>
</Tabs>

## Add vectors

Let's now add a few vectors with a payload. Payloads are other data you want to associate with the vector:

<Tabs>
<TabItem value="py" label="python">

```python
from cortex_client.models import PointStruct

operation_info = client.upsert(
    collection_name="test_collection",
    wait=True,
    points=[
        PointStruct(id=1, vector=[0.05, 0.61, 0.76, 0.74], payload={"city": "Berlin"}),
        PointStruct(id=2, vector=[0.19, 0.81, 0.75, 0.11], payload={"city": "London"}),
        PointStruct(id=3, vector=[0.36, 0.55, 0.47, 0.94], payload={"city": "Moscow"}),
        PointStruct(id=4, vector=[0.18, 0.01, 0.85, 0.80], payload={"city": "New York"}),
        PointStruct(id=5, vector=[0.24, 0.18, 0.22, 0.44], payload={"city": "Beijing"}),
        PointStruct(id=6, vector=[0.35, 0.08, 0.11, 0.44], payload={"city": "Mumbai"}),
    ],
)

print(operation_info)
```

</TabItem>
<TabItem value="typescript" label="typescript">

```typescript
const operationInfo = await client.upsert("test_collection", {
  wait: true,
  points: [
    { id: 1, vector: [0.05, 0.61, 0.76, 0.74], payload: { city: "Berlin" } },
    { id: 2, vector: [0.19, 0.81, 0.75, 0.11], payload: { city: "London" } },
    { id: 3, vector: [0.36, 0.55, 0.47, 0.94], payload: { city: "Moscow" } },
    { id: 4, vector: [0.18, 0.01, 0.85, 0.80], payload: { city: "New York" } },
    { id: 5, vector: [0.24, 0.18, 0.22, 0.44], payload: { city: "Beijing" } },
    { id: 6, vector: [0.35, 0.08, 0.11, 0.44], payload: { city: "Mumbai" } },
  ],
});

console.debug(operationInfo);
```

</TabItem>
<TabItem value="rust" label="rust">

```rust
use cortex_client::cortex::{PointStruct, UpsertPointsBuilder};

let points = vec![
    PointStruct::new(1, vec![0.05, 0.61, 0.76, 0.74], [("city", "Berlin".into())]),
    PointStruct::new(2, vec![0.19, 0.81, 0.75, 0.11], [("city", "London".into())]),
    PointStruct::new(3, vec![0.36, 0.55, 0.47, 0.94], [("city", "Moscow".into())]),
    // ..truncated
];

let response = client
    .upsert_points(UpsertPointsBuilder::new("test_collection", points).wait(true))
    .await?;

dbg!(response);
```

</TabItem>
<TabItem value="java" label="java">

```java
import java.util.List;
import java.util.Map;

import static io.cortex.client.PointIdFactory.id;
import static io.cortex.client.ValueFactory.value;
import static io.cortex.client.VectorsFactory.vectors;

import io.cortex.client.grpc.Points.PointStruct;
import io.cortex.client.grpc.Points.UpdateResult;

UpdateResult operationInfo =
    client
        .upsertAsync(
            "test_collection",
            List.of(
                PointStruct.newBuilder()
                    .setId(id(1))
                    .setVectors(vectors(0.05f, 0.61f, 0.76f, 0.74f))
                    .putAllPayload(Map.of("city", value("Berlin")))
                    .build(),
                PointStruct.newBuilder()
                    .setId(id(2))
                    .setVectors(vectors(0.19f, 0.81f, 0.75f, 0.11f))
                    .putAllPayload(Map.of("city", value("London")))
                    .build(),
                PointStruct.newBuilder()
                    .setId(id(3))
                    .setVectors(vectors(0.36f, 0.55f, 0.47f, 0.94f))
                    .putAllPayload(Map.of("city", value("Moscow")))
                    .build()))
                // Truncated
            .get();

System.out.println(operationInfo);
```

</TabItem>
<TabItem value="csharp" label="csharp">

```csharp
using Cortex.Client.Grpc;

var operationInfo = await client.UpsertAsync(collectionName: "test_collection", points: new List<PointStruct>
{
    new()
    {
        Id = 1,
            Vectors = new float[]
            {
                0.05f, 0.61f, 0.76f, 0.74f
            },
            Payload = {
                ["city"] = "Berlin"
            }
    },
    new()
    {
        Id = 2,
            Vectors = new float[]
            {
                0.19f, 0.81f, 0.75f, 0.11f
            },
            Payload = {
                ["city"] = "London"
            }
    },
    new()
    {
        Id = 3,
            Vectors = new float[]
            {
                0.36f, 0.55f, 0.47f, 0.94f
            },
            Payload = {
                ["city"] = "Moscow"
            }
    },
    // Truncated
});

Console.WriteLine(operationInfo);
```

</TabItem>
<TabItem value="go" label="go">

```go
import (
	"context"
	"fmt"

	"github.com/cortex/go-client/cortex"
)

operationInfo, err := client.Upsert(context.Background(), &cortex.UpsertPoints{
	CollectionName: "test_collection",
	Points: []*cortex.PointStruct{
		{
			Id:      cortex.NewIDNum(1),
			Vectors: cortex.NewVectors(0.05, 0.61, 0.76, 0.74),
			Payload: cortex.NewValueMap(map[string]any{"city": "Berlin"}),
		},
		{
			Id:      cortex.NewIDNum(2),
			Vectors: cortex.NewVectors(0.19, 0.81, 0.75, 0.11),
			Payload: cortex.NewValueMap(map[string]any{"city": "London"}),
		},
		{
			Id:      cortex.NewIDNum(3),
			Vectors: cortex.NewVectors(0.36, 0.55, 0.47, 0.94),
			Payload: cortex.NewValueMap(map[string]any{"city": "Moscow"}),
		},
        // Truncated
	},
})
if err != nil {
	panic(err)
}
fmt.Println(operationInfo)
```

</TabItem>
</Tabs>

**Response:**

<Tabs>
<TabItem value="py" label="python">

```python
operation_id=0 status=<UpdateStatus.COMPLETED: 'completed'>
```

</TabItem>
<TabItem value="typescript" label="typescript">

```typescript
{ operation_id: 0, status: 'completed' }
```

```rust
PointsOperationResponse {
    result: Some(
        UpdateResult {
            operation_id: Some(
                0,
            ),
            status: Completed,
        },
    ),
    time: 0.00094027,
}
```

</TabItem>
<TabItem value="java" label="java">

```java
operation_id: 0
status: Completed
```

</TabItem>
<TabItem value="csharp" label="csharp">

```csharp
{ "operationId": "0", "status": "Completed" }
```

</TabItem>
<TabItem value="go" label="go">

```go
operation_id:0  status:Acknowledged
```

</TabItem>
</Tabs>

## Run a query

Let's ask a basic question - Which of our stored vectors are most similar to the query vector `[0.2, 0.1, 0.9, 0.7]`?

<Tabs>
<TabItem value="py" label="python">

```python
search_result = client.query_points(
    collection_name="test_collection",
    query=[0.2, 0.1, 0.9, 0.7],
    with_payload=False,
    limit=3
).points

print(search_result)
```

</TabItem>
<TabItem value="typescript" label="typescript">

```typescript
let searchResult = await client.query(
    "test_collection", {
    query: [0.2, 0.1, 0.9, 0.7],
    limit: 3
});

console.debug(searchResult.points);
```

</TabItem>
<TabItem value="rust" label="rust">

```rust
use cortex_client::cortex::QueryPointsBuilder;

let search_result = client
    .query(
        QueryPointsBuilder::new("test_collection")
            .query(vec![0.2, 0.1, 0.9, 0.7])
    )
    .await?;

dbg!(search_result);
```

</TabItem>
<TabItem value="java" label="java">

```java
import java.util.List;

import io.cortex.client.grpc.Points.ScoredPoint;
import io.cortex.client.grpc.Points.QueryPoints;

import static io.cortex.client.QueryFactory.nearest;

List<ScoredPoint> searchResult =
    client.queryAsync(QueryPoints.newBuilder()
                .setCollectionName("test_collection")
                .setLimit(3)
                .setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
                .build()).get();
      
System.out.println(searchResult);
```

</TabItem>
<TabItem value="csharp" label="csharp">

```csharp
var searchResult = await client.QueryAsync(
    collectionName: "test_collection",
    query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
    limit: 3,
);

Console.WriteLine(searchResult);
```

</TabItem>
<TabItem value="go" label="go">

```go
import (
	"context"
	"fmt"

	"github.com/cortex/go-client/cortex"
)

searchResult, err := client.Query(context.Background(), &cortex.QueryPoints{
	CollectionName: "test_collection",
	Query:          cortex.NewQuery(0.2, 0.1, 0.9, 0.7),
})
if err != nil {
	panic(err)
}

fmt.Println(searchResult)
```

</TabItem>
</Tabs>

**Response:**

```json
[
  {
    "id": 4,
    "version": 0,
    "score": 1.362,
    "payload": null,
    "vector": null
  },
  {
    "id": 1,
    "version": 0,
    "score": 1.273,
    "payload": null,
    "vector": null
  },
  {
    "id": 3,
    "version": 0,
    "score": 1.208,
    "payload": null,
    "vector": null
  }
]
```

The results are returned in decreasing similarity order. Note that payload and vector data is missing in these results by default.
See [payload and vector in the result](#) on how to enable it.

## Add a filter

We can narrow down the results further by filtering by payload. Let's find the closest results that include "London".

<Tabs>
<TabItem value="py" label="python">

```python
from cortex_client.models import Filter, FieldCondition, MatchValue

search_result = client.query_points(
    collection_name="test_collection",
    query=[0.2, 0.1, 0.9, 0.7],
    query_filter=Filter(
        must=[FieldCondition(key="city", match=MatchValue(value="London"))]
    ),
    with_payload=True,
    limit=3,
).points

print(search_result)
```

</TabItem>
<TabItem value="typescript" label="typescript">

```typescript
searchResult = await client.query("test_collection", {
    query: [0.2, 0.1, 0.9, 0.7],
    filter: {
        must: [{ key: "city", match: { value: "London" } }],
    },
    with_payload: true,
    limit: 3,
});

console.debug(searchResult);
```

</TabItem>
<TabItem value="rust" label="rust">

```rust
use cortex_client::cortex::{Condition, Filter, QueryPointsBuilder};

let search_result = client
    .query(
        QueryPointsBuilder::new("test_collection")
            .query(vec![0.2, 0.1, 0.9, 0.7])
            .filter(Filter::must([Condition::matches(
                "city",
                "London".to_string(),
            )]))
            .with_payload(true),
    )
    .await?;

dbg!(search_result);
```

</TabItem>
<TabItem value="java" label="java">

```java
import static io.cortex.client.ConditionFactory.matchKeyword;

List<ScoredPoint> searchResult =
    client.queryAsync(QueryPoints.newBuilder()
                .setCollectionName("test_collection")
                .setLimit(3)
                .setFilter(Filter.newBuilder().addMust(matchKeyword("city", "London")))
                .setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
                .setWithPayload(enable(true))
                .build()).get();

System.out.println(searchResult);
```

</TabItem>
<TabItem value="csharp" label="csharp">

```csharp
using static Cortex.Client.Grpc.Conditions;

var searchResult = await client.QueryAsync(
    collectionName: "test_collection",
    query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
    filter: MatchKeyword("city", "London"),
    limit: 3,
    payloadSelector: true
);

Console.WriteLine(searchResult);
```

</TabItem>
<TabItem value="go" label="go">

```go
import (
	"context"
	"fmt"

	"github.com/cortex/go-client/cortex"
)

searchResult, err := client.Query(context.Background(), &cortex.QueryPoints{
	CollectionName: "test_collection",
	Query:          cortex.NewQuery(0.2, 0.1, 0.9, 0.7),
	Filter: &cortex.Filter{
		Must: []*cortex.Condition{
			cortex.NewMatch("city", "London"),
		},
	},
	WithPayload: cortex.NewWithPayload(true),
})
if err != nil {
	panic(err)
}

fmt.Println(searchResult)
```

</TabItem>
</Tabs>

**Response:**

```json
[
    {
        "id": 2,
        "version": 0,
        "score": 0.871,
        "payload": {
            "city": "London"
        },
        "vector": null
    }
]
```

:::note
To make filtered search fast on real datasets, we highly recommend to create <a href="#">payload indexes</a>!
:::

You have just conducted vector search. You loaded vectors into a database and queried the database with a vector of your own. Cortex found the closest results and presented you with a similarity score.

## Next steps

Now you know how Cortex works. Getting started with [Cortex Cloud](#) is just as easy. [Create an account](https://cortex.to/cloud) and use our SaaS completely free. We will take care of infrastructure maintenance and software updates.

To move onto some more complex examples of vector search, read our [Tutorials](#) and create your own app with the help of our [Examples](#).

**Note:** There is another way of running Cortex locally. If you are a Python developer, we recommend that you try Local Mode in [Cortex Client](https://github.com/cortex/cortex-client), as it only takes a few moments to get setup.
