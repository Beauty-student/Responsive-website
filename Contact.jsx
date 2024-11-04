import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import loaction_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a5a1ff9c-6ff6-4f69-b55b-f8709aacb475");

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
  }


  return (
    <div className='contact'>

        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veniam hic repellat explicabo nam aspernatur excepturi, illum sint. Deleniti, blanditiis?</p>
            <ul>
                <li><img src={mail_icon} alt="" />beautykumarign@gmail.com</li>
                <li><img src={phone_icon}alt="" />9319823689</li>
                <li><img src={loaction_icon} alt="" />Sector-110,Noida<br/>Uttar Pradesh,201304</li>
            </ul>
        </div>
        <div className="contact-col">
        <form onSubmit = {onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label>Phone number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile' required/>
          <label>Write your message here</label>
          <textarea name="message"  rows="6" placeholder='enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>submit now  <img src={white_arrow}  alt="" /> </button> 
          </form>
          <span>{result}</span>

         
       
     
     
          </div>
    </div>
  )
}

export default Contact