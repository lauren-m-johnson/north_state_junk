import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <div id='footer'>
            <Link to='/contact'>
                <button id='footer-btn'>Contact Us</button>
            </Link>
            <a href="tel:7072348583"><img src='/images/smartphone.png'></img></a>
            <p>Call or Text: <a href="tel:7072348583">(707)234-8583</a></p>
            <p>Email: <a href="mailto:northstatejunkremoval@gmail.com">northstatejunkremoval@gmail.com</a></p>
        </div>
    )
}