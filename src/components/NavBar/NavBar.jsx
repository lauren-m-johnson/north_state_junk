import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <div id='nav-bar'>
            <img src='/images/north_coast_logo.png' alt='logo' id='logo-nav' />
            <div id='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/services'>Services</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}