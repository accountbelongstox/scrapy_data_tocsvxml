rem git config --global user.email "accountbelongstox@163.com"
rem git config --global user.name "accountbelongstox"

rem git remote add gitee git@gitee.com:accountbelongstox/b2bwork.baidu.git
git branch -M "master"
git add .
git commit -m "new amend"
git push -u gitee master

rem git remote add github git@github.com:accountbelongstox/scrapy_data_tocsvxml.git
git branch -M 'main'
git add .
git commit -m "new amend"
git push -u github main