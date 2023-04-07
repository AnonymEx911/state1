<p align="center">
 <img width="100px" src="https://raw.githubusercontent.com/wixcore/staterp/6b9edc12b9fee5c6e482f58ae4977f718e69f3cd/domains/staterp.wixcore.net/exports/brand/logotype.png" align="center" alt="Brand of WixCore." />
 <h2 align="center">Getting Started with Server</h2>
 <p align="center">Instructions for installing the server on different machines on the network.</p>
 <p align="center">
    <a href="//wixcore.net">Official Site</a>
    ·
    <a href="//wixcore.net/discord">Community on discord</a>
    ·
    <a href="//roleplay.wixcore.net">Demo project</a>
 </p>
 <p align="center">Love the project? Please consider <a href="https://www.paypal.com/donate/?hosted_button_id=G7MCME73XBA5G">donating</a> to help it improve!</p>
</p>

# Features
- [Features](#features)
- [Introduction](#introduction)
- [Folder and file descriptions](#folder-and-file-descriptions)
- [Windows](#windows)
- [Support project](#support-project)
  - [Financial](#financial)
# Introduction
This brief tutorial will show you how to run your server on both Windows and Linux distributions.
By default, the server makes use of port 22000 UDP for server access and the port after (here 22001) for the HTTP server hosting the client packages for the clients to download from.
So make sure to have done the ports forwarding on your router process and have also unblocked the ports on your firewall before running the server.
# Folder and file descriptions
- **bin/loader.mjs:** Responsible for bridging between your server and running your scripts from the packages folder.
- **client_packages:** Folder in which client-side scripts are located and downloaded by the client. (Client-side allows you to draw GUI or do CEF work)
- **database:** Here are demo data for databases.
- **domains:** Script for launching the site, with an account and an auto donation.
- **handlers:** source code, The client side that processes the script and synchronizes it with the server.
- **interface:** source code, Cef based on React, The role of serving the appearance of the server to the players.
- **packages:** Folder in which server-side scripts are located and loaded by the server. (Server-side allows you to manage the player and create your own world)
- **maps:** Folder in which map files (in JSON format) are loaded into the game world.
- **plugins:** Allows you to load custom .dll plugins into the server.
- **conf.json:** Contains the server configuration in JSON format. Read more about server settings [here](//wiki.rage.mp/index.php?title=Server_settings).
- **package.json:** Node JS dependencies and project launch.
- **ragemp-server.exe:** Server executable, which if you run, starts the game server.
# Windows
1. For a hassle-free installation and operation, it is recommended to have the latest [VC Redist](//learn.microsoft.com/ru-ru/cpp/windows/latest-supported-vc-redist?view=msvc-170), [NodeJS](https://nodejs.org/dist/v18.15.0/node-v18.15.0-x64.msi) and [MariaDB](//mariadb.org/download/?t=mariadb&p=mariadb&r=11.1.0&os=windows&cpu=x86_64&pkg=msi&m=ihost2).
2. We find the directory with [RAGE:MP](cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe) installed, used by the launcher 1 time.
3. We go into the server-files directory and copy all the folders and files.
4. Create a new folder in the C:\ or D:\ "Project/WixCore" directory and paste the clipboard here.
5. Download the archive with the latest [staterp](https://github.com/wixcore/staterp/archive/refs/heads/main.zip) release.
6. Unpack the archive there so that the files and folders are rooted for replacement.
7. Now install Node dependency in 3 folders npm command n
   - Disk:/Project/WixCore/ end Disk:/Project/WixCore/handlers
   ```md
   npm install
   ```
   - Disk:/Project/WixCore/interface
    ```md
    npm install --legacy-peer-deps
    ```
8. We connect the database, previously created it in HeidiSQL with the encoding utf8_general_ci or utf8mb3_general_ci which was installed with MariaDB
    Disk:/Project/WixCore/handlers/packages/wixcore/configs/mysql.js
9. Start the server by clicking on the file ragemp-server.exe
10. We go in conf.json and edit it for ourselves.
11. We go into HeidiSQL in our database and import all the tables from the database folder.
12. Create a new directory "Disk:/Project/WixCore/client_packages/game_resources/interface".
13. Run npm command on path Disk:/Project/WixCore/
    ```md
    npm run build
    ```
14. Open Rage Multiplayer and go to IP 127.0.0.1:22000. And we enjoy.
# Support project
## Financial
- [fanttom](//discordapp.com/users/378103073572388866) [39$]


<p align="right">Sincerely, <a href="//discordapp.com/users/1044826463368663080">ua.lifesheets</a> developer.<p>