# zabbix 5.0.2




### 1.官方网站

https://www.zabbix.com/cn

2. ### iso 系统  centos 8.0
3. ### 系统默认登录账号和密码： root :zabbix：网页默认登录名： Admin:zabbix（切记Admin ，A是大写）

3. ### 安装查看ipconfig  yum -y install net-tools。（查看ip地址登录）

4. ### 开启 sshd 登录 systemctl enable sshd

5. ### 安装中文输入法

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



### 7.windows 客户端

https://www.jianshu.com/p/c300863ba7ad



### 8.监控snmp 设备

https://www.cnblogs.com/struggle-1216/p/12361210.html

### 9.vm添加监控 

https://www.cnblogs.com/FengGeBlog/p/12515835.html

### 10.centos 安装 客户端



1.关闭防火墙和 selinux 并重启


[root@zabbix ~]# sed -i 's/SELINUX=enforcing/SELINUX=disabled/' /etc/selinux/config
[root@zabbix ~]# systemctl disable --now firewalld
[root@zabbix ~]# reboot

2. 安装 zabbix rpm 源

[root@zabbix ~]# rpm -Uvh https://mirrors.aliyun.com/zabbix/zabbix/5.0/rhel/7/x86_64/zabbix-release-5.0-1.el7.noarch.rpm
[root@zabbix ~]# sed -i  's#http://repo.zabbix.com#https://mirrors.aliyun.com/zabbix#'  /etc/yum.repos.d/zabbix.repo		#鉴于国内网络情况，使用阿里云 zabbix 源
[root@zabbix ~]# yum clean all

或者 安装：
 yum -y install  zabbix-agent

3、修改配置文件（等号后内容自行更改）

vi /etc/zabbix/zabbix_agentd.conf
 Server=127.0.0.1 #zabbix server的ip地址或主机名，可同时列出多个，需要用逗号隔开
 ServerActive=127.0.0.1 #开启主动检查
 Hostname=Zabbix server  #在zabbix server前端配置时指定的主机名要相同，最重要的配置

4、启动服务
 systemctl startzabbix-agent
 systemctl enable zabbix-agent
