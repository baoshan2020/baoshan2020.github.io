# 无线路由器组网






1.针对使用mesh组网的形式实现无线覆盖，虽然能解决无线漫游的问题，但是这样的方案对于单个AP的压力比较大，比如一个负责办公区的AP，它除了要承载原本接入终端的流量，还要承担传给下一个AP的流量，这样一来对那个AP的压力很大，稳定性也会受到影响。
2.使用NAC控制器管理AP，可以实现全办公环境的无线覆盖以及漫游，每个AP的压力可以得到平衡的分配。











那无线Mesh网络到底是啥呢？▼

Mesh网络是一种无线局域网类型，也就是网状结构网络，也称为“多跳（multi-hop）”网络。在Mesh网络中，所有的节点都互相连接，每个节点拥有多条连接通道，所有的节点之间形成一个整体的网络。



介绍

https://www.zhihu.com/question/330592258

https://xw.qq.com/cmsid/20200806A0W78000?ADTAG=baidutw





https://post.smzdm.com/p/a07nexg9/





# 华为路由器组网

3台以上的 HiLink 智联路由器，如何组网 

https://consumer.huawei.com/cn/support/content/zh-cn00772433/

HUAWEI HiLink 智联分为“无线智联”和“网线直连”两种方式，支持 HiLink 智联的路由器可以通过这两种方式组网。

## Wi-Fi 中继/HiLink 无线智联组网

路由器做主（母）路由，最多可以 Wi-Fi 中继/HiLink 无线智联5台副（子）路由。

**情况一：支持2级级联**

1. 将其中一台路由器作为唯一的主（母）路由器配置上网。

2. 将第2台路由器与主（母）路由 HiLink 智联。

3. 将第3台、第4台...路由器也分别与主（母）路由 HiLink 智联。

   ![img](https://consumer-tkbdownload.huawei.com/ctkbfm/servlet/download/downloadServlet/H4sIAAAAAAAAAD2PQW7DIBRE78I6iYDPN6ar4hAr3VRZpAegBidIKY5snKipevdCZFWazWieNDM_ZJ78ePy-evJCGFkRN9zjYiHbPlz8u_0qNnRDXMch-c10Oy3RwaZzjiSySggmauyFQHCq94ryHmqgrkKrMv0ZHm8uo3v9-jivu0iplFxA6ehGb1MY4jGUHoZK1QyQU1VVKzKFU7RpHssCmQMBtdHcUKaUYIaDbrcmVxrdtFkSVIGQYysblHKLlDJoMrmjpsy42UtwH_-X0zj757bl8l6T3z-wcfoZEwEAAA%3D%3D.svg)

   适用于荣耀路由WS831、华为路由WS832、华为路由Q1、华为路由A1、华为路由A1 Lite、荣耀路由Pro、荣耀路由Pro 游戏版、华为路由A1 畅享版、荣耀路由X1、荣耀路由X1 增强版、荣耀路由3、荣耀路由3 Z6、华为路由WS318 增强版，华为路由WS5200、华为路由AX3、华为路由WS7103、华为路由AX3 Pro。

**情况二：支持3级级联**

1. 将其中一台路由器作为唯一的主（母）路由器配置上网。

2. 先将第2台路由器 HiLink 连接第1台路由器，然后再分别将第3台、第4台...路由器 HiLink 连接第2台路由器。

   ![img](https://consumer-tkbdownload.huawei.com/ctkbfm/servlet/download/downloadServlet/H4sIAAAAAAAAAD2PQW7DIBRE78I6iYDPN6ar4hAr3VRZpAegBidIKY5snKipevdCZFWazWieNDM_ZJ78ePy-evJCGFkRN9zjYiHbPlz8u_0qNnRDXMch-c10Oy3RwaZzjiSySggmauyFQHCq94ryHmqgrkKrMv0ZHm8uo3v9-jivu0iplFxA6ehGb1MY4jGUHoZK1QyQU1VVKzKFU7RpHssCmQMBtdHcUKaUYIaDbrcmVxrdtFkSVIGQYysblHKLlDJoMrmjpsy42UtwH_-X0zj757bl8l6T3z-wcfoZEwEAAA%3D%3D.svg)

   适用于荣耀路由2、荣耀路由2S、荣耀分布式路由、荣耀路由Pro 2、荣耀路由X2、荣耀路由X2 增强版、荣耀路由CD18、荣耀路由CD29、荣耀猎人游戏路由、华为路由WS5100、华为路由WS5102、华为路由WS6500、华为路由WS5106、华为路由WS5108、华为路由WS5200 增强版、华为路由WS6500 千兆版、华为路由WS5200 四核版、华为路由Q2、华为路由Q2 Pro、华为路由Q2S、华为路由A2、华为路由TC5200、华为路由WS5200 增强版 NEW、华为路由WS6506、荣耀路由X3、荣耀路由X3 Pro。

## HiLink 有线智联组网（网线直连）

路由器做主（母）路由，有线智联副（子）路由数量没有明确限制，但推荐路由器总数不超过6台，推荐级联不超过3层。路由器组网数量超过6台或级联超过3层将无法保证正常使用。

1. 将其中一台路由器作为唯一的主（母）路由器配置上网。

2. 将第2台路由器有线连接主（母）路由。

3. 将第3台、第4台...路由器也分别有线连接主（母）路由，

   或者先将第2台路由器有线连接第1台路由器，然后再分别将第3台、第4台...路由器有线连接第2台路由器。

   ![img](https://consumer-tkbdownload.huawei.com/ctkbfm/servlet/download/downloadServlet/H4sIAAAAAAAAAD2PQW7DIBRE78I6iYDPN6ar4hAr3VRZpAegBidIKY5snKipevdCZFWazWieNDM_ZJ78ePy-evJCGFkRN9zjYiHbPlz8u_0qNnRDXMch-c10Oy3RwaZzjiSySggmauyFQHCq94ryHmqgrkKrMv0ZHm8uo3v9-jivu0iplFxA6ehGb1MY4jGUHoZK1QyQU1VVKzKFU7RpHssCmQMBtdHcUKaUYIaDbrcmVxrdtFkSVIGQYysblHKLlDJoMrmjpsy42UtwH_-X0zj757bl8l6T3z-wcfoZEwEAAA%3D%3D.svg)

   不同型号路由器的 LAN 接口数量不一样，当做主（母）路由时，最多可有线连接的副（子）路由数量不一样。如上有线组网方式仅供参考，具体请以实际为准。
