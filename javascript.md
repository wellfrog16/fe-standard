# Javascript规范

优秀的项目源码，即使是多人开发，看代码也如出一人之手。统一的编码规范，可使代码更易于阅读，易于理解，易于维护。尽量按照 ESLint 格式要求编写代码  

vue文件中javascript相关规范，查看 [Vue - javascript](/vue?id=javascript-script)  

项目中一般采用Eslint校验，相关规则可以查阅 [Eslint](https://cn.eslint.org/docs/rules/)

## 命名规范

### 普通变量命名

驼峰命名法

```javascript
const title = '新闻中心';
let newsVisible = true;
```

### 常量命名

使用大写字母和下划线来组合命名，下划线用以分割单词。

```javascript
const MAX_COUNT = 10;
const UPLOAD_NAME = 'image';
```

## 源码风格

使用 ES6 风格编码

* 静态字符串一律使用单引号，动态字符串使用反引号

```javascript
// bad
const a = 'foobar'
const b = 'foo' + a + 'bar'

// good
const a = 'foobar'
const b = `foo${a}bar`
```

### 解构

* 数组使用解构赋值

```javascript
const arr = [1, 2, 3, 4]

// bad
const first = arr[0]
const second = arr[1]

// good
const [first, second] = arr
```

* 函数的参数如果是对象的成员，优先使用解构赋值

```javascript
// bad
function getFullName(user) {
    const firstName = user.firstName
    const lastName = user.lastName
}

// good
function getFullName(obj) {
    const { firstName, lastName } = obj
}

// best
function getFullName({ firstName, lastName }) {}
```

### 复制

```javascript
const items = [1, 2, 3, 4, 5]

// bad
const itemsCopy = items

// good
const itemsCopy = [...items]
```

### 箭头函数

```javascript
// bad
const self = this;
const boundMethod = function(param) {
    method(param);
}

// best
const boundMethod = param => method(param);
```

### 模块

* 如果模块只有一个输出值，就使用 export default，如果模块有多个输出值，就使用 export，避免export default 与普通的 export 不要同时使用

```javascript
// bad
import * as myObject from './importModule'

// good
import myObject from './importModule'
```

* 如果模块默认输出一个函数，函数名的首字母应该小写

```javascript
function makeStyleGuide() {}

export default makeStyleGuide;
```

* 如果模块默认输出一个对象，对象名的首字母应该大写

```javascript
const StyleGuide = {
    method() {
    },
    function() {

    },
};
 
export default StyleGuide;
```

## 注释风格

* 单行注释使用 //
* 注释块必须以 /**（至少两个星号）开头**/

```javascript
/**
 * 隐藏手机号当中四位
 *
 * @param {String|Number} num 手机号码
 * @return {String} 隐藏当中四位的手机号
 */
function secretPhoneNum(num) {
    if (!num) { return ''; }
    const val = num.toString();
    if (!num || val.length !== 11) { return ''; }
    return `${val.substr(0, 3)}****${val.substr(7)}`;
}
```