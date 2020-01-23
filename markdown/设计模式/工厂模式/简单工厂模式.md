- 构造器模式
- 简单工厂模式

## 构造器模式-抽象每个对象的变与不变

你正在开发一个学生管理系统, 开发时只有自己, 于是创建自己的用户信息:

```JavaScript
// 字面量
const zhangsan = {
  name: '张三',
  age: 22,
  gender: 0
}
```

过了两天, 你的同事过来说让你加上他的用户信息, 他要使用用户信息, 于是你:

```JavaScript
// 字面量
const zhangsan = {
  name: '张三',
  age: 22,
  gender: 1
}
const lisi = {
  name: '李四',
  age: 20,
  gender: 1
}
```

过了两个星期,产品经理跟你说, 我这里有一点点(1000 个)测试数据, 你给我录入下, 于是你写了个构造函数(构造器)

```JavaScript
// 构造器
function Students(name, age, gender) {
  this.name = name
  this.age = age
  this.gender = genger
}
// ... 此处省略读取数据, 遍历调用构造器
const student = new Students(name, age, gender)
```

### 思考 变与不变

不变的是每个学生都有姓名、年龄、性别三个属性,这叫**共性**  
变化的是三个属性的值,这叫**个性**

> 案例中构造器在整个过程中就是抽象了学生这个对象, 将赋值的过程进行了封装, 确定不变的部分, 使每个学生对象都有自己的姓名、年龄、性别三个属性, 在确保不变的同时, 将变化的三个属性的值进行开放, 由用户自己传入, 保证了个性的灵活度

## 工厂模式-抽象不同构造器之间的变与不变

第一期交付后一个月, 学校方面打来电话, 表示要对学生中的班干部进行区分, 备注班干部职责, 于是你加了一个班干部的构造器用来生成班干部的信息,

```JavaScript
function Students(name, age, gender) {
  // 普通学生
  this.name = name
  this.age = age
  this.gender = genger
  this.identity = 'student'
  this.duties = ['学习']
}

function Cadres(name, age, gender) {
  // 班干部
  this.name = name
  this.age = age
  this.gender = genger
  this.identity = 'cadre'
  this.duties = ['点名','出黑板报']
}
```

这时候, 你发现又出现了 **变数** identity, 你还需要一个方法来判断调用哪一个构造器

```JavaScript
function Factory(name, age, gender, identity) {
  switch(identity) {
    case 'student':
      return new Students(name, age, gender)
      break
    case 'cadre':
      return new Cadres(name, age, gender)
      break
    // 此处省略无数个班干部
    default:
      break
  }
}
```

写完后, 你发现每类班干部职责实在太多了, 难道要写几十个构造器么

### 重新思考 变与不变

在我们的学生与班干部两个构造器中, 都拥有不变的姓名、年龄、性别三个共性, 变化是的身份与职责, 由此可以看出我们的问题, 共性封装不够、共性与个性分离不彻底, 于是我们重新封装下:

```JavaScript
function Student(name, age, gender, identity, duties) {
  this.name = name
  this.age = age
  this.gender = gender
  this.identity = identity
  this.duties = duties
}
function Factory(name, age, gender, identity) {
  let duties
  switch(identity){
    case 'student':
      duties = ['学习','做作业']
      break
    case 'cadre':
      duties = ['组织活动','点名']
    default:
      break
  }
  return new Student(name, age, gender, identity, duties)
}
```

    工厂模式就是对创建对象的过程进行封装, 我们不需要在关心封装内做的事情,只需要拿到工厂交付给我们的结果即可.
