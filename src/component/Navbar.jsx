import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Employee Details</Link>
        </div>
        {/* <ul className="nav navbar-nav">
          <li className="active"><Link className="navbar-brand" to="/">Home</Link></li>
        </ul> */}
      </div>
    </nav>
  )
}
