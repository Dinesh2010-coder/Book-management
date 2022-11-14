import React ,{useState} from 'react'
import './BookIssue.css'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

export default function Login() {
    const [name,setName]=useState('');
    const [pass,setpass]=useState('');

    let history=useNavigate();

    const display=(e)=>{
        e.preventDefault();
        let n=name,p=pass;
        if(n=='admin' && p=='admin'){
            history('/Startup')
        }
        else{
            setName('');
            setpass('');
            alert('Invalid username and password');
        }
    }

    

  return (
    <div className='background-book'>
      <Navbar />
      <div className='book-record-form'>
          <h1>Book Records</h1>
          <label>Name</label>
          <div className='form'>
          <input type="text" placeholder='Enter username'value={name}  onChange={(e) => setName(e.target.value)} required></input>
        </div>
          <label>password</label>
        <div className='form'>
          <input type="password" placeholder='Enter your password' value={pass} onChange={(e) => setpass(e.target.value)} required></input>
        </div>
       
          <button className='button' onClick={display}>Login</button>
        </div>
        
        </div>
 
  )
}


        

       
