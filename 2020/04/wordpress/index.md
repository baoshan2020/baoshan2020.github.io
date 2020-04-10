# wordpress




# wordpress 升级5.4报错

因为我们不能复制一些文件，升级未被安装。这通常是因为存在不一致的文件权限。: xmlrpc.php, wp-load.php, wp-comments-post.php, index.php, wp-trackback.php, wp-activate.php, wp-settings.php, wp-mail.php, wp-blog-header.php, wp-signup.php, wp-links-opml.php

解决方法：在wordpress目录下执行

chmod -R 777 xmlrpc.php
chmod -R 777 wp-load.php
chmod -R 777  wp-comments-post.php
chmod -R 777 index.php
chmod -R 777 xmlrpc.php
chmod -R 777 wp-trackback.php
chmod -R 777 wp-activate.php
chmod -R 777 wp-settings.php
chmod -R 777 wp-mail.php
chmod -R 777 wp-blog-header.php
chmod -R 777 wp-signup.php
chmod -R 777 wp-links-opml.php
