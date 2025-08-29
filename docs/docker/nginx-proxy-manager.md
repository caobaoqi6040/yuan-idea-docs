---
title: nginx-proxy-manager
tags:
  - docker
createTime: 2025/08/28 18:07:43
permalink: /article/zifp1hhc/
---

- https://github.com/xiaoxinpro/nginx-proxy-manager-zh
- https://nginxproxymanager.com/

## install

```yaml
name: nginx-proxy-manager
services:
  app:
    image: 'chishin/nginx-proxy-manager-zh:release'
    restart: always
    ports:
      - '80:80'
      - '81:81'
      - '443:443'
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
```

## config

![image-20250829093940611](https://yuan-idea-2025.oss-cn-beijing.aliyuncs.com/20250829093940849.png)

```shell
sudo vim /etc/hosts
# nginx proxy manager test
127.0.0.1       chat.yuan-idea.com
127.0.0.1       yuan-idea.com

# resolvectl for ubuntu 24
sudo resolvectl flush-caches
sudo systemctl restart systemd-resolved
sudo resolvectl statistics

nslookup chat.yuan-idea.com
```