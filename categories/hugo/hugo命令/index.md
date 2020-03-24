# hugo命令




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
