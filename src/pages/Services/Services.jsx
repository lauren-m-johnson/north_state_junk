import './Services.css';

export default function Services() {
    return (
            <div className='main-container'>
                <section id='serv-intro'>
                    <div className='section-text'>
                        <h1>Services</h1>
                    </div>
                </section>
                <section>
                    <p>North Coast Junk Removal is locally owned and proud to be serving our local community. We are here to help the hard working families 
                        and businesses of the North State. We know life is busy and that not everyone has the time or means to clear out or clean up the clutter
                        that comes with everyday life. Let us help! We will give your place the top notch look that you have always wanted!
                    </p>
                    <div id='slogan'>
                        <hr />
                        <div>
                            <h2>YOU CALL - WE HAUL</h2>
                            <h2>NO JOB TOO BIG OR SMALL</h2>
                        </div>
                        <hr />
                    </div>
                </section>
                <section id='services-lists'>
                    <div className='res-list'>
                        <h3>Residential</h3>
                        <img src='./images/house.jpg' alt='Residental Services' />
                        <ul>
                            <li>Appliances</li>
                            <li>Furniture</li>
                            <li>Yard Waste</li>
                            <li>Hot Tubs</li>
                            <li>Mattresses</li>
                        </ul>
                    </div>
                    <div className='comm-list'>
                        <h3>Commercial</h3>
                        <img src='./images/commercial.jpg' alt='Commercial Services' />
                        <ul>
                            <li>Construction Debris</li>
                            <li>Kitchens</li>
                            <li>Storage Yards</li>
                            <li>Office Spaces</li>
                            <li>Warehouses</li>
                        </ul>
                    </div>
                    <div className='landlord-list'>
                        <h3>Realtor / Landlord</h3>
                        <img src='./images/realtor.jpg' alt='Landlords and Realtors' />
                        <ul>
                            <li>Tenant Cleanouts</li>
                            <li>Foreclosures</li>
                            <li>Evictions</li>
                            <li>Hoarders</li>
                            <li>Move Ins</li>
                        </ul>
                    </div>
                </section>
                <section id='slogan'>
                    <h2>AND MORE!</h2>
                </section>
            </div>
    )
}