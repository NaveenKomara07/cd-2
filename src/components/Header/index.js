import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="bg-container">
    <li>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </li>
  </ul>
)

export default Header
