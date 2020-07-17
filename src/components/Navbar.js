import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" title="Logo">
                <img
                  src={logo}
                  alt="Atelier da rubia"
                  style={{ width: '14em', background: '#d2fdfd', borderRadius: '100%' }}
                />
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
