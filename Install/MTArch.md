---
title: MT管理器
icon: page
date: 2022-12-14
category:
  - 安装教程
  - Android
  - MT管理器
---

[![访问量](https://visitor-badge.glitch.me/badge?page_id=TimeRainStarSky-TRSS_Script-MTArch&right_color=red&left_text=访%20问%20量) ![访问量](https://profile-counter.glitch.me/TimeRainStarSky-TRSS_Script-TRSS_Script-MTArch/count.svg)](https://github.com/TimeRainStarSky/TRSS-MTArch)

1. 准备：[MT管理器](https://mt2.cn)

2. 打开 `MT管理器`，菜单选择 `终端模拟器`，执行：

```sh
curl -LO gitee.com/TimeRainStarSky/TRSS-MTArch/raw/main/Install.sh && bash Install.sh
```

<details><summary>可选项目</summary>

手动下载 `ArchLinux LXC RootFS (rootfs.tar.xz)`

- [Linux Containers 官网](https://images.linuxcontainers.org/images/archlinux/current/arm64/default)
- [清华大学镜像站](https://mirrors.tuna.tsinghua.edu.cn/lxc-images/images/archlinux/current/arm64/default)
- [北京外国语大学镜像站](https://mirrors.bfsu.edu.cn/lxc-images/images/archlinux/current/arm64/default)

</details>

3. 脚本安装：[<FontIcon icon="page"/> Arch Linux](Arch_Linux.md)

4. 启动：`start`

5. 文件管理：长按 `底栏 ↑` 输入：

```
/data/user/0/bin.mt.plus/home/Arch/rootfs/root
```