import React,{ useRef, useState } from 'react';
import './FormStyle.css';
import emailjs from '@emailjs/browser';

export default function Form() {
    const [formState, setFormState] = useState({
        name : "",
        email : "",
        subject : "",
        message : ""
    })
    const [buttonDisabled,setButtonDisabled] = useState(true)
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3xvid34', 'template_raie7n6',
         form.current, 'mRE2mkxWn60559101')
          .then((result) => {
              console.log(result.text);
              console.log("email sent with success")
          }, (error) => {
              console.log(error.text);
          });
      };
      const regex = /^([a-zA-Z0-9_.+-]+)@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]+$/
      const handleChange= (event) => {
        const current_field = event.target.name;
        let field_value = event.target.value ;
        field_value = field_value.trim();
        let isValidEmail ;
        switch(current_field){
            case 'user_name' : 
                setFormState(prevState => {
                    return {...prevState, name :field_value}
                })
                break;
            case 'user_email' :
                isValidEmail = regex.test(field_value)
                if(isValidEmail)
                {
                    setFormState(prevState => {
                        return {...prevState, email : field_value}
                    })
                    break;
                }
            case 'subject' : 
                setFormState(prevState => {
                    return {...prevState, subject : field_value}
                })
                break;
            case 'message' :
                setFormState(prevState => {
                    return {...prevState, message : field_value}
                })
        }
        setButtonDisabled(false) 
      }
      console.log(formState)
  return (
    <div className='form'>
         <form  ref={form}  onSubmit={sendEmail}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="user_name"
            onChange={handleChange}
            ></input>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email"
            onChange={ handleChange}
            ></input>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject"
            onChange={handleChange}
            ></input>
            <label htmlFor="message">Message</label>
            <textarea rows="6" id="message" name="message"
            placeholder='type your message Here'
            onChange={handleChange}/>
            <button className='btn' disabled={buttonDisabled}
            >Submit</button>
         </form>
    </div>
  )
}
