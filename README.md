#TypeScipt学习笔记

首先需要安装ts环境,运行下面的语句
    
    npm install -g typescript
    
1、编辑器环境配置,如果在WebStorm中开发,可以打开Setting -> Tools -> File Watchers -> Add,添加一个TypeScript Watcher(配置完见后面的图1),然后每次新建一个TypeScript文件的时候,都会提示是否启用file watcher;在Sublime中也可以通过安装插件的方式来编译写好的ts文件。

2、也可以在TypeScript用命令行切换到该目录下,比如当前目录下有个名为hello.ts的文件,就可以运行

    tsc hello.ts
    
来编译该文件,在相同目录下输出hello.js和hello.js.map两个文件

![WebStorm TypeScript编译器配置](https://github.com/rwson/TypeScript/config.png)

