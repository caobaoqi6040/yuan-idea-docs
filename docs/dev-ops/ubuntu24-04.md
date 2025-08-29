---
title: ubuntu24.04
tags:
  - dev-ops
createTime: 2025/08/28 17:51:11
permalink: /article/tn3bp9gy/
---

- https://ubuntu.com/blog/tag/ubuntu-24-04-lts

```shell
sudo apt update
sudo apt upgrade
sudo apt install build-essential
sudo apt install wget vim curl git zip unzip libfuse2
```

- [chsrc](../../chsrc/README.md)
- [clash](../../clash/README.md)
- [git](../../git/README.md)

## zsh

- https://ohmyz.sh/

```shell
sudo apt install zsh -y
zsh --version

# 安装 oh my zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

vim ~/.zshrc # 写入下面的内容

plugins=(git
        zsh-autosuggestions
        zsh-syntax-highlighting
        )
```

> - https://mirrors.tuna.tsinghua.edu.cn/help/ohmyzsh.git/

```shell
# install
git clone https://mirrors.tuna.tsinghua.edu.cn/git/ohmyzsh.git
cd ohmyzsh/tools
REMOTE=https://mirrors.tuna.tsinghua.edu.cn/git/ohmyzsh.git sh install.sh
# change mirror(for installed)
git -C $ZSH remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/ohmyzsh.git
git -C $ZSH pull
```

## nvm

- https://github.com/nvm-sh/nvm

```shell
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

nvm install 23
nvm install 22
nvm install 20
nvm install 18

nvm use 23
corepack enable # 开启核心包支持[pnpm、yarn etc...]
```

## sdk man

- https://sdkman.io/

```shell
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk version

sdk install java 17.0.10-zulu 
sdk install java 21.0.8.fx-zulu
sdk install java 23.0.2-graalce
sdk install maven 3.9.9
sdk install gradle 8.5
sdk install springboot
```

## brew

- https://brew.sh/

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

```shell
brew install --cask font-0xproto-nerd-font
brew install --cask font-maple-mono-nf-cn
```

## nvidia

> nvidia-smi

```shell
sudo add-apt-repository ppa:graphics-drivers/ppa # 添加 NVIDIA 驱动仓库
sudo apt update

# 安装需要的依赖
sudo apt install -y alsa-utils
sudo apt install -y pciutils ubuntu-drivers-common

# 安装驱动
lspci | grep -i nvidia # 检查系统中的 NVIDIA 显卡
sudo ubuntu-drivers devices # # 查看推荐的驱动
sudo apt install nvidia-driver-570-open # 安装推荐的 NVIDIA 驱动

sudo reboot
nvidia-smi # 重启后验证驱动安装
```

> cuda toolkit

```shell
# 下载并安装 CUDA 仓库密钥
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2404/x86_64/cuda-keyring_1.1-1_all.deb
sudo dpkg -i cuda-keyring_1.1-1_all.deb
sudo apt-get update

sudo apt install cuda-toolkit-12-8 # 与上面 nvidia-smi 输出的 cuda version 对应

echo 'export PATH=/usr/local/cuda-12.8/bin${PATH:+:${PATH}}' >> ~/.bashrc
echo 'export LD_LIBRARY_PATH=/usr/local/cuda-12.8/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}' >> ~/.bashrc
source ~/.bashrc

nvcc -V
```

> cudnn

```shell
sudo apt install libcudnn8-cuda-12 libcudnn8-dev-cuda-12 libcudnn8-samples
dpkg -l | grep cudnn
```

## docker

- https://docs.docker.com/engine/install/ubuntu/

> install with script

```shell
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh ./get-docker.sh
```

> install with apt

```shell
#清理
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

```shell
sudo groupadd docker
sudo usermod -aG docker $USER  # 注销当前用户重新登陆以生效
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

> docker gpu support

```shell
# 添加 NVIDIA Container Toolkit 仓库
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg

curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
  sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
  sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list

# 安装 NVIDIA Container Toolkit
sudo apt-get update
sudo apt-get install -y nvidia-container-toolkit

# 配置 Docker 使用 NVIDIA 运行时
sudo nvidia-ctk runtime configure --runtime=docker
sudo systemctl restart docker
```

```shell
sudo docker run --rm --gpus all nvidia/cuda:12.8.0-base-ubuntu24.04 nvidia-smi
```

> docker desktop login

```shell
gpg --generate-key
pass init <your_generated_gpg-id_public_key>
```

# ssh passwordless

```shell
ssh-keygen -t ed25519 -C "caobaoqi6040@gmail.com" # 在客户机上执行
cd ~/.ssh
cat .\id_ed25519.pub # 将里面的内容复制到服务器 ~/.ssh/authorized_keys 中即可

ssh <user_name>@<host_ip>
```
