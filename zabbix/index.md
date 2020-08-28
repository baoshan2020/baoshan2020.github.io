# zabbix 5.0.2




1.官方网站

https://www.zabbix.com/cn

2. iso 系统  centos 8.0
3. 系统默认登录账号和密码： root :zabbix：网页默认登录名： Admin:zabbix（切记Admin ，A是大写）

3. 安装查看ipconfig  yum -y install net-tools。（查看ip地址登录）

4. 开启 sshd 登录 systemctl enable sshd

5. 安装中文输入法

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



7.windows 客户端

https://www.jianshu.com/p/c300863ba7ad



8.监控snmp 设备

https://www.cnblogs.com/struggle-1216/p/12361210.html

9.vm添加监控 

https://www.cnblogs.com/FengGeBlog/p/12515835.html
