
import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
    <div className='  d-flex flex-row justify-content-between align-items-center bg-info-subtle '>
    <h1>Read Me </h1>
    <nav>
        <ul className='d-flex flex-row gap-5'>
            <li>
                <Link to={`/`}>Home</Link>
            </li>
            <li>
                <Link to={`books/`}>Books</Link>
            </li>
            <li>
                 <Link to={`authors/`}>Authors</Link>
            </li>
        </ul>
    </nav></div>
    
   </header>
  );
}

export default Header;