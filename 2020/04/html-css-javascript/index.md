# html css  javascript








<html>

  <!-- 超文本标记语言 -->

<!-- 跟标签 -->

<head>

  <!-- 设置浏览器的 -->

    <meta charset="utf-8">  

  <!-- 认识万国码 -->

  <title>11</title> 

  <!-- 页标题 -->

  <link rel="stylesheet" href="css.css">



</head>

<body>



第一、二课笔记





<!-- 给用户看到 -->

<p>段落标签</p>



<h1>1到6号标题 独占一行 </h1>

<strong>加粗</strong> 

<em>倾斜</em>

<div>

  独占一行 容器 功能1.分文别类，功能2 绑定化操作

</div>

<span> 容器不独占一行。 </span>



&lt;小于 &gt;大于 &nbsp;空格

<br> 换行

<hr>水平线



<!-- 有序列表 -->

<ol type="I" >

  <li>marvel</li>

  <li>速8</li>

  <li>返老还童</li>

  <li>了不起盖茨比</li>

</ol>

<!-- 有序列表 -->

<!-- 无序列列表 -->

<ul type="">

<li>苹果</li>

<li>栗子</li>

<li></li>



</ul>



<!-- 无序列列表 -->





<img src="" style="width: auto;" alt="显示不出来提示---图片占位" title=" 鼠标放上提示   图片提示">







<form method="get" action="">

<p>

 文本框 <input type="text" name="name" style="color:#999" value=“请输入关键字” onfocus="if(this.value=='请输入关键字'){this.value='';this.style.color='44242'}" onblur="if(this.value==''){this.value='请输入关键字';this.style.color='999'}" >

</p>

<p>password: <input type="password" name="pasword" 

  \>





</p>

<input type="submit" >



单选框<input type="radio" name="star" value="111">

单选框<input type="radio" name="star2" value="121">

单选框<input type="radio" name="star1" value="131">

</form>





# css

### 1.颜色的写法

red： #ff0000  或缩写 #f00  每2个16进制代表一个颜色

REG：reg（255,0,0）或者 reg（100%，0%，0%）

### 2.浏览器及内核

浏览器内核 谷歌、火狐、

​     shell 内核 

IE      trident

firefox    Gecko

google chrome webkit/blink(2014年开始)

safari     webkit

opera     presto

eage



<!-- 注释 --> ctrl+？ 快捷生成注释

注释作用：调试代码



html   css   javascript

结构   样式   行为







CSS （装修涂料） cascading style sheet 层叠样式表

 引入css 

方法1. 行间样式   <div style="" ></div>

方法2. 页面级css   在head标签里 里写<style type="text/css" > div{ } </style> 

方法3. 外部css文件  新建一个css文件，在head标签里写 <link rel="stylesheet" href="**.css">  快速建立方式 输入 link 按tab键

学校3种老师：自己不会，学术非常出色（表达能力不好），继会又能讲明白 



浏览器下载一行执行一行。 同时下载多个css文件，



同步： 下载一个在下载一个

异步： 同时下载多个文件





选择器 

1.id选择器 <div id="only"></div>   在css文件 #only { }

一一对应关系：一个元素只能对一个id值。 一个id值只能对一个元素。 roseonly （2012年新建的品牌-一个人一辈纸只能送一个人）

​                              darryring for系列

2.class 选择器   <div class="demo 第二个"></div>   .demo{}  .第二个{}

多对多关系

3.标签选择器  <div></div>       div{}  所有的div都生效

4.通配符选择器  <span> </span>     *{}



属性选择器    [id] { }



优先级: css文件的!important >行间样式> (id>class>标签选择器>通配符选择器) 并行 属性选择器



css 权重

!important  infinity

行间样式    1000

id       100

class|属性|伪类 10

标签|伪元素    1

通配符      0



进制  1 0 0 0

​      1 0

​      

 IE 7.0   256进制





<div>

div{



 text-align:right 对齐方式

 文字高度默认：16

 line-height:20px; 文字高度

 text-indent：2em 首行缩进

 }



单位： 绝对单位 相对单位

px 一个像素只能展示一个颜色

em 1em=1 font-size=16px



line-height：1.2 em 1.2 行号



<del> 是禁止使用的标签

用css 实现横线

span{ text-decoration:ling-throuth; 中划线

​    text-decoration: underline；下划线

​    color：reg（0,0,238； 蓝色

​    sursor：pointer（值 可以变成手；光标的定位置

 }





 伪类选择器：鼠标移动到后触

 a:hover [haver]

 {

}







标签分类

1.行间元素

feature ：内容决定元素所长位置

​     不可以通过css改变宽高



span strong en a del 



2.块级元素

feature:独占一行

​    可用css更改



div p ul li ol form address



3.行级块元素

feature： 内容决定大小

​     可用css更改大小





display：inline (可切换行间元素、块级元素)



凡是带有:inline的元素都有 文字特性



图片会有4像素的间距 解决方法1.在css margin-left：-6px；（不科学）

​             2.把img 中间的空格全部去除



压缩代码方式：1.img 会用一个字母来代替。 2.去空格去回车







先定义功能，在填充样式

（.green{backgroud-color:green;

  .gray{backgroud-color:gray;

.size1{width:100} .size2{width:200}

}



先引入一个别人的.css包。 自己在写一个主css文件





#### 盒子模型 （针对html的每一个元素）

盒子组成部门：盒子壁 border

​                          内边距：padding

​                          盒子内容：width+height 

![](http://q7sebe874.bkt.clouddn.com/20200414131120.png)

#### 层次模型

position 属性

absolute 1.脱离原来的位置进行定位

相对于最近的有定位的父级进行定位，如果没有相对于文章定位

relative    2.保留原来位置进行定位

相对自己原来的位置进行定位

absolute 当做机架，用relative 定位

fixed 3.以不变应万变

居中固定写法  position：absolute ;

​                         left:50%

​                        top:50%





# code 快速使用说明

快速写代码2：div.box tab建

div.wrapper>div.connter table 会生成多个div

div.circle$*5  快速创建5个

#### 其他

网站：https://www.bootcss.com/

https://www.w3school.com.cn/css/index.asp
