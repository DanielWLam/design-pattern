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
  render () {
    return (
      <div className='main-view'>
        <div className="choose">
          <div className="btn">
            <img src="https://zos.alipayobjects.com/rmsportal/LvYKhbKsPzIRLGsBxUJA.png" alt="img" className="img" />
            中后台网站
          </div>
          <div className="btn">
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
