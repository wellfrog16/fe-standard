# HTML规范

这里的Html指的是`纯粹的Html文件`，Vue文件的template对应的Html规范，查看 [Vue - template](/vue?id=html-template)


## 引用资源

非npm安装的资源可以写在这里，减少打包文件大小，也可引用cdn资源

* 资源文件放在`head`标签里
* 每组资源之间保持一个空行，相关资源放在一组
* 每组资源写明注释

```html
<!-- css reset -->
<link href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1" rel="stylesheet">

<!-- nprogress -->
<link href="https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/nprogress@0.2.0"></script>
```

## 全局配置

全局配置的变量信息写在`head`标签的最后，在引用资源的下面

```html
<head>
    ...
    <!-- 各种资源加载 -->
    ...

    <script>
        window.g = {
            server: {
                api: 'api/server/url',
                image: 'image/server/url',
            },
        };
    </script>
</head>
```

## favicon

配置`favicon.ico`图标

```html
<link rel="icon" href="link/to/path/favicon.ico">
```