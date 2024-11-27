
import React from 'react';
import { Link } from "react-router-dom";

function BookCard(props) {
    const book=props.book
  return (
    <article className=''>
     <Link to={`book/`+book.id}>
          <img src={book.image} />
    
    </Link>
    <h3>{book.title}</h3>
    <span>{book.category}</span>

    </article>
    
  );
}
export default BookCard;

