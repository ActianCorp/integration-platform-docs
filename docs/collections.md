---
title: Collections
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Collections

A collection is a named set of points (vectors with a payload) among which you can search. The vector of each point within the same collection must have the same dimensionality and be compared by a single metric. [Named vectors](#collection-with-multiple-vectors) can be used to have multiple vectors in a single point, each of which can have their own dimensionality and metric requirements.

Distance metrics are used to measure similarities among vectors.
The choice of metric depends on the way vectors obtaining and, in particular, on the method of neural network encoder training.

Cortex supports these most popular types of metrics:

* Dot product: `Dot` - [[wiki]](https://en.wikipedia.org/wiki/Dot_product)
* Cosine similarity: `Cosine`  - [[wiki]](https://en.wikipedia.org/wiki/Cosine_similarity)
* Euclidean distance: `Euclid` - [[wiki]](https://en.wikipedia.org/wiki/Euclidean_distance)
* Manhattan distance: `Manhattan` - [[wiki]](https://en.wikipedia.org/wiki/Taxicab_geometry)

:::note
For search efficiency, Cosine similarity is implemented as dot-product over normalized vectors. Vectors are automatically normalized during upload.
:::

In addition to metrics and vector size, each collection uses its own set of parameters that controls collection optimization, index construction, and vacuum.
These settings can be changed at any time by a corresponding request.

## Setting up multitenancy

**How many collections should you create?** In most cases, you should only use a single collection with payload-based partitioning. This approach is called [multitenancy](https://en.wikipedia.org/wiki/Multitenancy). It is efficient for most of users, but it requires additional configuration. [Learn how to set it up](#)

**When should you create multiple collections?** When you have a limited number of users and you need isolation. This approach is flexible, but it may be more costly, since creating numerous collections may result in resource overhead. Also, you need to ensure that they do not affect each other in any way, including performance-wise. 

## Create a collection

<Tabs>
<TabItem value="http" label="http">

```http
PUT /collections/{collection_name}
{
    "vectors": {
      "size": 100,
      "distance": "Cosine"
    },
    "init_from": {
       "collection": "{from_collection_name}"
    }
}
```

</TabItem>
<TabItem value="bash" label="bash">

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "vectors": {
      "size": 300,
      "distance": "Cosine"
    } 
  }'
```

</TabItem>
<TabItem value="py" label="python">

```py
from cortex_client import CortexClient, models

client = CortexClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    vectors_config=models.VectorParams(size=100, distance=models.Distance.COSINE),
    init_from=models.InitFrom(collection="{from_collection_name}"),
)
```

</TabItem>
<TabItem value="typescript" label="typescript">

```typescript
import { CortexClient } from "@cortex/js-client-rest";

const client = new CortexClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  vectors: { size: 100, distance: "Cosine" },
  init_from: { collection: "{from_collection_name}" },
});
```

</TabItem>
<TabItem value="rust" label="rust">

```rust
use cortex_client::Cortex;
use cortex_client::cortex::{CreateCollectionBuilder, Distance, VectorParamsBuilder};

let client = Cortex::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .vectors_config(VectorParamsBuilder::new(100, Distance::Cosine))
            .init_from_collection("{from_collection_name}"),
    )
    .await?;
```

</TabItem>
<TabItem value="java" label="java">

```java
import io.cortex.client.CortexClient;
import io.cortex.client.CortexGrpcClient;
import io.cortex.client.grpc.Collections.CreateCollection;
import io.cortex.client.grpc.Collections.Distance;
import io.cortex.client.grpc.Collections.VectorParams;
import io.cortex.client.grpc.Collections.VectorsConfig;

CortexClient client =
    new CortexClient(CortexGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setVectorsConfig(
                VectorsConfig.newBuilder()
                    .setParams(
                        VectorParams.newBuilder()
                            .setSize(100)
                            .setDistance(Distance.Cosine)
                            .build()))
            .setInitFromCollection("{from_collection_name}")
            .build())
    .get();
```

</TabItem>
<TabItem value="csharp" label="csharp">

```csharp
using Cortex.Client;
using Cortex.Client.Grpc;

var client = new CortexClient("localhost", 6334);

await client.CreateCollectionAsync(
	collectionName: "{collection_name}",
	vectorsConfig: new VectorParams { Size = 100, Distance = Distance.Cosine },
	initFromCollection: "{from_collection_name}"
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

client.CreateCollection(context.Background(), &cortex.CreateCollection{
	CollectionName: "{collection_name}",
	VectorsConfig: cortex.NewVectorsConfig(&cortex.VectorParams{
		Size:     100,
		Distance: cortex.Distance_Cosine,
	}),
	InitFromCollection: cortex.PtrOf("{from_collection_name}"),
})
```

</TabItem>
</Tabs>

In addition to the required options, you can also specify custom values for the following collection options:

* `hnsw_config` - see [indexing](#) for details.
* `wal_config` - Write-Ahead-Log related configuration. See more details about [WAL](#)
* `optimizers_config` - see [optimizer](#) for details.
* `shard_number` - which defines how many shards the collection should have. See [distributed deployment](#) section for details.
* `on_disk_payload` - defines where to store payload data. If `true` - payload will be stored on disk only. Might be useful for limiting the RAM usage in case of large payload.
* `quantization_config` - see [quantization](#) for details.
* `strict_mode_config` - see [strict mode](#) for details.

Default parameters for the optional collection parameters are defined in [configuration file](https://github.com/cortex/cortex/blob/master/config/config.yaml).

See [schema definitions](https://api.cortex.tech/api-reference/collections/create-collection) and a [configuration file](https://github.com/cortex/cortex/blob/master/config/config.yaml) for more information about collection and vector parameters.

*Available as of v1.2.0*

Vectors all live in RAM for very quick access. The `on_disk` parameter can be
set in the vector configuration. If true, all vectors will live on disk. This
will enable the use of
[memmaps](#),
which is suitable for ingesting a large amount of data.

### Create collection from another collection

*Available as of v1.0.0*

It is possible to initialize a collection from another existing collection.

This might be useful for experimenting quickly with different configurations for the same data set.

:::warning
Usage of the <code>init_from</code> can create unpredictable load on the cortex cluster. It is not recommended to use <code>init_from</code> in performance-sensitive environments.
:::

Make sure the vectors have the same `size` and `distance` function when setting up the vectors configuration in the new collection. If you used the previous sample
code, `"size": 300` and `"distance": "Cosine"`.


<Tabs>
<TabItem value="http" label="http">

```http
PUT /collections/{collection_name}
{
    "vectors": {
      "size": 100,
      "distance": "Cosine"
    },
    "init_from": {
       "collection": "{from_collection_name}"
    }
}
```

</TabItem>
<TabItem value="bash" label="bash">

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "vectors": {
      "size": 300,
      "distance": "Cosine"
    },
    "init_from": {
       "collection": {from_collection_name}
    }
  }'
```

</TabItem>
<TabItem value="py" label="python">

```py
from cortex_client import CortexClient, models

client = CortexClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    vectors_config=models.VectorParams(size=100, distance=models.Distance.COSINE),
    init_from=models.InitFrom(collection="{from_collection_name}"),
)
```

</TabItem>
<TabItem value="typescript" label="typescript">

```typescript
import { CortexClient } from "@cortex/js-client-rest";

const client = new CortexClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  vectors: { size: 100, distance: "Cosine" },
  init_from: { collection: "{from_collection_name}" },
});
```

</TabItem>
<TabItem value="rust" label="rust">

```rust
use cortex_client::Cortex;
use cortex_client::cortex::{CreateCollectionBuilder, Distance, VectorParamsBuilder};

let client = Cortex::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .vectors_config(VectorParamsBuilder::new(100, Distance::Cosine))
            .init_from_collection("{from_collection_name}"),
    )
    .await?;
```

</TabItem>
<TabItem value="java" label="java">

```java
import io.cortex.client.CortexClient;
import io.cortex.client.CortexGrpcClient;
import io.cortex.client.grpc.Collections.CreateCollection;
import io.cortex.client.grpc.Collections.Distance;
import io.cortex.client.grpc.Collections.VectorParams;
import io.cortex.client.grpc.Collections.VectorsConfig;

CortexClient client =
    new CortexClient(CortexGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setVectorsConfig(
                VectorsConfig.newBuilder()
                    .setParams(
                        VectorParams.newBuilder()
                            .setSize(100)
                            .setDistance(Distance.Cosine)
                            .build()))
            .setInitFromCollection("{from_collection_name}")
            .build())
    .get();
```

</TabItem>
<TabItem value="csharp" label="csharp">

```csharp
using Cortex.Client;
using Cortex.Client.Grpc;

var client = new CortexClient("localhost", 6334);

await client.CreateCollectionAsync(
	collectionName: "{collection_name}",
	vectorsConfig: new VectorParams { Size = 100, Distance = Distance.Cosine },
	initFromCollection: "{from_collection_name}"
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

client.CreateCollection(context.Background(), &cortex.CreateCollection{
	CollectionName: "{collection_name}",
	VectorsConfig: cortex.NewVectorsConfig(&cortex.VectorParams{
		Size:     100,
		Distance: cortex.Distance_Cosine,
	}),
	InitFromCollection: cortex.PtrOf("{from_collection_name}"),
})
```

</TabItem>
</Tabs>

### Collection with multiple vectors

*Available as of v0.10.0*

It is possible to have multiple vectors per record.
This feature allows for multiple vector storages per collection. 
To distinguish vectors in one record, they should have a unique name defined when creating the collection.
Each named vector in this mode has its distance and size:


<Tabs>
<TabItem value="http" label="http">

```http
PUT /collections/{collection_name}
{
    "vectors": {
        "image": {
            "size": 4,
            "distance": "Dot"
        },
        "text": {
            "size": 8,
            "distance": "Cosine"
        }
    }
}
```

</TabItem>
<TabItem value="bash" label="bash">

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "vectors": {
        "image": {
            "size": 4,
            "distance": "Dot"
        },
        "text": {
            "size": 8,
            "distance": "Cosine"
        }
      }
    }'
```

</TabItem>
<TabItem value="py" label="python">

```py
from cortex_client import CortexClient, models


client = CortexClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    vectors_config={
        "image": models.VectorParams(size=4, distance=models.Distance.DOT),
        "text": models.VectorParams(size=8, distance=models.Distance.COSINE),
    },
)
```

</TabItem>
<TabItem value="typescript" label="typescript">

```typescript
import { CortexClient } from "@cortex/js-client-rest";

