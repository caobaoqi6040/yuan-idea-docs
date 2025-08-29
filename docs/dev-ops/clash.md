---
title: clash
tags:
  - dev-ops
createTime: 2025/08/28 17:44:44
permalink: /article/5gi174vi/
---

## clash verge

- https://github.com/clash-verge-rev/clash-verge-rev

### install

```shell
sudo dpkg -i Clash.Verge_2.4.0_amd64.deb
```

### use

- http://23.145.248.232:13389/api/v1/client/subscribe?token=cd68d2b6440d43d5da81b8a83f47693d
- https://0b96e976-9ec3-44c0-aa2b-30bf8b0792ea.com/api/v1/client/subscribe?token=dd30142c558eceed834d19a05757cf83


## crash

- https://github.com/juewuy/ShellCrash

### install

```shell
sudo -i 
bash # 如已处于 bash 环境可跳过
export url='https://fastly.jsdelivr.net/gh/juewuy/ShellCrash@master' && wget -q --no-check-certificate -O /tmp/install.sh $url/install.sh  && bash /tmp/install.sh && source /etc/profile &> /dev/null
# bak
export url='https://gh.jwsc.eu.org/master' && bash -c "$(curl -kfsSl $url/install.sh)" && source /etc/profile &> /dev/null

# web ui manager
iptables -I INPUT -p tcp --dport 9999 -j ACCEPT
```

### use

```shell
crash
```

## clash

### install

```shell
cd ~ && mkdir clash
cd clash

wget https://git.opclash.com/kehuduan/clash/clash-linux-amd64-v1.18.0.gz
gzip -d clash-linux-amd64-v1.18.0.gz
chmod +x clash-linux-amd64-v1.18.0
mv clash-linux-amd64-v1.18.0 /usr/local/bin/clash
clash -v

clash
# 配置订阅信息
cd $HOME/.config/clash/

cp ~/<YOUR_PATH>/config.yaml .
cp ~/<YOUR_PATH>/Country.mmdb .

clash # http://clash.razord.top/#/settings
echo -e "export http_proxy=http://127.0.0.1:7897\nexport https_proxy=http://127.0.0.1:7897" >> ~/.bashrc
curl -I www.google.com
```

> auto start

```shell
# 生成 systemd 配置文件
cat > /etc/systemd/system/clash.service << EOF
[Unit]
Description=Clash - A rule-based tunnel in Go
Documentation=https://github.com/Dreamacro/clash/wiki
[Service]
OOMScoreAdjust=-1000
ExecStart=/usr/local/bin/clash -f /root/.config/clash/config.yaml
Restart=on-failure
RestartSec=5
[Install]
WantedBy=multi-user.target
EOF

# 配置开机自启
systemctl enable clash

# 启动 clash 服务
systemctl start clash
systemctl status clash


# 配置环境变量
echo -e "export http_proxy=http://127.0.0.1:7890\nexport https_proxy=https://127.0.0.1:7890" >> ~/.bashrc
```

```shell
sudo systemctl stop clash # 停止该服务
sudo systemctl disable clash # 禁用该服务
sudo rm /etc/systemd/system/clash.service # 删除该服务的服务文件
sudo systemctl daemon-reload #重新加载 systemctl 以更新服务列表
```

> [!danger]
> 如果脚本执行失败尝试关闭 SELINUX

```shell
vim /etc/selinux/config # 将 SELINUX=enforcing 修改为 disabled
```