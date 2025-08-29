---
title: frp
tags:
  - dev-ops
createTime: 2025/08/28 18:04:25
permalink: /article/1p2dttso/
---

- https://github.com/fatedier/frp

## install

```shell
curl -L https://github.com/fatedier/frp/releases/download/v0.62.1/frp_0.62.1_linux_amd64.tar.gz | tar -xz
```

```shell
frp_0.62.1_linux_amd64/
├── frps          # 服务端核心程序（server）
├── frps.toml     # 服务端配置文件
├── frpc          # 客户端核心程序（client）
├── frpc.toml     # 客户端配置文件
```

```shell
公网用户 --> [ frps server ] <---> [ frpc client ] --> 本地服务
	           (云服务器)            (加密隧道)      (192.168.x.x)
```

## server config

> server config

```toml
# 基础通信配置
bindPort = 7000            # 客户端口（防火墙需放行此端口）
auth.method = "token"      # 启用最高安全级别的令牌认证
auth.token = "your.auth.token"  # openssl rand -base64 16

# 可视化控制台（强烈推荐开启）
webServer.addr = "0.0.0.0"  # 监听所有网络接口
webServer.port = 7500       # 管理后台端口
webServer.user = "your_user"    # 登录用户名
webServer.password = "your_password" # 登录密码

# log
log.level = "info
log.to = "/root/dev-ops/tools/frp_0.62.1_linux_amd64/frps.log"
     
# https

#webServer.tls.certFile = "/path/to/cert.pem" 
#webServer.tls.keyFile = "/path/to/key.pem"
```

```shell
chmod +x frps
./frps -c frps.toml | tee frps.log
ss -tulnp | grep frps
```

## client config

```toml
serverAddr = "your_internet_ip"
serverPort = 7000
auth.token = "your.auth.token"

[[proxies]]
name = "frontend-1"
type = "tcp"
localIP = "127.0.0.1"
localPort = 3000
remotePort = 7001

[[proxies]]
name = "frontend-2"
type = "tcp"
localIP = "127.0.0.1"
localPort = 5173
remotePort = 7002
```

```shell
frpc -c frpc.toml
```

## start with service

```shell
vim /etc/systemd/system/frps.service
```

```ini
Description = frp server
After = network.target syslog.target
Wants = network.target

[Service]
Type = simple

ExecStart = /root/dev-ops/tools/frp_0.62.1_linux_amd64/frps -c /root/dev-ops/tools/frp_0.62.1_linux_amd64/frps.toml

[Install]
WantedBy = multi-user.target

```

```shell
sudo systemctl start frps
sudo systemctl status frps
sudo systemctl daemon-reload
```