import { useState } from "react";

const Post = ({data, delPost }) => {
    const { id,title, text } = data;

    const [isShow,setIsShow]= useState(false);
   
    return (
        <div className="post">
            <h3 className="post__title">{ title }</h3>
            <p className="post__text">{ text }</p>

            <div className="post__toggle-content-block">
                <button 
                onClick={()=> setIsShow(!isShow)}
                className="post__toogle-btn">
                 {isShow ? 'close' : 'open'}
                 </button>
                {
                   isShow &&
                    <p className="post__toggle-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui odio sit sunt voluptas soluta quos nam ipsam impedit,
                      numquam aliquam.
                </p>
              }
            </div>

            <button onClick={() => delPost(id)} 
            className='btn btn-del'>del</button>
        </div>
    )

    
}

export default Post;