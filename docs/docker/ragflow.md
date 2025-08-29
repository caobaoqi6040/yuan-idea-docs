---
title: ragflow
tags:
  - docker
createTime: 2025/08/28 18:07:38
permalink: /article/whjhefb1/
---

- https://ragflow.io/

> ragflow v0.20.3-slim

## install

> 确保 `vm.max_map_count` 262144

vm.max_map_count 的此值设置进程可能具有的最大内存映射区域数。其默认值为 65530。虽然大多数应用程序需要少于一千个映射，但减小此值可能会导致异常行为，并且当进程达到限制时，系统将抛出内存不足错误。

RAGFlow v0.20.4 使用 Elasticsearch 或 Infinity 进行多次召回。正确设置 vm.max_map_count 的值对于 Elasticsearch 组件的正常运行至关重要。

```shell
sysctl vm.max_map_count # must > 262144
sudo sysctl -w vm.max_map_count=262144
```

> 克隆存储库

```shell
git clone https://github.com/infiniflow/ragflow.git
cd ragflow/docker
git checkout -f v0.20.3
```

> up

```shell
# Use CPU for embedding and DeepDoc tasks:
# docker compose -f docker-compose.yml up -d

# To use GPU to accelerate embedding and DeepDoc tasks:
docker compose -f docker-compose-gpu.yml up -d

docker logs -f ragflow-server
```

![image.png](https://yuan-idea-2025.oss-cn-beijing.aliyuncs.com/20250828111456156.png)



## config



## start

