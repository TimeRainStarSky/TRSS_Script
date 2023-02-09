---
title: Arch Linux
icon: page
order: 5
date: 2022-12-14
category:
  - 安装教程
  - Arch Linux
---

[![访问量](https://visitor-badge.glitch.me/badge?page_id=TimeRainStarSky-TRSS_Script-Arch_Linux&right_color=red&left_text=访%20问%20量) ![访问量](https://profile-counter.glitch.me/TimeRainStarSky-TRSS_Script-Arch_Linux/count.svg)](https://archlinuxcn.org)

# 脚本安装

::: code-tabs#Script

@tab TRSS OneBot

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_OneBot/raw/linux/Install.sh)
```

@tab TRSS Liteyuki

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Liteyuki/raw/main/Install.sh)
```

@tab TRSS Yunzai

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Yunzai/raw/main/Install.sh)
```

@tab TRSS Sagiri

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Sagiri/raw/main/Install.sh)
```

@tab TRSS Amiya

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Amiya/raw/main/Install.sh)
```

@tab TRSS Zhenxun

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Zhenxun/raw/main/Install.sh)
```

:::

::: details 自定义功能
自定义 安装路径 `DIR` 和 启动命令 `CMD`（可用于多开）

举例：将脚本安装至 `/Bot` 启动命令 `trss`

```sh
DIR=/Bot CMD=trss bash <(x
```

:::

# 常见问题

::: details 未能同步所有数据库（无法锁定数据库）

```sh
rm /var/lib/pacman/db.lck
```

:::

::: details 无法提交处理（无效或已损坏的软件包）

```sh
pacman -Syy archlinux-keyring
```

:::
