import React from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
function Contact(){
 return(
     <div className="contact_page">
     <div className="contact_left">
        <form className="contact_form">
        <label for="name" className="label">Name*</label>
        <input type="text" id="name" className="input_text" placeholder=" " required />
        <label for="phone" className="label">Phone No*</label>
        <input type="text" id="phone" className="input_text" placeholder=" " required />
        <label for="email" className="label">Email*</label>
        <input type="email" id="email" className="input_text" placeholder=" " required />
        <textarea className="messagebox" rows="6" placeholder="Message" ></textarea>
        <button type="submit">Send</button>
        </form>
     </div>
     <div className="contact_right">
     <p className="contact_right_first">Are you ready to get started?</p>
     <p className="contact_right_second">If you have questions about the opportunities available to you in our cyber security programs, feel free to send us a message. We will get back to you as soon as possible.</p>
     <button>
     <span><WhatsAppIcon className="WhatsAppIcon" /></span>
      <span className="contact_right_span">Message Us On Whatsapp</span>
     </button>
     <h2>Andy Infosec</h2> 
     <p className="contact_right_third">Andy InfoSec 303 RK One, Dam Road, Rasta Peth, Next to Shantai Hotel, Above Saroj Fabrics, Pune- 411011</p>
     <a href="tel:9021928862">+91 9021928862 </a>
     <a href="mailto:info@andyinfosec.com">info@andyinfosec.com</a>
     </div>
     </div>
 );
}
export default Contact;