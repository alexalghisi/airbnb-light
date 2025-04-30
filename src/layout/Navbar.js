import { Link } from 'react-router-dom';
import 'styles/navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">🏡 Airbnb-Light</h2>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/bookings">Bookings</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}
