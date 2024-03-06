import { useState } from 'react';
import './CreatePage.css';


export default function CreatePage(){

    const[message,setMessage] = useState('')

    function createPost(event){
        event.preventDefault()
        
        const formData = new FormData(event.target)
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body:formData
        })

        event.target.reset()
       
    }


    return(
        <>
            <h1>Создать новость</h1>
            <form action="" onSubmit={(createPost)}>
                <input type="text" name="title" placeholder="Название" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Текст новости"></textarea>
                <input type="submit" />
            </form>
        </>
    )
}