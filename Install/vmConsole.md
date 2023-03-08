---
title: vmConsole
icon: page
date: 2023-01-12
category:
  - 安装教程
  - Android
  - vmConsole
---

::: warning
虚拟机运行效率太低，不建议使用
:::

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

- [<FontIcon icon="page"/> Docker：Linux 应用容器（推荐）](Docker.md)

- [<FontIcon icon="page"/> TMOE：PRoot/chroot 容器](TMOE.md)