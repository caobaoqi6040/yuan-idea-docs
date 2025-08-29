---
title: git
tags:
  - dev-ops
createTime: 2025/08/28 17:59:41
permalink: /article/8ij8ni7p/
---

- https://git-scm.com/
- https://git-lfs.com/

## install

```shell
sudo apt-get install git
git lfs install
```

## config

> vim ~/.gitconfig

```shell
[user]
  name = caobaoqi6040
  email = caobaoqi6040@gmail.com
[init]
  defaultBranch = main
```


## use

```shell
git clone --depth=1 [repo_link.git]
git add .
git commit -m "[commit_msg]"
git log --online
git show HEAD
```

git lfs

```shell
git lfs track "*.deb"
git lfs track "*.exe"

git lfs ls-file

du -sh --exclude=lfs .git # 512K
du -sh .git # 488M

git lfs untrack "*.deb"
git rm --cached "*.deb"
```


## ref

- https://help.aliyun.com/zh/yunxiao/user-guide/how-to-use-git-lfs#635e14a15dvvi

