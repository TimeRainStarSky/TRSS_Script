---
title: MSYS2
icon: page
date: 2022-12-14
category:
  - 安装教程
  - Windows
  - MSYS2
---

[![访问量](https://visitor-badge.glitch.me/badge?page_id=TimeRainStarSky-TRSS_Script-MSYS2&right_color=red&left_text=访%20问%20量) ![访问量](https://profile-counter.glitch.me/TimeRainStarSky-TRSS_Script-MSYS2/count.svg)](https://msys2.org)

---

# MSYS2 安装

- [MSYS2 UCRT64](https://msys2.org)

- [GitHub Proxy 镜像源](https://ghproxy.com/github.com/msys2/msys2-installer/releases/download/nightly-x86_64/msys2-x86_64-latest.exe)

# 脚本安装

- （首次安装可能会自动关闭，再次启动即可）

## TRSS OneBot

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_OneBot/raw/linux/Install-MSYS2.sh)
```

## TRSS Liteyuki

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Liteyuki/raw/main/Install-MSYS2.sh)
```

## TRSS Yunzai

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Yunzai/raw/main/Install-MSYS2.sh)
```

## TRSS Sagiri

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Sagiri/raw/main/Install-MSYS2.sh)
```

## TRSS Amiya

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Amiya/raw/main/Install-MSYS2.sh)
```

## TRSS Zhenxun

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Zhenxun/raw/main/Install-MSYS2.sh)
```

<details><summary>自定义功能</summary>

自定义 安装路径 `DIR` 和 启动命令 `CMD`（可用于多开）

举例：将脚本安装至 `/Bot` 启动命令 `trss`

```
DIR=/Bot CMD=trss bash <(x
```

</details>

# 常见问题

```
未能同步所有数据库（无法锁定数据库）
```

右键 `以管理员身份运行`

```sh
rm /var/lib/pacman/db.lck
```

---

```
无法提交处理（无效或已损坏的软件包）
```

```sh
pacman -Syy msys2-keyring
```