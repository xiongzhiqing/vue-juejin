/*
 * @Author: xiongzhiqing@everjiankang.com
 * @Date: 2020-06-15 10:34:23
 * @Last Modified by:   xiongzhiqing@everjiankang.com
 * @Last Modified time: 2020-06-15 10:34:23
 */

/**
 * 配置中心
 *
 * @class Config
 */
class Config {
  constructor() {
    this._config = {}
  }

  register (type, value) {
    this._config[type] = value
  }

  get (type) {
    return this._config[type]
  }
}

// 返回单例
export default new Config()
