@ echo on
d:
cd  hugo
cd puma
hugo --buildDrafts
::不用添加上传主题和网站
::hugo --theme=jane --baseUrl="mabaoshan.top"
cd public
git add .
git commit -m "autoupdate"

::git remote rm origin
::添加上传的网站
::git remote add origin https://github.com/baoshan2020/baoshan2020.github.io.git
git push -u origin master