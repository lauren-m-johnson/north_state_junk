import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <div id='footer'>
            <Link to='/contact'>
                <button id='footer-btn'>Contact Us</button>
            </Link>
            <p>Call or Text: (707)234-8583</p>
            <p>Email: northstatejunkremoval@gmail.com</p>
        </div>
    )
}