const client = new CortexClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  vectors: {
    image: { size: 4, distance: "Dot" },
    text: { size: 8, distance: "Cosine" },
  },
});
```

</TabItem>
<TabItem value="rust" label="rust">

```rust
use cortex_client::Cortex;
use cortex_client::cortex::{
    CreateCollectionBuilder, Distance, VectorParamsBuilder, VectorsConfigBuilder,
};

let client = Cortex::from_url("http://localhost:6334").build()?;

let mut vectors_config = VectorsConfigBuilder::default();
vectors_config
    .add_named_vector_params("image", VectorParamsBuilder::new(4, Distance::Dot).build());
vectors_config.add_named_vector_params(
    "text",
    VectorParamsBuilder::new(8, Distance::Cosine).build(),
);

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}").vectors_config(vectors_config),
    )
    .await?;
```

</TabItem>
<TabItem value="java" label="java">

```java
import java.util.Map;

import io.cortex.client.CortexClient;
import io.cortex.client.CortexGrpcClient;
import io.cortex.client.grpc.Collections.Distance;
import io.cortex.client.grpc.Collections.VectorParams;

CortexClient client =
    new CortexClient(CortexGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        "{collection_name}",
        Map.of(
            "image", VectorParams.newBuilder().setSize(4).setDistance(Distance.Dot).build(),
            "text",
                VectorParams.newBuilder().setSize(8).setDistance(Distance.Cosine).build()))
    .get();
