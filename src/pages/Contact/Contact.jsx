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
                <h2>Call or text us today for a free quote!</h2>
                {/* <h3>Already recieved services?</h3>
                <a href=''><h3>Leave us a review on Google!</h3></a> */}
            </section>
        </div>
    )
}