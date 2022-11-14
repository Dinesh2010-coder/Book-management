import React ,{useState}from 'react'
import './BookIssue.css'
import { Link, useNavigate } from 'react-router-dom';
import Another from './Another';
import Navbar from './Navbar';

export default function BookIssue() {

  const [name, setname] = useState('');
  const [team, setteam] = useState('');
  const [bname, setbname] = useState('');

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = name, b = team, c = bname;
    Another.push({ a, b, c });
    console.log(Another);

    if(b=='admin' && a=='admin')
    {
      history('/startup');
    }
    else{
      setname('');
      setteam('');
      setbname('');
      alert('Your book issue request has been accepted')
      history('/bookissue');
    }
    
  }

  return (
    <div className='body'>

        <Navbar />
        

        <div className='book-issue-form'>
          <h1>ISSUE THE BOOK</h1>
          <label>Name</label>
          <div className='form'>
          <input type="text" placeholder='Enter your name'value={name}  onChange={(e) => setname(e.target.value)} required></input>
        </div>
          <label>Email:</label>
        <div className='form'>
          <input type="email" placeholder='Enter your email id' value={team} onChange={(e) => setteam(e.target.value)} required></input>
        </div>
          <label>Book Name</label>
        <div className='form'>
          <input type="text" placeholder='Enter name of book you want to issue' value={bname} onChange={(e) => setbname(e.target.value)} required></input>
        </div>
        <div >
          <button className='button' onClick={handleSubmit}>Submit</button>
        </div>
       
        
        </div>
    </div>
  )
}