```

</TabItem>
<TabItem value="csharp" label="csharp">

```csharp
using Cortex.Client;
using Cortex.Client.Grpc;

var client = new CortexClient("localhost", 6334);

await client.CreateCollectionAsync(
	collectionName: "{collection_name}",
	vectorsConfig: new VectorParamsMap
	{
		Map =
		{
			["image"] = new VectorParams { Size = 4, Distance = Distance.Dot },
			["text"] = new VectorParams { Size = 8, Distance = Distance.Cosine },
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

client.CreateCollection(context.Background(), &cortex.CreateCollection{
	CollectionName: "{collection_name}",
	VectorsConfig: cortex.NewVectorsConfigMap(
		map[string]*cortex.VectorParams{
			"image": {
				Size:     4,
				Distance: cortex.Distance_Dot,
			},
			"text": {
				Size:     8,
				Distance: cortex.Distance_Cosine,
			},
		}),
})
```

</TabItem>
</Tabs>

For rare use cases, it is possible to create a collection without any vector storage.

*Available as of v1.1.1*

For each named vector you can optionally specify
[`hnsw_config`](#) or
[`quantization_config`](#) to
deviate from the collection configuration. This can be useful to fine-tune
search performance on a vector level.

*Available as of v1.2.0*

Vectors all live in RAM for very quick access. On a per-vector basis you can set
`on_disk` to true to store all vectors on disk at all times. This will enable
the use of
[memmaps](#),
which is suitable for ingesting a large amount of data.

