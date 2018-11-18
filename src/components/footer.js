import React from 'react'
import Link from './link'

const Footer = () => (
  <footer className="footer has-background-light">
    <nav className="container level">
      <div className="level-left">
        <Link to="/" className="button is-text level-item">
          Home
        </Link>
        <Link to="/wip" className="button is-text level-item">
          Blog
        </Link>
        <Link to="/wip" className="button is-text level-item">
          About
        </Link>
      </div>

      <div className="level-right">
        <div className="has-text-centered">
          <p>Copyrights © 2018 Michael Lin</p>
        </div>
      </div>
    </nav>
  </footer>
)

export default Footer
