# zabbix 5.0.2




# 1.安装

## 1.1官方网站

https://www.zabbix.com/cn

## 1.2 iso 系统  centos 8.0

### 1.2.1系统默认登录账号和密码： root :zabbix：网页默认登录名： Admin:zabbix（切记Admin ，A是大写）

### 1.2.2安装查看ipconfig  yum -y install net-tools。（查看ip地址登录）

### 1.2.3开启 sshd 登录 systemctl enable sshd

### 1.2.4安装中文输入法

错误提示 You are not able to choose some of the languages, because locales for them are not installed on the web server.

dnf install langpacks-zh_CN.noarch

dnf install glibc-common

测试安装是否成功？

```
[root@blog dejavu]# locale -a | grep zh_CN
zh_CN
zh_CN.gb18030
zh_CN.gbk
zh_CN.utf8
```



### 1.2 客户端看着

### 1.2.1windows 客户端

https://www.jianshu.com/p/c300863ba7ad

### 1.2.2centos 安装 客户端

#### 1.2.2.1安装 zabbix rpm 源

[root@zabbix ~]# rpm -Uvh https://mirrors.aliyun.com/zabbix/zabbix/5.0/rhel/7/x86_64/zabbix-release-5.0-1.el7.noarch.rpm
[root@zabbix ~]# sed -i  's#http://repo.zabbix.com#https://mirrors.aliyun.com/zabbix#'  /etc/yum.repos.d/zabbix.repo		#鉴于国内网络情况，使用阿里云 zabbix 源
[root@zabbix ~]# yum clean all

或者 安装：
 yum -y install  zabbix-agent

#### 1.2.2.2、修改配置文件（等号后内容自行更改）

vi /etc/zabbix/zabbix_agentd.conf
 Server=127.0.0.1 #zabbix server的ip地址或主机名，可同时列出多个，需要用逗号隔开
 ServerActive=127.0.0.1 #开启主动检查
 Hostname=Zabbix server  #在zabbix server前端配置时指定的主机名要相同，最重要的配置

#### 1.2.2.3、启动服务

 systemctl startzabbix-agent
 systemctl enable zabbix-agent

## 1.3添加监控

### 1.3.1监控snmp 设备

https://www.cnblogs.com/struggle-1216/p/12361210.html

### 1.3.2vm添加监控 

https://www.cnblogs.com/FengGeBlog/p/12515835.html





# 2.错误解决



## 2.1Get value from agent failed: cannot connect to [[192.168.10.240]:10050]: [111] Connection refused

### 2.1.1端口不通

测试是否可以ping通

### 2.1.2 查看进程

查看方法：ps -ef | grep zabbix 看是否有zabbix-agent的进程。

### 2.1.3 查看端口是否开启

登陆agent端，执行语句  telnet 10.10.10.40 10051 查看端口是否开启
登陆server端，执行语句 telnet 10.20.30.40 10050 查看端口是否开启

### 2.1.4开启端口

https://blog.csdn.net/weixin_38652136/article/details/80484637

2.1.4.1开启防火墙 
    systemctl start firewalld

2.1.4.2开放指定端口
      firewall-cmd --zone=public --add-port=10050/tcp --permanent
 命令含义：
--zone #作用域
--add-port=80/tcp  #添加端口，格式为：端口/通讯协议
--permanent  #永久生效，没有此参数重启后失效

#### 2.1.4.3重启防火墙

​      firewall-cmd --reload

#### 2.1.4.4查看端口号

netstat -ntulp |grep 80   //查看所有80端口使用情况


