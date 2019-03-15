import React from 'react'

import './header.css'

const Header = () => (
  <header>
    <h1>Let's do this</h1>
    <div className="btn-auth-block">
      <div>
        <a>
          <div className="btn btn-sign-in">
            <div className="icon-title">
              <span>SignIn</span>
            </div>
            <i className="fas fa-sign-in-alt" />
          </div>
        </a>
        <a>
          <div className="btn btn-sign-up">
            <div className="icon-title">
              <span>SignUp</span>
            </div>
            <i className="fas fa-user-plus" />
          </div>
        </a>
      </div>
    </div>
  </header>
)

export default Header
