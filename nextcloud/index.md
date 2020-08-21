# nextcloud


# https 域名过期了处理方式

- - - nextcloud.enable-https lets-encrypt
    - 并按照接下来的提示，输入解析到本机ip的域名和你的邮箱，即可完成ssl的申请并将证书安装到nextcloud。

直接访问域名

$ sudo nextcloud.occ config:system:set overwritehost --value="example.com:81"

# vm下载

https://www.hanssonit.se/nextcloud-vm/





错误:Run pre-refresh hook of "nextcloud" snap if present 



首先查看一下正在进行的change

snap change

查询最近做的操作

$ snap changes





# 关于snap更多信息，查看man手册：

$ man snap

# snap 版本

版本规定

stable，稳定版；

candidate，正式候选版；

beta，测试版；

edge，可能不稳定的尝鲜版。

查看软件版本

sudo snap info  nextcloud

切换标准版

 sudo snap refresh --channel=latest/stable nextcloud

切换最新测试版

sudo snap refresh --channel=18/edge nextcloud

sudo apt-get install snapcraft  安装此应用打开下载速度会快

https://uappexplorer.com/snaps    软件下载查询

什么是snap，snap是一种全新的软件包管理方式，它类似一个容器拥有一个应用程序所有的文件和库，各个应用程序之间完全独立。所以使用snap包的好处就是它解决了应用程序之间的依赖问题，使应用程序之间更容易管理。但是由此带来的问题就是它占用更多的磁盘空间

Snap的安装包扩展名是.snap，类似于一个容器，它包含一个应用程序需要用到的所有文件和库（snap包包含一个私有的root文件系统，里面包含了依赖的软件包）。它们会被安装到单独的目录；各个应用程序之间相互隔离。使用snap有很多好处，首先它解决了软件包的依赖问题；其次，也使应用程序更容易管理。

现在支持snap的应用并不多，snap软件包一般安装在/snap目录下

**一些常用的命令**

其实使用snap包很简单，下面我来介绍一下一些常用的命令

sudo snap list

列出已经安装的snap包

sudo snap find <text to search>

搜索要安装的snap包

sudo snap install <snap name>

安装一个snap包

sudo snap refresh <snap name>

更新一个snap包，如果你后面不加包的名字的话那就是更新所有的snap包

sudo snap revert <snap name>

把一个包还原到以前安装的版本

sudo snap remove <snap name>

删除一个snap包

# github地址

https://github.com/nextcloud/nextcloud-snap





# 插件离线安装

本来呢，互联网可以直接在线安装，可我这时企业内部网，没有互联网连接，离线手动安装吧。

https://apps.nextcloud.com/apps/richdocuments

这里下载扩展APP。

解压后放进 /var/www/html/apps

离线更新snap  路径  /var/snap/nextcloud/22327/nextcloud/extra-apps/onlyoffice$





# 补充

1.数据库位置，使用Snap安装的Nextcloud，数据库文件在以下路径中/var/snap/nextcloud/xxxx(版本数字)/mysql，需要备份直接备份此文件夹即可。

2.数据位置，NextCloud存储文件夹在/var/snap/nextcloud/common/nextcloud/data，可以通过修改/var/snap/nextcloud/current/nextcloud/config/config.php的datadirectory对应的参数来改变位置，在数据迁移的时候直接复制此文件夹过去。







# 在线编辑onlyoffice的坑

NextCloud使用onlyoffice，Docker安装OnlyOffice Server 后，使用本地服务器异常

Error when trying to connect (Host violates local access rules)

参照：https://github.com/ONLYOFFICE/onlyoffice-nextcloud/issues/293

18以后的NextCloud版本有这个bug， 解决办法在config.php配置文件添加配置

'allow_local_remote_servers' => true,





