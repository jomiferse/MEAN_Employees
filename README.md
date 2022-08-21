# Ejemplo con Angular, Empress y MongoDB

## Instalación de Nodejs y NPM
`sudo apt-get update`

`sudo apt-get install nodejs npm`

`sudo npm cache clean -f`

`sudo npm install -g n`

`sudo n stable`

Y reiniciamos `sudo reboot`

![ex](https://user-images.githubusercontent.com/47986440/185801857-52a241d5-ceae-4d11-ba89-1029871db536.PNG)

## Instalación de Angular
`sudo npm install -g @angular/cli`

## Instalación de MongoDB (Última versión)
`wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -`

`echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list`

`sudo apt-get update`

`sudo apt-get install -y mongodb-org`

Para iniciarlo: `sudo systemctl start mongod`

Para pararlo: `sudo systemctl stop mongod`

Para que inicie siempre: `sudo systemctl enable mongod`

## Instalación de MongoDB (Versión 4.4.11)

`wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -`

`echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list`

`sudo apt-get update`

`sudo apt-get install -y mongodb-org=4.4.11 mongodb-org-server=4.4.11 mongodb-org-shell=4.4.11 mongodb-org-mongos=4.4.11 mongodb-org-tools=4.4.11`

`sudo systemctl start mongod`

`sudo systemctl status mongod`
