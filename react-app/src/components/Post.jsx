const Post = ({data, delPost }) => {
    const { id,title, text } = data;

   
    return (
        <div className="post">
            <h3 className="post__title">{ title }</h3>
            <p className="post__text">{ text }</p>

            <button onClick={() => delPost(id)} className='btn btn-del'>del</button>
        </div>
    )

    
}

export default Post;