import React from 'react';
import './ContactForm.css';

export default function ContactForm() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1d59b90e-3d25-45fe-9940-52fa816a62aa");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
        <div id='form-container'>
        <form onSubmit={onSubmit}>
            <label htmlFor='name'>Name: </label>
            <input type="text" name="name" required />
            <br />

            <label htmlFor='email'>Email: </label>
            <input type="email" name="email" required />
            <br />

            <label htmlFor='phone'>Phone: </label>
            <input type='phone' name='phone' required />
            <br />

            <div>
            <input type="checkbox" id="residential" name="residential" value="residential" />
            <label htmlFor="residential">Residential</label>
            </div>
            <br />

            <div>
            <input type="checkbox" id="commercial" name="commercial" value="commercial" />
            <label htmlFor="option2">Commercial</label>
            </div>
            <br />
    
            <div>
            <input type="checkbox" id="realtor" name="realtor" value="realtor" />
            <label htmlFor="option3">Realtor/Landlord</label>
            </div>
            <br />
        
          <label htmlFor='message'>Tell us how we can help: </label>
          <br />
          <textarea name="message" required></textarea>
          <br />
    
          <button type="submit">Submit Form</button>
        </form>
        <span>{result}</span>
      </div>
    );
  }