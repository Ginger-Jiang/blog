## Vue.js 是什么

一套用于构建用户界面的**渐进式框架**。

- 作者大大：[尤雨溪](https://baike.baidu.com/item/尤雨溪/2281470?fr=aladdin)
- Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的渐进式框架。
- Vue 只关注视图层， 采用自底向上增量开发的设计。
- Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。

### MVC&MVVM

#### MVC

- MVC：模型(model) —视图(view) —控制器(controller)

#### MVVM

- MVVM：模型(model) —视图(view) —视图模型(ViewModel)

### 起步

```html
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

### 声明式渲染

Vue.js 允许用一个简洁的模板语法来声明式的将数据渲染进 DOM 的系统

```html
<div id="app">
  {{ message }}
</div>
```

```js
var app = new Vue({
  el: "#app",
  data： {
	  message： "Hello Vue"
	}
})
```

### 条件与循环

```html
<div id="app">
  <p v-if="seen">
    我是一个被 Vue 控制的元素
  </p>
  <ul>
    <li v-for="item in todos">
      {{ item.text }}
    </li>
  </ul>
</div>
```

```js
var app = new Vue({
  el: 'app',
  data: {
    seen: true,
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '学习 CSS' }
    ]
  }
})
```
