| Windows命令        | Linux命令       | 意义              |
| ---------------- | ------------- | --------------- |
| cd e:\xxx        | cd /e/xxx     | 切换到xxx目录        |
| cd               | pwd           | 显示当前目录路径        |
| dir              | ls            | 列出当前目录内容        |
| copy nul xxx.txt | touch xxx.txt | 生成名为xxx.txt的空文件 |
| del xxx.txt      | rm xxx.txt    | 删除xxx.txt文件     |
| md xxx           | mkdir xxx     | 建立xxx目录         |
| rd /s xxx        | rm -r xxx     | 删除xxx目录         |

*gitbash 常用命令*

*  **git rm --cached "文件路径"**，不删除物理文件，仅将该文件从缓存中删除；


* 上传本地项目

  * git init（进入项目根目录）

  * git add .

  * git commit -m "注释语句"

  * git remote add origin https

  * git pull origin master

  * git push -u origin master

     