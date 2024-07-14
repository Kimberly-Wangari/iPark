import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">iPARK</div>
      <ul className="nav-menu">
        <li><Link to="/payment">PAYMENT</Link></li>
        <li><Link to="/reserve">RESERVE</Link></li>
        <li><Link to="/login">LOG IN</Link></li>
        <li className="nav-contact"><Link to="/contact">CONTACT</Link></li>
      </ul>
    </div>
  )
}

export default Navbar