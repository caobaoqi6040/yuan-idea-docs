---
title: ollama
tags:
  - docker
createTime: 2025/08/28 18:07:41
permalink: /article/fno0gaaz/
---

- https://ollama.com/

```shell
curl -fsSL https://ollama.com/install.sh | sh
```

> local

```shell
vim /etc/systemd/system/ollama.service
```

在 `[Service]`下添加 `Environment="OLLAMA_HOST=0.0.0.0"`

```shell
systemctl daemon-reload
systemctl restart ollama
```

> docker cpu

```shell
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

> docker gpu

```shell
docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

> 如果需要将本地已有的模型挂在到 docker 容器中的 ollama 可以通过 `-v <本地 ollama models 路径>:/root/.ollama/models` 进行，其中本地 ollama models 路径 一般位于 `~/.ollama/models` 或  `/root/.ollama/models`
>
> 也可能在 `/usr/share/ollama/.ollama/models` 具体可以通过 `journalctl -u ollama` 日志里面的信息查看具体加载情况

```shell
docker run -d --gpus=all -v /usr/share/ollama/.ollama/models:/root/.ollama/models -p 11435:11434 --name ollama ollama/ollama
```
