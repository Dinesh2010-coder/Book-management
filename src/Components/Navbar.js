import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navigation'>
        <nav>
            
            <ul>
            <li><a href="/">HOME</a></li>
            <Link to='/about'><li><a>ABOUT</a></li></Link>
            <Link to='/bookissue'><li><a >ISSUE THE BOOK</a></li></Link>
            <Link to='/book'><li><a>BOOK ISSUE RECORDS</a></li></Link>

        
            </ul>
        </nav>
    </div>
  )
}
