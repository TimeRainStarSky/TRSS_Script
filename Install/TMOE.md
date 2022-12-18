---
title: TMOE
icon: page
date: 2022-12-14
category:
  - 安装教程
  - Linux
  - Android
  - TMOE
---

[![访问量](https://visitor-badge.glitch.me/badge?page_id=TimeRainStarSky-TRSS_Script-TMOE&right_color=red&left_text=访%20问%20量) ![访问量](https://profile-counter.glitch.me/TimeRainStarSky-TRSS_Script-TRSS_Script-TMOE/count.svg)](https://gitee.com/mo2/linux)

---

TMOE 启动命令：
```sh
curl -LO l.tmoe.me/2.awk && awk -f 2.awk
# 备用地址：
curl -LO gitee.com/mo2/linux/raw/2/2.awk && awk -f 2.awk
```
在 Linux 中启动 TMOE，会出现以下选项，请选择 Manager

![1](/Install/TMOE/1.jpg)

---

第一次进入，请阅读说明

![2](/Install/TMOE/2.jpg)

在出现 `您要继续吗? Do you want to continue?` 之类的选项时：`[Y/n]直接按回车，[y/N]输入y再回车`

---

由于国内 GitHub 连接较慢，推荐使用 Gitee

![3](/Install/TMOE/3.jpg)

---

在出现 `(Y/I/N/O/D/Z) [default=N] ?` 之类的选项时：`直接按回车即可`

![4](/Install/TMOE/4.jpg)

---

进入 TMOE 后，有 `root 权限` 使用 `chroot 容器`，否则使用 `PRoot 容器`

![5](/Install/TMOE/5.jpg)

---

首次进入，按提示选择配置：

1. DNS 推荐选择：`[240c::6666](CFIEC)`

2. 一言：`按需选择`

3. 时区(Timezone)：Asia/Shanghai `回车`

4. 共享目录：用于在容器中访问宿主文件，`按需选择`

5. chroot 模式(CHROOT MODE)：用不到 systemctl，`选择 normal`

---

进入容器菜单之后，选择 `发行版列表`

![6](/Install/TMOE/6.jpg)

选择 `Arch`

![7](/Install/TMOE/7.jpg)

选择 `启动` (如果要多开容器，请选择新建容器)

![8](/Install/TMOE/8.jpg)

---

等待容器安装完成 (如果在安装中出现问题，可以尝试移除容器后重装)

首次启动，按提示选择配置：

1. 新建 sudo 用户：一般使用 root 用户即可，`选择 否`

2. 为 root 用户配置 zsh：终端美化，按需选择，`推荐 是`

3. delete ~/zsh.sh：`选择 是`

4. 启动tmoe tools?：`选择 否` (需要使用输入 tmoe 启动即可)

---

进入容器命令：`tmoe p/c a` (p 指 PRoot 容器，c 指 chroot 容器)

管理容器命令：`tmoe`

---

下一步：[<FontIcon icon="page"/> Arch Linux](Arch_Linux.md)