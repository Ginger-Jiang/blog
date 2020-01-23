// 一个手机生产线
class PhoneFactory {
  // 抽象工厂-只对类抽象的对象基本组成进行约束
  createOs () {
    throw new Error('抽象工厂创建软件系统方法, 需要重写')
  }
  createHardware () {
    throw new Error('抽象工厂创建硬件方法, 需要重写')
  }
}


// 抽象出系统部分的抽象工厂
class OS {
  // 抽象手机系统工厂
  run () {
    throw new Error('抽象工厂, 不允许直接调用')
  }
}

// 具体运行系统工厂
class Ios extends OS {
  run () {
    console.log('用ios系统方式启动')
  }
}
class Android extends OS {
  run () {
    console.log('用安卓系统启动')
  }
}

// 抽象出硬件的抽象工厂
class Hardware {
  // 抽象硬件类
  operating () {
    throw new Error('抽象工厂方法, 不允许直接调用')
  }
}
class MI extends Hardware {
  // 具体工厂
  operating () {
    console.log('使用小米硬件')
  }
}
class HUAWEI extends Hardware {
  operating () {
    console.log('使用华为硬件')
  }
}

class FakeStarFactory extends PhoneFactory {
  // 具体工厂-实现具体功能
  createOs () {
    return new Ios()
  }
  createHardware () {
    return new MI()
  }
}

// 开始生产手机
const phone = new FakeStarFactory() // 生产手机
const phoneOs = phone.createOs() // 加上系统
const phonrHardware = phone.createHardware() // 加上硬件
phoneOs.run() // 系统系统
phonrHardware.operating() // 选择硬件

// 生产其他型号手机-只需要扩展其他类
class newFakeStarFactory extends PhoneFactory {
  createAndroid () {
    // 扩展....
  }
}

