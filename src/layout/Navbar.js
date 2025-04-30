import { Link } from 'react-router-dom';
import 'styles/navbar.css';

export default function Navbar({ user, logout }) {
    return (
        <nav className="navbar">
            <h2 className="logo">🏡 Airbnb-Light</h2>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                {user && <li><Link to="/bookings">Bookings</Link></li>}
                {!user ? (
                    <li><Link to="/login">Login</Link></li>
                ) : (
                    <>
                        <li>Welcome, {user.email}</li>
                        <li><button onClick={logout}>Logout</button></li>
                    </>
                )}
            </ul>
        </nav>
    );
}
