# html代码mailto命令详解(cc+bcc+主题+内容+包含回车问号空格)






大家知道，mailto是网页设计制作中的一个非常实用的html标签，许多拥有个人网页的朋友都喜欢在网站的醒目位置处写上自己的电子邮件地址，这+样网页浏览者一旦用鼠标单击一下由mailto组成的超级连接后，就能自动打开当前计算机系统中默认的电子邮件客户端软件，例如OutLook+Express以及Foxmail等。当然有关mailto标签的使用，并不仅仅就象上面所说的那样简单，它还有其他方面的应用。为了能帮助各位用户对+mailto标签有一个全面的认识，笔者在此就对mailto标签的使用做一个详细的总结，希望能与大家共享交流！

首先代码奉上，有码有真相对吧。

<HTML>
<HEAD>
<TITLE>mailto主题/CC/BCC/正文使用方法</TITLE>
</HEAD>
<BODY>

<A+HREF="mailto:miyaxxx@yahoo.com?subject=Hello%20World主题&cc=aaa_ss@yahoo.com&bcc=bbb_X@yahoo.com&body=内容第一行%0D%0A内容第二行
你也可以回车，但是不会成功。%0D%0A内容第三行">メール</A>

</BODY>
</HTML>


mailto代码中可以追加以下几个参数以实现想要的内容。


    suject是指出主题的位置。

    cc是指出抄送的mail地址。

    Bcc是秘密抄送mail地址。

    body位置指出mail的内容

    使用换行回车的话要加\n,<br/>,都是不好用的哦，这里要用专用的「%0D%0A」标记

    使用半角空格的时候，直接使用也是不好用的，要用「%20」代替。

    半角问号?使用「%3F」代替。
