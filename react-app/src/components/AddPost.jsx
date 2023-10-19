import { useState } from "react";

const AddPost = ({ addPost }) => {
    const [title,setTitle] = useState('');
    const [text,setText] = useState('');


    const clickHandler = (e) => {
        e.preventDefault();
         addPost({
          id: window.crypto.randomUUID(),
          title: title,
          text: text,
         });
         console.log(title,text);

        setTitle('');
        setText('');
      }

    return (
        <form className="add-post">
            <h3 className="add-post-title">Add post</h3>
            <div className="add-post-action">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
                <button className="btn" onClick={clickHandler}>Add</button>
            </div>
        </form>
    )
}

export default AddPost;