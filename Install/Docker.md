---
title: Docker
icon: page
date: 2022-12-14
category:
  - 安装教程
  - Windows
  - Mac
  - Linux
  - Docker
---

[![访问量](https://visitor-badge.glitch.me/badge?page_id=TimeRainStarSky-TRSS_Script-Docker&right_color=red&left_text=访%20问%20量) ![访问量](https://profile-counter.glitch.me/TimeRainStarSky-TRSS_Script-Docker/count.svg)](https://docker.com)

# 容器安装

## TRSS Liteyuki

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Liteyuki/raw/main/Install-Docker.sh)
```

## TRSS Yunzai

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Yunzai/raw/main/Install-Docker.sh)
```

## TRSS Sagiri

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Sagiri/raw/main/Install-Docker.sh)
```

## TRSS Amiya

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Amiya/raw/main/Install-Docker.sh)
```

## TRSS Zhenxun

```sh
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_Zhenxun/raw/main/Install-Docker.sh)
```

<details><summary>附加功能</summary>

自定义 安装路径 `DIR` 启动命令 `CMD` 容器名 `DKNAME` （可用于多开）

举例：将脚本安装至 `/Bot` 启动命令 `trss` 容器名 `TRSS` 

```sh
DIR=/Bot CMD=trss DKNAME=TRSS bash <(x
```

</details>

# 容器管理

- 查看容器：`docker ps -as`
- 启动容器：`docker start 容器名`（默认开机自启，无需手动启动）
- 重启容器：`docker restart -t0 容器名`
- 停止容器：`docker stop -t0 容器名`
- 删除容器：`docker rm -f 容器名`
- 重建容器：

```sh
docker run -itPd
  -h 主机名
  --name 容器名
  -v 数据路径:/root/项目名
  --restart always #自启动
  -p 2536:80 #端口映射
  镜像名
```

# 常见问题

```
Docker 安装失败
```

- Docker 官方教程：<https://docker.com>
- Docker-Practice 教程：<https://vuepress.mirror.docker-practice.com/install>

---

```
Cannot connect to the Docker daemon at unix:///var/run/docker.sock
```

若显示以上内容，请先启动 Docker Daemon

```sh
systemctl enable --now docker
```

---

```
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock
```

若显示以上内容，请添加当前用户到 docker 组

```sh
sudo gpasswd -a "$USER" docker
```

---

服务器 Linux 发行版 推荐使用 `Debian 11` 以上

服务器安装视频教程：<https://bilibili.com/video/BV1ie4y1b7zE>

若只有 `Debian 10` 以下，可执行以下命令并重启服务器后升级到 `Debian 12`

```sh
echo 'deb http://ftp.cn.debian.org/debian bookworm main contrib non-free
deb http://ftp.cn.debian.org/debian bookworm-updates main contrib non-free
deb http://ftp.cn.debian.org/debian-security bookworm-security main contrib non-free'>/etc/apt/sources.list
apt update && apt full-upgrade -y && apt autoremove --purge -y && apt clean
```
