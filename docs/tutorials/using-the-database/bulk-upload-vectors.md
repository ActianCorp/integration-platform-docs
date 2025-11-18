---
title: Bulk Upload Vectors to a Cortex Collection
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Bulk Upload Vectors to a Cortex Collection

Uploading a large-scale dataset fast might be a challenge, but Cortex has a few tricks to help you with that.

The first important detail about data uploading is that the bottleneck is usually located on the client side, not on the server side.
This means that if you are uploading a large dataset, you should prefer a high-performance client library.

We recommend using our [Rust client library](https://github.com/cortex/rust-client) for this purpose, as it is the fastest client library available for Cortex.

If you are not using Rust, you might want to consider parallelizing your upload process.

## Choose an Indexing Strategy

Cortex incrementally builds an HNSW index for dense vectors as new data arrives. This ensures fast search, but indexing is memory- and CPU-intensive. During bulk ingestion, frequent index updates can reduce throughput and increase resource usage.

To control this behavior and optimize for your system’s limits, adjust the following parameters:

| Your Goal                                 | What to Do                                      | Configuration                                      |
|-------------------------------------------|-------------------------------------------------|----------------------------------------------------|
| Fastest upload, tolerate high RAM usage           | Disable indexing completely                     | `indexing_threshold: 0`                           |
| Low memory usage during upload            | Defer HNSW graph construction (recommended)                  | `m: 0`                 |
| Faster index availability after upload       | Keep indexing enabled (default behavior)        | `m: 16`, `indexing_threshold: 20000` *(default)* |

Indexing must be re-enabled after upload to activate fast HNSW search if it was disabled during ingestion.


### Defer HNSW graph construction (`m: 0`)

For dense vectors, setting the HNSW `m` parameter to `0` disables index building entirely. Vectors will still be stored, but not indexed until you enable indexing later.

<Tabs>
<TabItem value="http" label="http">

```http
PUT /collections/{collection_name}
{
    "vectors": {
      "size": 768,
      "distance": "Cosine"
    },
    "hnsw_config": {
        "m": 0
    }
}
```

</TabItem>
<TabItem value="python" label="python">

```python
from cortex_client import CortexClient, models

client = CortexClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    vectors_config=models.VectorParams(size=768, distance=models.Distance.COSINE),
    hnsw_config=models.HnswConfigDiff(
        m=0,
    ),
)
```

</TabItem>
<TabItem value="typescript" label="typescript">

```typescript
import { CortexClient } from "@cortex/js-client-rest";

const client = new CortexClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  vectors: {
    size: 768,
    distance: "Cosine",
  },
  hnsw_config: {
    m: 0,
  },
});
```

</TabItem>
<TabItem value="rust" label="rust">

```rust
use cortex_client::cortex::{
    CreateCollectionBuilder, Distance, HnswConfigDiffBuilder, VectorParamsBuilder,
};
use cortex_client::Cortex;

let client = Cortex::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .vectors_config(VectorParamsBuilder::new(768, Distance::Cosine))
            .hnsw_config(HnswConfigDiffBuilder::default().m(0)),
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
import io.cortex.client.grpc.Collections.HnswConfigDiff;
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
                            .setSize(768)
                            .setDistance(Distance.Cosine)
                            .build())
                    .build())
            .setHnswConfig(HnswConfigDiff.newBuilder().setM(0).build())
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
	vectorsConfig: new VectorParams { Size = 768, Distance = Distance.Cosine },
	hnswConfig: new HnswConfigDiff { M = 0 }
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
		Size:     768,
		Distance: cortex.Distance_Cosine,
	}),
	HnswConfig: &cortex.HnswConfigDiff{
		M:        cortex.PtrOf(uint64(0)),
	},
})
```

</TabItem>
</Tabs>

Once ingestion is complete, re-enable HNSW by setting `m` to your production value (usually 16 or 32).

<Tabs>
<TabItem value="http" label="http">

```http
PATCH /collections/{collection_name}
{
    "vectors": {
      "size": 768,
      "distance": "Cosine"
    },
    "hnsw_config": {
        "m": 16
    }
}
```

</TabItem>
<TabItem value="python" label="python">

```python
from cortex_client import CortexClient, models

client = CortexClient(url="http://localhost:6333")

client.update_collection(
    collection_name="{collection_name}",
    vectors_config=models.VectorParams(size=768, distance=models.Distance.COSINE),
    hnsw_config=models.HnswConfigDiff(
        m=16,
    ),
)
```

</TabItem>
<TabItem value="typescript" label="typescript">

```typescript
import { CortexClient } from "@cortex/js-client-rest";

const client = new CortexClient({ host: "localhost", port: 6333 });

client.updateCollection("{collection_name}", {
  vectors: {
    size: 768,
    distance: "Cosine",
  },
  hnsw_config: {
    m: 16,
  },
});
```

</TabItem>
<TabItem value="rust" label="rust">

```rust
use cortex_client::cortex::{
    UpdateCollectionBuilder, HnswConfigDiffBuilder,
};
use cortex_client::Cortex;

let client = Cortex::from_url("http://localhost:6334").build()?;

client
    .update_collection(
        UpdateCollectionBuilder::new("{collection_name}")
            .hnsw_config(HnswConfigDiffBuilder::default().m(16)),
    )
    .await?;
```

</TabItem>
<TabItem value="java" label="java">

```java
import io.cortex.client.grpc.Collections.UpdateCollection;
import io.cortex.client.grpc.Collections.HnswConfigDiff;

CortexClient client =
    new CortexClient(CortexGrpcClient.newBuilder("localhost", 6334, false).build());

client.updateCollectionAsync(
    UpdateCollection.newBuilder()
        .setCollectionName("{collection_name}")
        .setHnswConfig(HnswConfigDiff.newBuilder().setM(16).build())
        .build())
    .get();
```

</TabItem>
<TabItem value="csharp" label="csharp">

```csharp
using Cortex.Client;
using Cortex.Client.Grpc;

var client = new CortexClient("localhost", 6334);

await client.UpdateCollectionAsync(
	collectionName: "{collection_name}",
	hnswConfig: new HnswConfigDiff { M = 16 }
);
```

</TabItem>
<TabItem value="go" label="go">

```go
import (
	"context"

	"github.com/cortex/go-client/cortex"
)

cortex.NewClient(&cortex.Config{
	Host: "localhost",
	Port: 6334,
})

client, err := client.UpdateCollection(context.Background(), &cortex.UpdateCollection{
	CollectionName: "{collection_name}",
	HnswConfig: &cortex.HnswConfigDiff{
		M:        cortex.PtrOf(uint64(16)),
	},
})
```

</TabItem>
</Tabs>

### Disable indexing completely (`indexing_threshold: 0`)

In case you are doing an initial upload of a large dataset, you might want to disable indexing during upload. It will enable to avoid unnecessary indexing of vectors, which will be overwritten by the next batch.

Setting `indexing_threshold` to `0` disables indexing altogether:

<Tabs>
<TabItem value="http" label="http">

```http
PUT /collections/{collection_name}
{
    "vectors": {
      "size": 768,
      "distance": "Cosine"
    },
    "optimizers_config": {
        "indexing_threshold": 0
    }
}
```

</TabItem>
<TabItem value="python" label="python">

```python
from cortex_client import CortexClient, models

client = CortexClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    vectors_config=models.VectorParams(size=768, distance=models.Distance.COSINE),
    optimizers_config=models.OptimizersConfigDiff(
        indexing_threshold=0,
    ),
)
```

</TabItem>
<TabItem value="typescript" label="typescript">

```typescript
import { CortexClient } from "@cortex/js-client-rest";

const client = new CortexClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  vectors: {
    size: 768,
    distance: "Cosine",
  },
  optimizers_config: {
    indexing_threshold: 0,
  },
});
```

</TabItem>
<TabItem value="rust" label="rust">

```rust
use cortex_client::cortex::{
    OptimizersConfigDiffBuilder, UpdateCollectionBuilder,
};
use cortex_client::Cortex;

let client = Cortex::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .optimizers_config(OptimizersConfigDiffBuilder::default().indexing_threshold(0)),
    )
    .await?;
```

</TabItem>
<TabItem value="java" label="java">

```java
import io.cortex.client.grpc.Collections.CreateCollection;
import io.cortex.client.grpc.Collections.Distance;
import io.cortex.client.grpc.Collections.VectorParams;
import io.cortex.client.grpc.Collections.VectorsConfig;
import io.cortex.client.grpc.Collections.OptimizersConfigDiff;

CortexClient client =
    new CortexClient(CortexGrpcClient.newBuilder("localhost", 6334, false).build());

client.createCollectionAsync(
    CreateCollection.newBuilder()
        .setCollectionName("{collection_name}")
        .setVectorsConfig(
            VectorsConfig.newBuilder()
                .setParams(
                    VectorParams.newBuilder()
                        .setSize(768)
                        .setDistance(Distance.Cosine)
                        .build())
                .build())
        .setOptimizersConfig(
            OptimizersConfigDiff.newBuilder()
                .setIndexingThreshold(0)
                .build())
        .build()
).get();
```

</TabItem>
<TabItem value="csharp" label="csharp">

```csharp
using Cortex.Client;
using Cortex.Client.Grpc;

var client = new CortexClient("localhost", 6334);

await client.CreateCollectionAsync(
    collectionName: "{collection_name}",
    vectorsConfig: new VectorParams { Size = 768, Distance = Distance.Cosine },
    optimizersConfig: new OptimizersConfigDiff { IndexingThreshold = 0 }
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
		Size:     768,
		Distance: cortex.Distance_Cosine,
	}),
	OptimizersConfig: &cortex.OptimizersConfigDiff{
		IndexingThreshold: cortex.PtrOf(uint64(0)),
	},
})
```

</TabItem>
</Tabs>

:::note
With indexing_threshold set to 0, storage won't be optimized properly, which can lead to high RAM usage as segments accumulate in memory.
:::

After upload is done, you can enable indexing by setting `indexing_threshold` to a desired value (default is 20000):

<Tabs>
<TabItem value="http" label="http">

```http
PATCH /collections/{collection_name}
{
    "optimizers_config": {
        "indexing_threshold": 20000
    }
}
```

</TabItem>
<TabItem value="python" label="python">

```python
from cortex_client import CortexClient, models

client = CortexClient(url="http://localhost:6333")

client.update_collection(
    collection_name="{collection_name}",
    optimizer_config=models.OptimizersConfigDiff(indexing_threshold=20000),
)
```

</TabItem>
<TabItem value="typescript" label="typescript">

```typescript
import { CortexClient } from "@cortex/js-client-rest";

const client = new CortexClient({ host: "localhost", port: 6333 });

client.updateCollection("{collection_name}", {
  optimizers_config: {
    indexing_threshold: 20000,
  },
});
```

</TabItem>
<TabItem value="rust" label="rust">

```rust
use cortex_client::cortex::{
    OptimizersConfigDiffBuilder, UpdateCollectionBuilder,
};
use cortex_client::Cortex;

let client = Cortex::from_url("http://localhost:6334").build()?;

client
    .update_collection(
        UpdateCollectionBuilder::new("{collection_name}")
            .optimizers_config(OptimizersConfigDiffBuilder::default().indexing_threshold(20000)),
    )
    .await?;
```

</TabItem>
<TabItem value="java" label="java">

```java
import io.cortex.client.grpc.Collections.UpdateCollection;
import io.cortex.client.grpc.Collections.OptimizersConfigDiff;

client.updateCollectionAsync(
    UpdateCollection.newBuilder()
        .setCollectionName("{collection_name}")
        .setOptimizersConfig(
            OptimizersConfigDiff.newBuilder()
                .setIndexingThreshold(20000)
                .build()
        )
        .build()
).get();
```

</TabItem>
<TabItem value="csharp" label="csharp">

```csharp
using Cortex.Client;
using Cortex.Client.Grpc;

var client = new CortexClient("localhost", 6334);

await client.UpdateCollectionAsync(
    collectionName: "{collection_name}",
    optimizersConfig: new OptimizersConfigDiff { IndexingThreshold = 20000 }
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

client.UpdateCollection(context.Background(), &cortex.UpdateCollection{
	CollectionName: "{collection_name}",
	OptimizersConfig: &cortex.OptimizersConfigDiff{
		IndexingThreshold: cortex.PtrOf(uint64(20000)),
	},
})
```

</TabItem>
</Tabs>

At this point, Cortex will begin indexing new and previously unindexed segments in the background.

## Upload directly to disk

When the vectors you upload do not all fit in RAM, you likely want to use
[memmap](#) support.

During collection [creation](#), memmaps may be enabled on a per-vector basis using the `on_disk` parameter. This will store vector data directly on disk at all times. It is suitable for
ingesting a large amount of data, essential for the billion scale benchmark.

Using `memmap_threshold` is not recommended in this case. It would require the [optimizer](#) to constantly transform in-memory segments into memmap segments on disk. This process is slower, and the optimizer can be a bottleneck when ingesting a large amount of
data.

Read more about this in [Configuring Memmap Storage](#).

## Parallel upload into multiple shards

In Cortex, each collection is split into shards. Each shard has a separate Write-Ahead-Log (WAL), which is responsible for ordering operations.
By creating multiple shards, you can parallelize upload of a large dataset. From 2 to 4 shards per one machine is a reasonable number.

<Tabs>
<TabItem value="http" label="http">

```http
PUT /collections/{collection_name}
{
    "vectors": {
      "size": 768,
      "distance": "Cosine"
    },
    "shard_number": 2
}
```

</TabItem>
<TabItem value="python" label="python">

```python
from cortex_client import CortexClient, models

client = CortexClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    vectors_config=models.VectorParams(size=768, distance=models.Distance.COSINE),
    shard_number=2,
)
```

</TabItem>
<TabItem value="typescript" label="typescript">

```typescript
import { CortexClient } from "@cortex/js-client-rest";

const client = new CortexClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  vectors: {
    size: 768,
    distance: "Cosine",
  },
  shard_number: 2,
});
```

</TabItem>
<TabItem value="rust" label="rust">

```rust
use cortex_client::cortex::{CreateCollectionBuilder, Distance, VectorParamsBuilder};
use cortex_client::Cortex;

let client = Cortex::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .vectors_config(VectorParamsBuilder::new(768, Distance::Cosine))
            .shard_number(2),
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
                            .setSize(768)
                            .setDistance(Distance.Cosine)
                            .build())
                    .build())
            .setShardNumber(2)
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
	vectorsConfig: new VectorParams { Size = 768, Distance = Distance.Cosine },
	shardNumber: 2
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
		Size:     768,
		Distance: cortex.Distance_Cosine,
	}),
	ShardNumber: cortex.PtrOf(uint32(2)),
})
```

</TabItem>
</Tabs>
