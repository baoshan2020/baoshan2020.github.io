# 邮箱


# 网页登录

登录地址：mail.tusenergy.com 用户名：xingming@tusenergy.com  默认密码：Aa1122。

# 客户端登录



| 协议类型 | 服务器地址         | 默认端 | 加密端(SSL) |
| -------- | ------------------ | ------ | ----------- |
| POP      | pop.tusenergy.com  | 110    | 1995或995   |
| SMTP     | smtp.tusenergy.com | 25     | 465         |
| IMAP     | imap.tusenergy.com | 143    | 993         |

 

海外客户端配置地址（海外用户使用）:

| 协议类型     | 服务器地址    | 默认端 | 加密端(SSL) |
| ------------ | ------------- | ------ | ----------- |
| POP（海外）  | popw.263.net  | 110    | 1995或995   |
| SMTP（海外） | smtpw.263.net | 25     | 465         |
| IMAP（海外） | imapw.263.net | 143    | 993         |

https://www.263.net/263/helpcenter/client/20160603/970.html   (参考263配置)







# MX服务器配置地址;*(域名管理员使用):*



| 主机记录 | 记录类型 | 记录值                               | 优先级 |
| -------- | -------- | ------------------------------------ | ------ |
| @        | TXT      | v=spf1 include:spf.263xmail.com ~all |        |
| @        | MX       | mx.263.net.                          | 10     |
| @        | MX       | mxw.263.net.                         | 5      |
| mail     | CNAME    | mail.263.net                         |        |
| smtp     | CNAME    | smtp.263.net                         |        |
| imap     | CNAME    | imap.263.net                         |        |
| pop      | CNAME    | pop.263.net                          |        |
