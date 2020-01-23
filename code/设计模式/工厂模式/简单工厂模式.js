// 构造器 ----> 抽象每个对象的变与不变

/**
 * 你正在开发一个学生管理系统, 开发时只有自己, 于是创建自己的用户信息:
 */
const zhangsan = {
  name: '张三',
  age: 22,
  gender: 0
}


/**
 * 过了两天, 你的同事过来说让你加上他的用户信息, 他要使用用户信息, 于是你:
 */

const zhangsan2 = {
  name: '张三',
  age: 22,
  gender: 1
}
const lisi = {
  name: '李四',
  age: 20,
  gender: 1
}


/**
 * 过了两个星期,产品经理跟你说, 我这里有一点点(1000 个)测试数据, 你给我录入下, 于是你写了个构造函数(构造器)
 */
function Students (name, age, gender) {
  this.name = name
  this.age = age
  this.gender = genger
}
// ... 此处省略读取数据, 遍历调用构造器
// const student = new Students(name, age, gender)
// console.log('student', student);


// 工厂模式 ----> 抽象不同构造器之间的变与不变

function Student (name, age, gender, identity, duties) {
  this.name = name
  this.age = age
  this.gender = gender
  this.identity = identity
  this.duties = duties
}
function Factory (name, age, gender, identity) {
  let duties
  switch (identity) {
    case 'student':
      duties = ['学习', '做作业']
      break
    case 'cadre':
      duties = ['组织活动', '点名']
    default:
      break
  }
  return new Student(name, age, gender, identity, duties)
}
console.log('111', Factory(1, 2, 3, 'student'));
console.log('111', Factory(4, 5, 6, 'cadre'));



