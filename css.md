# CSS规范

解决`样式污染和样式冲突`，推荐使用vue/react内置的 [Css Module](https://vue-loader.vuejs.org/zh/guide/css-modules.html) 解决  
不推荐使用scope的方式

## 命名规范

* 统一使用`"-"`连字符
* 尽量使用小写字符

```css
.news-title { ... }
```
* 禁止使用id作为样式名称

```css
// bad
#app { ... }

// good
.app { ... }
```
* 对于要`覆盖ui库`的样式，我们约定用`or-`开头的class，并对应`ui名`来避免污染

```css
// 覆盖一个element-ui的一个primary的button
.or-button-primary { ... }
```

## 样式约定

* 省略值为 0 时的单位

```css
// bad
padding-bottom: 0px;
margin: 0em;

// good
padding-bottom: 0;
margin: 0;
```
* 使用Less/Sass时，`避免使用嵌套`，如嵌套，深度不大于3层。
* 如没有兼容性要求，尽量采用 [flex布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

## 语义化标签

html提供许多语义化标签，尽量使用它们，减少class的使用
[html5标签](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list)

## 常用名称

### 布局
|语义|名称|语义|名称
|:-|:-|:-|:-
|主栏|main|侧栏|side
|包裹|wrapper|
|容器|container|容器|box

### 模块
|语义|名称|语义|名称
|:-|:-|:-|:-
|导航|nav|二级导航|subnav
|菜单|menu|二级菜单|submenu
|logo|logo|子logo|sublogo
|登录|login|登出|logout
|注册|register|密码|password
|标题|title|内容|content
|搜索|search|小提示|tips
|表单|form
|排行榜|top|热点|hot
|新闻|news|投票|vote
|选项卡|tab|面包屑|breadcrumb
|幻灯片|slide|列表|list
|下载|download|帮助|helpe
|横幅|banner|主视觉|kv
|版权信息|copyright|网站信息|siteinfo

### 状态
|语义|名称|语义|名称
|:-|:-|:-|:-
|选中|selected|激活|actived
|显示|show|隐藏|hide
|打开|open|关闭|close
|不可用|disabled|错误|error