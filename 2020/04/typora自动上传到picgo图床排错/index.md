# Typora自动上传到picgo图床&排错



Typora自动上传到picgo图床&排错
==============================

安装
----

Typora和picgo

配置
----

配置picgo
---------

![1586486018(https://raw.githubusercontent.com/baoshan2021/tc/master/img20200410103441.png)](C:\Users\puma\Desktop\新建文件夹\media\1586486018(1).png)
----------------------------------------

配置typora

1.  设置插入图片时为【上传图片】

2.  勾选【对本地位置的图片应用上述规则】

3.  在上传服务中选择“PicGo(app)”

4.  在路径中选择picgo安装目录**PicGo.exe**

![](https://raw.githubusercontent.com/baoshan2021/tc/master/img20200410103442.png)

点击下面的验证图片上传选项，上传成功！

上传的方法也很简单，将图片复制进去typora就会自动帮你上传了，你也可以右键点击上传图片。

自动上传 可以在【格式】-\>【图像】-\>【上传所有图片】

3.错误排查
----------

### 3.1错误一：Failed to fetch

![](https://raw.githubusercontent.com/baoshan2021/tc/master/img20200410103443.png)

这个错误一般是由**端口设置错误**造成的，至于我为什么知道，你看看log文件就懂了。打开picgo的log文件

![](https://raw.githubusercontent.com/baoshan2021/tc/master/img20200410103444.png)

错误提示是端口繁忙。

解决方法：打开picgo设置，点击设置Server选项，**将端口改为36677端口**，这是picgo推荐的默认端口号，然后保存，成功。

![](https://raw.githubusercontent.com/baoshan2021/tc/master/img20200410103445.png)

不过有的时候，我们的老朋友Failed to
fetch还是如约而至，打开端口设置一看，怎么变成了366771？？？？

问题在于端口冲突，如果你打开了多个picgo程序，就会端口冲突，**picgo自动帮你把36677端口改为366771端口**，导致错误。log文件里也写得很清楚。

![](https://raw.githubusercontent.com/baoshan2021/tc/master/img20200410103446.png)

解决方法：**先把picgo中的端口设置改回36677，然后退出所有picgo程序**，再使用typora上传功能（会自动启动picgo程序）

### 3.2错误二：{"success",false}

![](https://raw.githubusercontent.com/baoshan2021/tc/master/img20200410103447.png)

这个错误相信也有很多小伙伴遇到了，原因是**文件名冲突**了，如果你上传过一张image1.jpg的图片，再上传名称一样的图片就会失败，康康log文件(感谢日志！)里也写到了。

![](https://raw.githubusercontent.com/baoshan2021/tc/master/img20200410103448.png)

办法也很简单，打开picgo设置，将**【时间戳重命名】打开**。如图所示：

![](https://raw.githubusercontent.com/baoshan2021/tc/master/img20200410103449.png)

再次上传文件，上传成功\~

![](https://raw.githubusercontent.com/baoshan2021/tc/master/img20200410103450.png)

**授人以鱼不如授人以渔**，上面的三种情况解决方法教给大家了，但是错误总是千奇百怪层出不穷的，如果下次出现上传错误的提示，请大家找到picgo的log文件，自己查看问题的原因嗷

![](https://raw.githubusercontent.com/baoshan2021/tc/master/img20200410103451.png)

