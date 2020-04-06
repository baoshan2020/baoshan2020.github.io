# nextcloud


# https 域名过期了处理方式

- - - nextcloud.enable-https lets-encrypt
    - 并按照接下来的提示，输入解析到本机ip的域名和你的邮箱，即可完成ssl的申请并将证书安装到nextcloud。

直接访问域名

$ sudo nextcloud.occ config:system:set overwritehost --value="example.com:81"

# vm下载

https://www.hanssonit.se/nextcloud-vm/
