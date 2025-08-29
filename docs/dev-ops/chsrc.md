---
title: chsrc
tags:
  - dev-ops
createTime: 2025/08/28 17:38:25
permalink: /article/bet40yap/
---

- https://github.com/RubyMetric/chsrc

## install

```shell
# install with curl
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-x64-linux -o chsrc; chmod +x ./chsrc
# install with dpkg
sudo dpkg -i ./chsrc_latest-1_amd64.deb
```

## use

```shell
chsrc list
# set
chsrc set ubuntu first
chsrc set -local java
chsrc set node
chsrc set python
chsrc set go
chsrc set winget
chsrc set brew
chsrc set cocoapods
chsrc set dockerhub
chsrc set flathub
chsrc set nix
chsrc set guix
chsrc set emacs
chsrc set tex
chsrc set conda

# use reset to default
chsrc reset conda
```