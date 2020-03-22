d:
cd  hugo
cd puma
hugo --buildDrafts
hugo --theme=jane --baseUrl="mabaoshan.top"
cd public
git add .
git commit -m "autoupdate"

git remote rm origin

git remote add origin https://github.com/baoshan2020/baoshan2020.github.io.git
git push -u origin master