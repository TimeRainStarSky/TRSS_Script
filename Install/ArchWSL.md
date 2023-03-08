---
title: ArchWSL
icon: page
date: 2022-12-14
category:
  - 安装教程
  - Windows
  - ArchWSL
---

1. 右键开始菜单，选择 `终端(管理员)` 或 `Windows 功能` 中：

启用 `适用于 Linux 的 Windows 子系统`

```sh
dism /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

启用 `虚拟机平台`

```sh
dism /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

2. 重启设备后，启用 WSL2

```sh
wsl --set-default-version 2
```

::: tip

输出以下内容则表示 WSL2 启用成功

```
有关与 WSL 2 的主要区别的信息，请访问 https://aka.ms/wsl2
操作成功完成。
```

:::

3. 更新 WSL2 内核

```sh
wsl --update
```

::: warning
若速度太慢，可手动下载安装更新包：<https://aka.ms/wsl2kernel>
:::

4. 从 [ArchWSL GitHub Releases Assets](https://github.com/yuk7/ArchWSL/releases/latest) 中下载 `Arch.zip` 并解压

::: warning
若速度太慢，可使用 GitHub 加速，如：[GitHub Proxy](https://ghproxy.com)
:::

5. 启动 `Arch.exe`

::: tip

输出以下内容则表示 ArchWSL 安装成功

```
Using: xxx\rootfs.tar.gz
Installing...
Installation complete
Press enter to continue...
```

:::

6. 在 `文件资源管理器` 中打开（`Win+R` 运行）：

```
\\wsl$\Arch\etc\pacman.d
```

编辑 `mirrorlist`，在 `China` 后选择你喜欢的镜像源，删除开头的 `#`，保存

```
\\wsl$\Arch\etc
```

编辑 `pacman.conf`，在文件末尾添加以下内容并保存：

```
[archlinuxcn]
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
Server = https://mirrors.bfsu.edu.cn/archlinuxcn/$arch
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
Server = https://mirrors.aliyun.com/archlinuxcn/$arch
Server = https://mirrors.163.com/archlinux-cn/$arch
Server = https://mirrors.tencent.com/archlinuxcn/$arch
Server = https://repo.archlinuxcn.org/$arch
SigLevel = Never
[arch4edu]
Server = https://mirrors.bfsu.edu.cn/arch4edu/$arch
Server = https://mirrors.tuna.tsinghua.edu.cn/arch4edu/$arch
Server = https://mirrors.aliyun.com/arch4edu/$arch
Server = https://mirrors.tencent.com/arch4edu/$arch
SigLevel = Never
```

7. 启动 `Arch.exe`

::: tip

输出以下内容则表示 ArchWSL 启动成功

```
[root@xxx Arch]#
```

:::

8. 更新软件包

```sh
pacman -Syy archlinux-keyring && pacman -Syu
```

9. 脚本安装：[<FontIcon icon="page"/> Arch Linux](Arch_Linux.md)

---

启动：运行 `Arch.exe` 或终端输入 `wsl`

在`文件资源管理器`中打开 ArchWSL 主目录：

```
\\wsl$\Arch\root
```

其他功能请参阅 [Microsoft 官方文档](https://docs.microsoft.com/zh-cn/windows/wsl) 和 [ArchWSL 文档](https://github.com/yuk7/ArchWSL/blob/master/i18n/README_zh-cn.md)

---

## 常见问题

::: details 参考的对象类型不支持尝试的操作。

```sh
netsh winsock reset
```

:::