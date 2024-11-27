
import React from 'react'
import { Link } from "react-router-dom";
 function TopAuthorCard(props) {
    const topauthor=props.topauthor
    return (
        <article className=''>

         <Link to={`topauthor/`+topauthor.id}>
         <img src={topauthor.image} />
         </Link>
        
        <h3>{topauthor.title}</h3>
        <span>{topauthor.novel}</span>
    
        </article>
    )
    
}
export default  TopAuthorCard


