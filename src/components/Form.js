import React,{ useRef, useState } from 'react';
import './FormStyle.css';
import emailjs from '@emailjs/browser';
import {useForm} from 'react-hook-form';

export default function Form() {
    const {register,handleSubmit,formState:{errors},reset}= useForm()
    const form = useRef()

    const sendEmail = (e) => {

        emailjs.sendForm('service_3xvid34', 'template_raie7n6',
         form.current, 'mRE2mkxWn60559101')
          .then((result) => {
              console.log(result.text);
              console.log("email sent with success")
          }, (error) => {
              console.log(error.text);
          });
          reset()
      };
      const regex = /^([a-zA-Z0-9_.+-]+)@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]+$/
      
  return (
    <div className='form'>
         <form  ref={form}  onSubmit={handleSubmit(sendEmail)}>
            <label htmlFor="name">Your Name</label>
            <input type="text" 
            id="name" 
            name="user_name"
            autoFocus
            {...register("user_name",{
                required : true,
            })}
            ></input>
            {errors.user_name && errors.user_name.type === "required" &&
            (
                <p className='errorMsg'>The user name is required</p>
            )}
            <label htmlFor="email">Email</label>
            <input type="email" 
            id="email" 
            name="user_email"
            {...register("user_email",{
                required : true,
                pattern : regex
            })}
            ></input>
            {errors.user_email && errors.user_email.type === "required" &&
            (<p className='errorMsg'>The Email is required</p>)}
            {errors.user_email && errors.user_email.type === "pattern" &&
            (<p className='errorMsg'>The Email is invalid</p>)}
            <label htmlFor="subject">Subject</label>
            <input type="text" 
            id="subject" 
            name="subject"
            {...register("subject",{
                required : true,
            })}
            ></input>
            {errors.subject && errors.subject.type === "required" &&
            (<p className='errorMsg'>The subject is required</p>)}
            <label htmlFor="message">Message</label>
            <textarea rows="6" 
            id="message" 
            name="message"
            placeholder='type your message Here'
            {...register("message",{
                required : true,
                minLength : 10,
                maxLength : 255,
            })}
            />
            {errors.message && errors.message.type === "required" &&
            (<p className='errorMsg'>The message text is required</p>)}
            {errors.message && errors.message.type === "minLength" &&
            (<p className='errorMsg'>The message text must be at least 10 characters</p>)}
            {errors.message && errors.message.type === "maxLength" &&
            (<p className='errorMsg'>The message text can't exceed 255 characters</p>)}
            <button className='btn'
            >Submit</button>
         </form>
    </div>
  )
}
