# hugo




---启动服务

hugo server  --buildDrafts



---上传到github

hugo --theme=jane --baseUrl="mabaoshan.top"



hugo  --baseUrl="mabaoshan.top"









### 模板（Archetypes）

模板（[Archetypes](https://links.jianshu.com/go?to=https%3A%2F%2Fgohugo.io%2Fcontent-management%2Farchetypes%2F)）是指放在`archetypes`文件夹里的文件，里面可以预定义一些元信息，也可以提前写好一些内容生成逻辑，或其他什么内容。当执行`hugo new`命令来生成内容文件的时候，就会调用对应内容类型的模板文件来帮你自动生成一些内容。
 假如以`posts`作为内容类型，生成`posts`文件时模板的查找路径依次是：

1. `archetypes/posts.md`
2. `archetypes/default.md`
3. `themes/my-theme/archetypes/posts.md`
4. `themes/my-theme/archetypes/default.md`
   

### 分类体系（Taxonomies）

分类体系（[Taxonomies](https://links.jianshu.com/go?to=https%3A%2F%2Fgohugo.io%2Fcontent-management%2Ftaxonomies%2F)）表示作者对内容的一套或多套分类。比如标签（`tags`）、类目（`categories`）、归档（`archives`）等。分类体系需在项目根路径下配置文件中定义，例如在`config.toml`文件中加入：









我们在`hugo-cxy-theme`文件夹里的`archetypes`里创建`post.md`

```bash
---
title:       "{{ with slicestr .Name 10 }}{{replace . "-" " "  | strings.TrimLeft " " | title }}{{end}}"
subtitle:    ""
description: ""
date:        {{ slicestr .Name 0 10 }}
author:      ""
image:       ""
tags:        ["tag1", "tag2"]
categories:  ["Tech"]
archives:    "{{ slicestr .Name 0 4 }}"
---
```









## 设置导航菜单的位置

在根目录下的 config.toml 文件中配置导航菜单, config 文件支持三种文件格式: toml, yaml, json, 可以使用自己熟悉的格式. 使用对应的格式需要修改对应的扩展名. 不推荐使用 JSON 格式, 因为 json 不支持注释, 在配置文件中添加注释是非常有必要的.

通过.Site.Menus 变量获取到设置的菜单信息, 下面以 toml 格式为例展示导航菜单的使用.

## 添加主导航菜单和页脚导航菜单

```toml
# 主导航菜单
name="首页"
url="/"
weight="1"
[[menu.main]]
name="博文"
url="/post"
weight="2"
[[menu.main]]
name="新闻"
url="/news"
weight="3"
[[menu.main]]
name="关于"
url="/about"
weight="4"

# 页脚导航菜单
[[menu.foot]]
name="网站首页"
url="/"
weight="4"
[[menu.foot]]
name="博文集合"
url="/post"
weight="3"
[[menu.foot]]
name="新闻列表"
url="/news"
weight="2"
[[menu.foot]]
name="关于我们"
url="/about"
weight="1"
```



获取菜单的代码如下”

```html
<h2>主导航菜单</h2>
<ul>
  {{ range .Site.Menus.main }}
  <li><a href="{{.URL}}">{{.Name}}</a></li>
  {{ end }}
</ul>

<h2>页脚导航菜单</h2>
<ul>
  {{ range .Site.Menus.foot }}
  <li><a href="{{.URL}}">{{.Name}}</a></li>
  {{ end }}
</ul>
```


`.Site.Menus`后面接的是在 config.toml 中定义的表名

## 定义多级菜单



```toml
[[menu.main]]
name="首页"
url="/"
weight="1"
[[menu.main]]
name="博文"
url="/post"
weight="2"
[[menu.main]]
name="新闻"
url="/news"
weight="3"
[[menu.main]]
name="关于"
url="/about"
weight="4"
[[menu.main]]
name="子菜单"
weight="5"
[[menu.main]]
parent="子菜单"
name="子菜单1"
weight="2"
[[menu.main]]
parent="子菜单"
name="子菜单2"
```

获取菜单的代码如下:

```html
<h2>主导航菜单</h2>

<ul>
  {{ range .Site.Menus.main }} 
  {{if .HasChildren}}
  <li>{{.Name}}</li>
  <ul>
    {{ range .Children }}
    <li>
      <a href="{{ .URL }}">{{ .Name }}</a>
    </li>
    {{ end }}
  </ul>
  {{ else }}
  <li><a href="{{.URL}}">{{.Name}}</a></li>
  {{end}} {{ end }}
</ul>
```





子菜单项比普通的菜单项多了一个属性`parent`, 用于设置父菜单的ID, 这里用的是Name的值, 如果name的值不重复, 一旦重复就会产生意想不到的效果. 正确的做法是使用Identifier的值.

## 导航菜单常用的属性

- `.Name`: 菜单想的名称, 如果Name的值重复了, 要想使其生效, 需要为其设置Identifier属性
- `.Identifier`: 菜单想的唯一标识, 值不能重复.
- `.Weight`: 用于设置菜单项的排序, 值越小排名越靠前.
- `.Parent`: 设置父菜单的ID.
- `.URL`: 设置菜单项直向的URL地址.

## 当行菜单常用的方法

- `.HasChildren`: 判断是否包含子菜单. 如果有子菜单则返回true



# hugo 评论

参考网站

https://shen.bioinit.com/topic/life/2019-12-24-fl1z7t/



# 一键部署

## 用bit 方式

在hugo目录中新建一个文件夹命名为deploy.sh，文件内容如下

\# hugo生成

hugo --buildDrafts

\# cd到构建输出的目录下

cd public

\# 初始化仓库

git init

\# 添加

git add -A

\# 提交

git commit -m deploy

\# 强制推送到coding仓库的 master 分支

git push -f 

\# 结束

cd -





## window bat方式

@ echo on

cd  /d d:/hugo/puma
hugo --buildDrafts
::不用添加上传主题和网站
::hugo --theme=jane --baseUrl="mabaoshan.top"
cd public
git add .
git commit -m "a"

::git remote rm origin
::添加上传的网站
::git remote add origin https://github.com/baoshan2020/baoshan2020.github.io.git

:: error: failed to push some refs to 'https://github.com/baoshan2020/baoshan2020.github.io.git'
:: 出现此错误，添加-f 强制上传

::git pull origin master    下载到本地库

::git push -u origin master -f  第一次推送了，后续就不需要 直接 git push

git push
