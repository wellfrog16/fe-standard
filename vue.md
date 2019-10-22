# Vue规范

## Html - template

* v-for 循环必须加上 key 属性，在整个 for 循环中 key 需要唯一
* 避免 v-if 和 v-for 同时用在一个元素上。将 v-if 移动到外层容器上，或者通过计算属性先得到结果再使用v-for
* 避免在template书写过多的逻辑计算，请将其移动到计算属性中

```html
// bad
<div v-show="list.length > 0 && dialagVisible && active === 'news'">
    <ul>
        <li>数据1<li>
        <li>...<li>
        <li>数据2<li>
    <ul>
</div>

// good
<template>
    <div v-show="dataShow">
        <ul>
            <li>数据1<li>
            <li>...<li>
            <li>数据2<li>
        <ul>
    </div>
</template>

<script>
computed: {
    dataShow() {
        return list.length > 0 && dialagVisible && active === 'news';
    },
}
</script>
```

* 指令一律采用缩写形式

```html
// bad
v-bind:class="{'show-left'：true}"
v-on:click="getListData"

// good
:class="{'show-left'：true}"
@click="getListData"
```


## Javascript - script

### 代码结构

```javascript
- components
- props
- data
- computed
- watch
- created
- mounted
- metods
- filter
```

### Props 规范

```javascript
// bad 
props: ['status']
 
// good
props: {
    status: {
        type: String,
        required: true,
        validator: function (value) {
            return [
                'running',
                'finished',
                'ready',
                'cancel'
            ].includes(value);
        }
    }
}
```

### computed 规范

* 驼峰式命名，统一使用名词形式

### methods, filters 规范

* 驼峰式命名，统一使用动词或者动词+名词形式
* 尽量使用常用单词开头（set、get、has、is）

## Css - style

参考 [CSS规范](/css)

## 组件规范

官方文档推荐及使用遵循规则：

> PascalCase (单词首字母大写命名)是最通用的声明约定
>
> kebab-case (短横线分隔命名) 是最通用的使用约定
>
> * 组件名应该始终是多个单词的，根组件 App 除外
> * 有意义的名词、简短、具有可读性
> * 命名遵循 PascalCase 约定
>   * 公用组件以 Abcd (公司名缩写简称) 开头，如（AbcdDatePicker,AbcdTable）
>   * 页面内部组件以组件模块名简写为开头，Item 为结尾，如（StaffBenchToChargeItem，StaffBenchAppNotArrItem）
> * 使用遵循 kebab-case 约定
>   * 在页面中使用组件需要前后闭合，并以短线分隔，如（<abcd-date-picker></abcd-date-picker>，<abcd-table></abcd-table>）导入及注册组件时，遵循 PascalCase 约定
> * 同时还需要注意：必须符合自定义元素规范: 切勿使用保留字。