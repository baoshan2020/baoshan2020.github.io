# 自定义hugo主题--导航菜单




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
