---
title: vmConsole
icon: page
date: 2023-1-12
category:
  - 安装教程
  - Android
  - vmConsole
---

[![访问量](https://visitor-badge.glitch.me/badge?page_id=TimeRainStarSky-TRSS_Script-vmConsole&right_color=red&left_text=访%20问%20量) ![访问量](https://profile-counter.glitch.me/TimeRainStarSky-TRSS_Script-TRSS_Script-vmConsole/count.svg)](https://github.com/sylirre/vmConsole)

1. 准备：[vmConsole](https://github.com/sylirre/vmConsole/releases/latest)

2. 打开 `vmConsole`，登录 `root`

3. 设置存储设备：

```sh
setup-disk -m sys /dev/sda && reboot
```

4. 可选 `Docker` 或 `TMOE`，安装 `Docker`：

```sh
apk update && apk add docker && rc-update add docker && service docker start
```

- [<FontIcon icon="page"/> Docker：Linux 应用容器引擎（推荐）](Docker.md)

- [<FontIcon icon="page"/> TMOE：PRoot/chroot 容器脚本](TMOE.md)