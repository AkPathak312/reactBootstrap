import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""></img>
        Bootstrap
      </a>
    </nav>
      </div>
    )
  }
}
