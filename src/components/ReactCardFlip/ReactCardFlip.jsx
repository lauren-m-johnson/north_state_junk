import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './ReactCardFlip.css';

export default function CardFlip() {
    const [isFlipped1, setIsFlipped1] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);
    const [isFlipped3, setIsFlipped3] = useState(false);

    function flipCard1() {
        setIsFlipped1(!isFlipped1);
    }

    function flipCard2() {
        setIsFlipped2(!isFlipped2);
    }

    function flipCard3() {
        setIsFlipped3(!isFlipped3);
    }

    return (
        <div id='card-container'>
            <div>
                <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped1}>
                    <div className='card-front' onMouseEnter={flipCard1}>
                        <img src='./images/house.jpg' alt='Residental Services' />
                        <h3>Residential Services</h3>
                        <p>Our residental services are perfect for the busy homeowner.</p>
                        <button id='services-btn'>View More</button>
                    </div>
                    <div className='card-back' onMouseLeave={flipCard1}>
                        <h3>Residential Services</h3>
                        <ul>
                            <li>Spring & Fall Clean Up</li>
                            <li>Trash and debris</li>
                            <li>Hoarding Situations</li>
                            <li>Estate Cleanouts</li>
                        </ul>
                    </div>
                </ReactCardFlip>
            </div>
            <div>
                <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped2}>
                    <div className='card-front' onMouseEnter={flipCard2}>
                        <img src='./images/commercial.jpg' alt='Commercial Services' />
                        <h3>Commercial Services</h3>
                        <p>We know when you run a business your time is valuable. Let us help you get to what you do best.</p>
                        <button id='services-btn'>View More</button>
                    </div>
                    <div className='card-back' onMouseLeave={flipCard2}>
                        <h3>Commercial Services</h3>
                        <ul>
                            <li>Office Spaces</li>
                            <li>Warehouses</li>
                            <li>Restaurants</li>
                            <li>Construction Cleanouts</li>
                        </ul>
                    </div>
                </ReactCardFlip>
            </div>
            <div>
                <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped3}>
                    <div className='card-front' onMouseEnter={flipCard3}>
                        <img src='./images/realtor.jpg' alt='Landlords and Realtors' />
                        <h3>Landlords and Realtors</h3>
                        <p>Problem tenants? Need help getting a property ready for the next move in? We are here to help.</p>
                        <button id='services-btn'>View More</button>
                    </div>
                    <div className='card-back' onMouseLeave={flipCard3}>
                        <h3>Landlords and Realtors</h3>
                        <ul>
                            <li>Forclosure</li>
                            <li>Tenant Cleanouts</li>
                            <li>New Property Owners</li>
                            <li>Evictions</li>
                            <li>Senior Living Homes</li>
                        </ul>
                    </div>
                </ReactCardFlip>
            </div>
        </div>
    );
}