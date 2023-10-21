import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <div id='footer'>
            <Link to='/contact'>
                <button id='footer-btn'>Contact Us</button>
            </Link>
            <p>Call or Text: (555)555-5555</p>
            <p>Email: email@gmail.com</p>
        </div>
    )
}