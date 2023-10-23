import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='main-container'>
            <section id='home-intro'>
                <div className='section-text'>
                    <h1>Junk Removal in Sonoma, Mendocino and Lake Counties</h1>
                </div>
            </section>
            <section id='about'>
                <h2>About North State Junk Removal</h2>
                <p>
                    Here at North State Junk Removal we offer premier services to our clients and community. Our mission is to provide
                    professional, affordable and convenient service with an emphasis on customer satisfaction. While junk removal may
                    be a large part of our business we also strive to improve the North State through donating, recycling and reusing
                    whatever comes our way. We are always looking forward to a better tomorrow, let us help you get there as we work 
                    toward a cleaner, greener future for everyone!
                </p>
            </section>
            <section id='image-container'>
                <img></img>
                <img></img>
                <img></img>
                <img></img>
            </section>
            <section id='home-list'>
                <h2>We Offer:</h2>
                <ul>
                    <li>Junk Removal</li>
                    <li>Property and House Cleanups</li>
                    <li>Appliance and Furniture Removal</li>
                    <li>And more!</li>
                </ul>
                <Link to='/services'>
                    <button id='services-btn'>See All Services</button>
                </Link>
            </section>
        </div>
    )
}