import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

export default function Contact() {
    return (
        <div className='main-container'>
            <section id='contact-intro'>
                <div className='section-text'>
                    <h1>Contact</h1>
                </div>
            </section>
            <section id='contact-info'>
                <p>Contact us! Locally owned, proud to serve Mendocino, Lake and Sonoma Counties and beyond!</p>
                {/* <h3>Already recieved services?</h3>
                <a href=''><h3>Leave us a review on Google!</h3></a> */}
                <div id='slogan'>
                    <hr />
                        <div>
                            <h2>YOU CALL - WE HAUL</h2>
                            <h2>NO JOB TOO BIG OR SMALL</h2>
                        </div>
                    <hr />
                </div>
                <p>Residential and commercial services covering the North State: <br />
                    Licensed to do business in the cities of Ukiah, Clearlake, Lakeport and Santa Rosa. We serve all cities and unincorporated areas in between.
                </p>
            </section>
            <section id='form'>
                <div id='image-box'>
                <h2>Contact Us!</h2>
                <img src='./images/contactphone.jpg' alt='Residental Services' />
                </div>
                <ContactForm />
            </section>
        </div>
    )
}