function DeepClone (obj) {
  // 边界判断
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  // 初始化结果值
  let res = {}

  // 如果是数组
  if (obj.constructor === 'array') {
    res = []
  }

  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      // 如果值是对象 递归调用
      res[i] = DeepClone(obj[i])
    }
  }

  return res
}