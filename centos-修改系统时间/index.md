# centso系统鞥个系统时间




参考地址https://blog.csdn.net/qq_18844977/article/details/93652801

# 修改centos系统时间

1、查看当前的系统时间：

[root@bogon vagrant]# date
Tue Jun 25 12:12:23 UTC 2019 

3、修改时间

>  [root@bogon vagrant]# date -s "2019-06-25 20:13:00"
> Tue Jun 25 20:13:00 UTC 2019

4、修改时区

>  [root@bogon vagrant]# timedatectl set-timezone Asia/Shanghai

5、 查看硬件时间

> [root@bogon vagrant]# hwclock --show
> Tue 25 Jun 2019 08:13:56 PM CST  -0.891529 seconds

6、 同步系统时间和硬件时间

> [root@bogon vagrant]# hwclock --hctosys

7、 本地时间写入硬件时间

> [root@bogon vagrant]# timedatectl set-local-rtc 1
> [root@bogon vagrant]# date
> Tue Jun 25 20:14:35 CST 2019
