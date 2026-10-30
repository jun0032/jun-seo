---
title: "Running a Minecraft modpack server on Linux"
description: "Set up a NeoForge modpack server on a Linux machine, give it enough RAM, open the port, and keep it running after you log out."
date: 2026-10-29
type: tutorial
tags: [minecraft, linux, servers]
draft: true   # SAMPLE: review/rewrite, then set to false to publish
---

> **Sample tutorial.** This shows how a tutorial looks on the site. Edit it or replace it with your own.

Most modpacks on CurseForge publish a separate **Server Pack** download. This guide uses one of those on Fedora, but any Linux distro works the same way.

## 1. Install Java

Recent modpacks (Minecraft 1.21+) need Java 21:

```bash
sudo dnf install java-21-openjdk-headless
java -version
```

## 2. Download and unpack the server files

On the modpack's CurseForge page, open **Files → Server Pack**, download the zip, then:

```bash
mkdir -p ~/servers/my-pack && cd ~/servers/my-pack
unzip ~/Downloads/ServerFiles-*.zip
```

## 3. Give it enough memory

Modpacks are hungry. Edit `user_jvm_args.txt` and set the heap size:

```text
-Xms4G
-Xmx8G
```

## 4. First run and the EULA

```bash
./startserver.sh
```

The first run stops and asks you to accept the EULA. Open `eula.txt`, change `eula=false` to `eula=true`, and run the script again.

## 5. Open the port

```bash
sudo firewall-cmd --add-port=25565/tcp --permanent
sudo firewall-cmd --reload
```

## 6. Keep it running

Run the server inside `tmux` so it survives closing the terminal:

```bash
tmux new -s mc
./startserver.sh
# detach: Ctrl+B then D   ·   reattach: tmux attach -t mc
```
