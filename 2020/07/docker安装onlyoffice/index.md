# docker安装onlyoffice


## 1.安装curl

$ which curl

 $sudo apt-get update
$ sudo apt-get install curl

## 2.安装最新版本

$curl -SSL https://get.docker.com/ | sh 

## 3.测试是否安装成功

$sudo docker  run hello-world

## 4.拉取ONLYOFFICE Document Server 的Docker镜像

sudo docker pull onlyoffice/documentserver

## 5.启动Document Server镜像，并映射80端口至本地。

sudo docker run -i -t -d -p 80:80 onlyoffice/documentserver

## 6.启动后，访问http://服务器地址:80，

刚开始看到的可能是是502 Bad Gateway，稍等一会，刷新浏览器页面即可。

### 7.其他配置

将Document Server映射至其它端口：例如映射至9000端口：

sudo docker run -i -t -d -p 9000:80 onlyoffice/documentserver

8.Document Server的数据在容器中的储存位置如下：

 /var/log/onlyoffice 存放ONLYOFFICE Document Server日志

/var/www/onlyoffice/Data 存放证书文件

你可以用

 sudo docker -exec -it onlyoffice/documentserver /bin/bash

登入容器，也可以将以上两个目录映射到本地，这样更方便。

创建目录：

mkdir -p /app/onlyoffice/DocumentServer/logs
mkdir -p /app/onlyoffice/DocumentServer/data



使用

docker -v

 将目录映射至本地：

sudo docker run -i -t -d -p 80:80 \ -v /app/onlyoffice/DocumentServer/logs:/var/log/onlyoffice \ -v /app/onlyoffice/DocumentServer/data:/var/www/onlyoffice/Data onlyoffice/documentserver

这样，直接访问本地的

/app/onlyoffice/DocumentServer/

 下的两个文件夹就可以了。





https://www.orgleaf.com/2588.html

### 启用HTTPS

HTTPS需要使用SSL证书，可以自己签发也可以用ca机构签发的，加密效果相同。

生成证书：

1. 创建私钥

   ```
   openssl genrsa -out onlyoffice.key 2048
   ```

2. 创建CSR

   ```
   openssl req -new -key onlyoffice.key -out onlyoffice.csr
   ```

3. 用私枂和CSR签发证书

   ```
   openssl x509 -req -days 365 -in onlyoffice.csr -signkey onlyoffice.key -out onlyoffice.crt
   ```

4. 用dhparam加密服务器密钥

   ```
   openssl dhparam -out dhparam.pem 2048
   ```

完成证书的生成后，将生成的证书拷贝到

```
/app/onlyoffice/DocumentServer/data/certs
```

 目录下。

创建相应目录：

```
mkdir -p /app/onlyoffice/DocumentServer/data/certs
```

复制证书到

```
/app/onlyoffice/DocumentServer/data/certs
```

目录并设置权限：

```
cp onlyoffice.key /app/onlyoffice/DocumentServer/data/certs/
cp onlyoffice.crt /app/onlyoffice/DocumentServer/data/certs/
cp dhparam.pem /app/onlyoffice/DocumentServer/data/certs/
chmod 400 /app/onlyoffice/DocumentServer/data/certs/onlyoffice.key
```

运行容器，映射容器的443端口和Data目录至本地：

```
sudo docker run -i -t -d -p 443:443 \
   -v /app/onlyoffice/DocumentServer/data:/var/www/onlyoffice/Data  onlyoffice/documentserver
```
