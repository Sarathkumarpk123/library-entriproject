
import React from 'react'
import { Link } from "react-router-dom";
function TopBookCard (props) {
    const topbook=props.topbook

    return (
        <article className=''>
        <Link to={`topbook/`+topbook.id}>
        <img src={topbook.image} />
        </Link>
       
        <h3>{topbook.title}</h3>
        <span>{topbook.category}</span>
    
        </article>
    )
    
  
}
export default TopBookCard