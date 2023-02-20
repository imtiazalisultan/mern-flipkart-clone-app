import React, { useState } from 'react';
import { Box, styled} from '@mui/material';


const Component = styled(Box)`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center`

const Contact = () => {

  const [userData, setUserData] = useState({name:"",email:"",phone:"",message:""});
  
  const handleInput = (e) =>{
    let name = e.target.name;
     let value  = e.target.value;
 
     setUserData({...userData,[name]:value});
   };

   const handleSubmit = async(e) =>{
    e.preventDefault();
   
    const { name, email, phone, message} = userData;

    const res = await fetch('/api/contact',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,message
      })
    });
    const data = await res.json();

    if(!data){
      alert("Message Sending Failed !")
      console.log("Message Not Send");
    }else{
      alert("Messsage Send Successfully");
      setUserData({name:"",email:"",phone:"",message:""});
    }
  }

  return (
    <Component>
      <h1>Contact Us Page</h1>
     
      <br/>
     <div className='contact-form'>
        <div className='contact-form-title'>
            Get In Touch
        </div><br/>
        <div className='contact-form-body'>
            <form method='POST' >
                <input type="text" name='name' value={userData.name}  onChange={handleInput}  placeholder="Your Name" required="true"/><br/><br/>
                <input type="email" name='email' value={userData.email} onChange={handleInput}  placeholder="Your Email" required="true"/><br/><br/>
                <input type="number" name='phone' value={userData.phone}  onChange={handleInput} placeholder="Your Number" required="true"/><br/><br/>
                <textarea cols="30" name='message' value={userData.message} onChange={handleInput}  rows="10" placeholder="Any Message or Feedback"></textarea><br/><br/>
                <button type='submit' onClick={handleSubmit} >Send Message</button><br/><br/>
            </form>
        </div>
     </div>
     <div>
        Phone No:<span>+91 8828768148</span>
      </div>
      <div>
        Email : <span>mohammedimtiaz2011@gmail.com</span>
      </div>
      <div>
        Address :<span>Mumbai</span><br/><br/>
      </div>
    </Component>
  )
}

export default Contact
