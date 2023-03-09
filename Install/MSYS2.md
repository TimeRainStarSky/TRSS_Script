---
title: MSYS2
icon: page
date: 2022-12-14
category:
  - 安装教程
  - Windows
  - MSYS2
---

## MSYS2 安装

- [MSYS2 官网](https://msys2.org)

- [MSYS2 安装程序](https://github.com/msys2/msys2-installer/releases/download/nightly-x86_64/msys2-x86_64-latest.exe)

::: warning
若速度太慢，可使用 GitHub 加速，如：[GitHub Proxy](https://ghproxy.com/github.com/msys2/msys2-installer/releases/download/nightly-x86_64/msys2-x86_64-latest.exe)
:::

## 脚本安装

::: warning
首次安装可能会自动关闭，再次启动即可
:::

::: code-tabs#Script

@tab TRSS OneBot

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_OneBot/raw/linux/Install-MSYS2.sh)
```

@tab TRSS Liteyuki

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Liteyuki/raw/main/Install-MSYS2.sh)
```

@tab TRSS Yunzai

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Yunzai/raw/main/Install-MSYS2.sh)
```

@tab TRSS Sagiri

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Sagiri/raw/main/Install-MSYS2.sh)
```

@tab TRSS Amiya

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Amiya/raw/main/Install-MSYS2.sh)
```

@tab TRSS Zhenxun

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Zhenxun/raw/main/Install-MSYS2.sh)
```

:::

::: details 自定义功能

![示意图](./MSYS2.svg)

自定义 安装路径 `DIR` 和 启动命令 `CMD`（可用于多开）

举例：将脚本安装至 `/Bot` 启动命令 `trss`

```sh
# 原安装命令
bash <(x)
# 修改后安装命令
DIR=/Bot CMD=trss bash <(x)
```

:::

## 常见问题

::: details 未能同步所有数据库（无法锁定数据库）

右键 `以管理员身份运行`

```sh
rm /var/lib/pacman/db.lck
```

:::

::: details 无法提交处理（无效或已损坏的软件包）

```sh
pacman -Syy msys2-keyring
```

:::