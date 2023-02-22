---
title: CLI 使用教程
icon: shell
order: 1
date: 2022-12-18
category:
  - 使用教程
  - CLI
---

## 通用功能

- 用法：`[项目命令] [用法]`

| 名称                  | 用法         | 缩写 | 说明            |
| --------------------- | ------------ | ---- | --------------- |
| 文件管理              | `file`       | `f`  | 显示 文件管理   |
| 使用说明              | `manual`     | `m`  | 显示 使用说明   |
| [附加功能](#附加功能) | `extra`      | `e`  | 显示 附加功能   |
| 关于脚本              | `about`      | `a`  | 显示 关于脚本   |
| [检查更新](#检查更新) | `update`     | `u`  | 执行 检查更新   |
| 执行命令              | `cmd [命令]` | `c`  | 执行 自定义命令 |

### 附加功能

- 用法：`[项目命令] extra [用法]`

| 名称            | 用法            | 缩写  |
| --------------- | --------------- | ----- |
| 启动 fish       | `fish`          | `f`   |
| 文件管理        | `file`          | `fi`  |
| 备份管理        | `backup`        | `b`   |
| 阿里云盘        | `alyp`          | `al`  |
| 百度网盘        | `bdwp`          | `bd`  |
| 资源监视        | `btop`          | `bt`  |
| 进程管理        | `htop`          | `h`   |
| 实时网速        | `nethogs`       | `nh`  |
| 存储分析        | `ncdu`          | `n`   |
| 文本搜索        | `text_search`   | `ts`  |
| 文件搜索        | `file_search`   | `fs`  |
| 远程控制        | `tmate`         | `t`   |
| 代理设置        | `proxy`         | `p`   |
| 自启动设置      | `autostart`     | `a`   |
| 下载服务器设置  | `server`        | `s`   |
| 文件管理器设置  | `file_settings` | `fst` |
| 🌈 彩虹输出设置 | `rainbow`       | `r`   |
| 重装字体        | `fonts`         | `fo`  |

### 检查更新

- 用法：`[项目命令] update [用法]`

| 名称   | 用法    | 缩写 | 说明                   |
| ------ | ------- | ---- | ---------------------- |
| 全部的 | `all`   | `a`  | 同时更新 所有 Git 项目 |
| 安静的 | `quiet` | `q`  | 不显示 TUI 界面        |

::: warning
若 `通用功能的缩写` 与 `项目功能的缩写` 重复，`项目功能` 优先
:::

## 项目功能

### 通用功能

- 用法：`[项目命令] [项目名称] [用法]`

| 名称     | 用法       | 缩写 | 说明                  |
| -------- | ---------- | ---- | --------------------- |
| 打开窗口 | `attach`   | `a`  | 打开 项目 tmux 窗口   |
| 启动窗口 | `start`    | `s`  | 启动 项目 tmux 窗口   |
| 停止窗口 | `stop`     | `st` | 停止 项目 tmux 窗口   |
| 前台启动 | `fgstart`  | `f`  | 前台启动 项目         |
| 修改配置 | `config`   | `c`  | 修改 项目配置文件     |
| 重建配置 | `create`   | `cr` | 重新创建 项目配置文件 |
| 文件管理 | `file`     | `fi` | 管理 项目文件         |
| 重装项目 | `download` | `d`  | 重新安装 项目         |
| 检查更新 | `update`   | `u`  | 更新 项目             |

### 专用功能

- [<FontIcon icon="creative"/> TRSS OneBot](TRSS_OneBot.md)

- [<FontIcon icon="creative"/> TRSS Liteyuki](TRSS_Liteyuki.md)

- [<FontIcon icon="creative"/> TRSS Yunzai](TRSS_Yunzai.md)

- [<FontIcon icon="creative"/> TRSS Sagiri](TRSS_Sagiri.md)

- [<FontIcon icon="creative"/> TRSS Amiya](TRSS_Amiya.md)

- [<FontIcon icon="creative"/> TRSS Zhenxun](TRSS_Zhenxun.md)