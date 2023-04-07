Remove-Item "../client_packages/game_resources/interface/*" -Recurse -force
Copy-Item "./build/*" -Destination "../client_packages/game_resources/interface" -Recurse -force
Remove-Item "./build/*" -Recurse -force 