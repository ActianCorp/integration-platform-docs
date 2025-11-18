---
title: Points
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Points

The points are the central entity that Cortex operates with.
A point is a record consisting of a [vector](#) and an optional [payload](#).

It looks like this:

```json
// This is a simple point
{
    "id": 129,
    "vector": [0.1, 0.2, 0.3, 0.4],
    "payload": {"color": "red"},
}
```

You can search among the points grouped in one [collection](#) based on vector similarity.
This procedure is described in more detail in the [search](#) and [filtering](#) sections.

This section explains how to create and manage vectors.

Any point modification operation is asynchronous and takes place in 2 steps.
At the first stage, the operation is written to the Write-ahead-log.

After this moment, the service will not lose the data, even if the machine loses power supply.


## Point IDs

Cortex supports using both `64-bit unsigned integers` and `UUID` as identifiers for points.

Examples of UUID string representations:

- simple: `936DA01F9ABD4d9d80C702AF85C822A8`
- hyphenated: `550e8400-e29b-41d4-a716-446655440000`
- urn: `urn:uuid:F9168C5E-CEB2-4faa-B6BF-329BF39FA1E4`

That means that in every request UUID string could be used instead of numerical id.
Example:

<Tabs>
<TabItem value="http" label="http">

```http
PUT /collections/{collection_name}/points
{
    "points": [
        {
            "id": "5c56c793-69f3-4fbf-87e6-c4bf54c28c26",
            "payload": {"color": "red"},
            "vector": [0.9, 0.1, 0.1]
        }
    ]
}
```

</TabItem>
<TabItem value="py" label="python">

```py
from cortex_client import CortexClient, models

client = CortexClient(url="http://localhost:6333")

client.upsert(
    collection_name="{collection_name}",
    points=[
        models.PointStruct(
            id="5c56c793-69f3-4fbf-87e6-c4bf54c28c26",
            payload={
                "color": "red",
            },
            vector=[0.9, 0.1, 0.1],
        ),
    ],
)
```

</TabItem>
<TabItem value="typescript" label="typescript">

```typescript
import { CortexClient } from "@cortex/js-client-rest";

const client = new CortexClient({ host: "localhost", port: 6333 });

client.upsert("{collection_name}", {
  points: [
    {
      id: "5c56c793-69f3-4fbf-87e6-c4bf54c28c26",
      payload: {
        color: "red",
      },
      vector: [0.9, 0.1, 0.1],
    },
  ],
});
```

</TabItem>
<TabItem value="rust" label="rust">

```rust
use cortex_client::cortex::{PointStruct, UpsertPointsBuilder};
use cortex_client::Cortex;

let client = Cortex::from_url("http://localhost:6334").build()?;

client
    .upsert_points(
        UpsertPointsBuilder::new(
            "{collection_name}",
            vec![PointStruct::new(
                "5c56c793-69f3-4fbf-87e6-c4bf54c28c26",
                vec![0.9, 0.1, 0.1],
                [("color", "Red".into())],
            )],
        )
        .wait(true),
    )
    .await?;
```

</TabItem>
<TabItem value="java" label="java">

```java
import java.util.List;
import java.util.Map;
import java.util.UUID;

import static io.cortex.client.PointIdFactory.id;
import static io.cortex.client.ValueFactory.value;
import static io.cortex.client.VectorsFactory.vectors;

import io.cortex.client.CortexClient;
import io.cortex.client.CortexGrpcClient;
import io.cortex.client.grpc.Points.PointStruct;

CortexClient client =
    new CortexClient(CortexGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .upsertAsync(
        "{collection_name}",
        List.of(
            PointStruct.newBuilder()
                .setId(id(UUID.fromString("5c56c793-69f3-4fbf-87e6-c4bf54c28c26")))
                .setVectors(vectors(0.05f, 0.61f, 0.76f, 0.74f))
                .putAllPayload(Map.of("color", value("Red")))
                .build()))
    .get();
```

</TabItem>
<TabItem value="csharp" label="csharp">

```csharp
using Cortex.Client;
using Cortex.Client.Grpc;

var client = new CortexClient("localhost", 6334);

await client.UpsertAsync(
	collectionName: "{collection_name}",
	points: new List<PointStruct>
	{
		new()
		{
			Id = Guid.Parse("5c56c793-69f3-4fbf-87e6-c4bf54c28c26"),
			Vectors = new[] { 0.05f, 0.61f, 0.76f, 0.74f },
			Payload = { ["color"] = "Red" }
		}
	}
);
```

</TabItem>
<TabItem value="go" label="go">

```go
import (
	"context"

	"github.com/cortex/go-client/cortex"
)

client, err := cortex.NewClient(&cortex.Config{
	Host: "localhost",
	Port: 6334,
})

client.Upsert(context.Background(), &cortex.UpsertPoints{
	CollectionName: "{collection_name}",
	Points: []*cortex.PointStruct{
		{
			Id:      cortex.NewID("5c56c793-69f3-4fbf-87e6-c4bf54c28c26"),
			Vectors: cortex.NewVectors(0.05, 0.61, 0.76, 0.74),
			Payload: cortex.NewValueMap(map[string]any{"color": "Red"}),
		},
	},
})
```

</TabItem>
</Tabs>

and

<Tabs>
<TabItem value="http" label="http">

```http
PUT /collections/{collection_name}/points
{
    "points": [
        {
            "id": 1,
            "payload": {"color": "red"},
            "vector": [0.9, 0.1, 0.1]
        }
    ]
}
```

</TabItem>
<TabItem value="py" label="python">

```py
client.upsert(
    collection_name="{collection_name}",
    points=[
        models.PointStruct(
            id=1,
            payload={
                "color": "red",
            },
            vector=[0.9, 0.1, 0.1],
        ),
    ],
)
```

</TabItem>
<TabItem value="typescript" label="typescript">

```typescript
client.upsert("{collection_name}", {
  points: [
    {
      id: 1,
      payload: {
        color: "red",
      },
      vector: [0.9, 0.1, 0.1],
    },
  ],
});
```

</TabItem>
<TabItem value="rust" label="rust">

```rust
use cortex_client::cortex::{PointStruct, UpsertPointsBuilder};
use cortex_client::Cortex;

let client = Cortex::from_url("http://localhost:6334").build()?;

client
    .upsert_points(
        UpsertPointsBuilder::new(
            "{collection_name}",
            vec![PointStruct::new(
                1,
                vec![0.9, 0.1, 0.1],
                [("color", "Red".into())],
            )],
        )
        .wait(true),
    )
    .await?;
```

</TabItem>
<TabItem value="java" label="java">

```java
import java.util.List;
import java.util.Map;

import static io.cortex.client.PointIdFactory.id;
import static io.cortex.client.ValueFactory.value;
import static io.cortex.client.VectorsFactory.vectors;

import io.cortex.client.CortexClient;
import io.cortex.client.CortexGrpcClient;
import io.cortex.client.grpc.Points.PointStruct;

CortexClient client =
    new CortexClient(CortexGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .upsertAsync(
        "{collection_name}",
        List.of(
            PointStruct.newBuilder()
                .setId(id(1))
                .setVectors(vectors(0.05f, 0.61f, 0.76f, 0.74f))
                .putAllPayload(Map.of("color", value("Red")))
                .build()))
    .get();
```

</TabItem>
<TabItem value="csharp" label="csharp">

```csharp
using Cortex.Client;
using Cortex.Client.Grpc;

var client = new CortexClient("localhost", 6334);

await client.UpsertAsync(
	collectionName: "{collection_name}",
	points: new List<PointStruct>
	{
		new()
		{
			Id = 1,
			Vectors = new[] { 0.05f, 0.61f, 0.76f, 0.74f },
			Payload = { ["color"] = "Red" }
		}
	}
);
```

</TabItem>
<TabItem value="go" label="go">

```go
import (
	"context"

	"github.com/cortex/go-client/cortex"
)

client, err := cortex.NewClient(&cortex.Config{
	Host: "localhost",
	Port: 6334,
})

client.Upsert(context.Background(), &cortex.UpsertPoints{
	CollectionName: "{collection_name}",
	Points: []*cortex.PointStruct{
		{
			Id:      cortex.NewIDNum(1),
			Vectors: cortex.NewVectors(0.05, 0.61, 0.76, 0.74),
			Payload: cortex.NewValueMap(map[string]any{"color": "Red"}),
		},
	},
})
```

</TabItem>
</Tabs>

are both possible.

## Vectors

Each point in cortex may have one or more vectors. 
Vectors are the central component of the Cortex architecture,
cortex relies on different types of vectors to provide different types of data exploration and search.

Here is a list of supported vector types:

|||
|-|-|
| Dense Vectors | A regular vectors, generated by majority of the embedding models. |
| Sparse Vectors | Vectors with no fixed length, but only a few non-zero elements. <br /> Useful for exact token match and collaborative filtering recommendations. |
| MultiVectors | Matrices of numbers with fixed length but variable height. <br /> Usually obtained from late interaction models like ColBERT. |

It is possible to attach more than one type of vector to a single point.
In Cortex we call these Named Vectors.

Read more about vector types, how they are stored and optimized in the [vectors](#) section.

...