import React, {useState} from 'react';
import { createPost } from '../queries/postQueries';

const AddPost = ({postType}) => {
    const [title, setTitle] = useState('');

    const addPost = (ev) => {
        console.log(title)
        ev.preventDefault();
        createPost(title, postType)
    }

    return (
        <form className="add-post-form" method="post" onSubmit={(ev) => addPost(ev)}>
            <label>Название</label> 
            <input type="text" onInput={(ev) => setTitle(ev.target.value.trim())}/>
            <input type="submit" value='Создать'/>
        </form>
    );
}

export default AddPost;
