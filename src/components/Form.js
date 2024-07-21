
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';
import swal from 'sweetalert2'

const Alert = () =>{
  swal.fire({ 
    html: `
      Message send successfully!
    `,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: `
      <i class="fa fa-thumbs-up" style=''color: yellow;></i> Ok!
    `,
    confirmButtonColor:'yellow',
    confirmButtonAriaLabel: "Thumbs up, great!",
  });  
}
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_t19dtdt', 'template_kbqf95v', form.current, {
        publicKey: 'Vhh_eEXu5paRCnnh7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='form'>
      <div class="Contact-headline">
            <h1>Contact <span style={{color:'yellow'}}> Me</span></h1>
        </div>
        <form action='/Contact' ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type='text' name="to_name"></input>
            <label>Your Email</label>
            <input type='email' name="from_name"></input>
            <label>Enter Message</label>
            <textarea name="message" rows='6' placeholder='type your message here'></textarea>
            <button onClick={Alert} className='btn' value="Send">Submit</button>
        </form>
    </div>
  )
}

export default Form