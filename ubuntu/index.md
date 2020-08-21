# ubuntu


升级系统

sudo apt-get update && sudo apt-get upgrade

或者

sudo apt-get update && sudo apt-get dist-upgrade

升级版本update-manager 





1.开始ssh服务

sudo ps -e | grep ssh（查看ssh服务是否开启）

sudo apt-get install openssh-client（安装ssh客户端程序）

sudo apt-get install openssh-server（安装ssh服务端程序）

sudo systemctl start ssh（打开服务）

sudo systemctl enable ssh（设置服务的开机自启动）



2.设置开机自动启动

systemctl命令是系统服务管理器指令，它实际上将 service 和 chkconfig 这两个命令组合到一起。

设置服务的开机自启动:sudo systemctl enable ssh

打开服务:sudo systemctl start foobar
关闭服务:sudo systemctl stop foobar
重启服务:sudo systemctl restart foobar
不中断正常功能下重新加载服务:sudo systemctl reload foobar
设置服务的开机自启动:sudo systemctl enable foobar
关闭服务的开机自启动:sudo systemctl disable foobar
查看活跃的单元:systemctl list-units
查看某个服务的状态:systemctl status foobar
查看已启动的服务列表： systemctl list-unit-files|grep enabled
查看启动失败的服务列表：systemctl --failed



3.onlyoffice 安装

sudo docker run -i -t -d -p 80:80 onlyoffice/documentserver



4.ssl 安装

docker pull registry:2

```
# 创建ssl相关目录
mkdir ~/certs
# 生成ssl密钥
openssl req -newkey rsa:2048 -nodes -sha256 -keyout certs/test.registry.com.key -x509 -days 365 -out certs/test.registry.com.crt
复制代码
# 创建registry登陆用户文件夹
mkdir ~/auth
# 创建private用户
docker run --entrypoint htpasswd registry:2 -Bbn admin admin > ~/auth/htpasswd
# 删除运行的容器
docker stop [CONTAINER ID]
docker rm [CONTAINER ID]
```



## 部署Collabora Office（http）

 参考：https://www.jianshu.com/p/4082f998a05b

docker pull collabora/code

2、运行collabora镜像

docker run -t -d -p 0.0.0.0:9980:9980 -e 'domain=192\\.168\\.1\\.110|192\\.168\\.33\\.145' -e "username=admin" -e "password=123456" --restart always --cap-add MKNOD collabora/code

说明：

镜像端口9980映射到宿主主机9980

添加两台信任主机192.168.1.110、192.168.33.145

为collabora创建用户admin，密码123456

***注意：\***

***后台运行，需耐心等待，可通过cpu利用率观察\***

3、collabora登录测试（https）

https://192.168.33.145:9980/loleaflet/dist/admin/adminSettings.html，显示输入用户名、密码

4、修改loolwsd.xml

查看collabora容器id：docker ps

进入collabora容器：docker exec -it <容器id> /bin/bash

编辑文件/etc/loolwsd/loolwsd.xml中ssl的值为false，如下

> <ssl desc="SSL settings">
>
> ​    <enable type="bool" default="true">false</enable>

重启collabora容器：docker restart <容器id>

5、collabora登录测试（http）

http://192.168.33.145:9980/loleaflet/dist/admin/adminSettings.html，显示输入用户名、密码

6、nextcloud连接collabora

启动collabora插件，设置中输入collabora地址http://192.168.33.145:9980

说明：nextcloud登录方式本身是http

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)


