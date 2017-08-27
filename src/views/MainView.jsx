import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
// import { NavLink as Link } from 'react-router-dom'
import './MainView.less'

// import { Button } from 'antd'

export default class MainView extends Component {
  static propTypes = {
    route: PropTypes.object
  }
  renderRandomLine () {
    var c = document.getElementsByTagName('canvas')[0] // 获取canvas元素
    var x = c.getContext('2d') // 获取context
    var pr = window.devicePixelRatio || 1 // 设备像素比：设备物理像素/设备独立像素
    var w = window.innerWidth // 屏幕宽度
    var h = window.innerHeight // 屏幕高度
    var f = 200 // TODO: 未知
    var q // TODO: 未知
    var m = Math // Math函数缩写
    var r = 0 // TODO: 未知
    var u = m.PI * 2 // TODO: 2PI, 可能与周长有关
    var v = m.cos // Math.cos, 余弦函数
    var z = m.random // 随机函数
    c.width = w * pr // context宽度
    c.height = h * pr // context高度
    x.scale(pr, pr)
    x.globalAlpha = 0.6
    function i () {
      x.clearRect(0, 0, w, h)
      q = [{ x: 0, y: h * 0.7 + f }, { x: 0, y: h * 0.7 - f }]
      while (q[1].x < w + f) d(q[0], q[1])
    }
    function d (i, j) {
      x.beginPath()
      x.moveTo(i.x, i.y) // 屏幕左边初始化的连线， q0起点
      x.lineTo(j.x, j.y) // 连到q1
      var k = j.x + (z() * 2 - 0.25) * f // 随机一个新的X点
      var n = y(j.y) // 随机一个大于0， 小于屏幕高度的y点

      x.lineTo(k, n)
      x.closePath()
      r -= u / -50
      x.fillStyle = '#' + (v(r) * 127 + 128 << 16 | v(r + u / 3) * 127 + 128 << 8 | v(r + u / 3 * 2) * 127 + 128).toString(16)
      x.fill()
      q[0] = q[1]
      q[1] = { x: k, y: n }
    }
    function y (p) {
      var t = p + (z() * 2 - 1.1) * f
      return (t > h || t < 0) ? y(p) : t
    }
    i()
  }
  jump = (args) => () => {
    console.log(args)
  }
  componentDidMount () {
    this.renderRandomLine()
  }
  render () {
    return (
      <div className='main-view'>
        <canvas id="bgCanvas" />
        <div className="choose">
          <div className="btn" onClick={this.jump('admin')}>
            <img src="https://zos.alipayobjects.com/rmsportal/LvYKhbKsPzIRLGsBxUJA.png" alt="img" className="img" />
            中后台网站
          </div>
          <div className="btn" onClick={this.jump('show')}>
            展示型网站
          </div>
        </div>
        <div className='view'>
          {renderRoutes(this.props.route.childRoutes)}
        </div>
      </div>
    )
  }
}
