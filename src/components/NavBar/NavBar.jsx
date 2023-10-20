import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <div id='nav-bar'>
            <h1>North State Junk Removal</h1>
            <div id='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/services'>Services</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}