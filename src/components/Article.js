import axios from 'axios';
import React from 'react';
import {useState} from 'react'

function Article({article}) {

    const [isEditing, setIsEditing] = useState(false)
    const [editContent, setEditContent] = useState("")

    const dateFormat = (date) =>{
        let newDate = new Date(date).toLocaleDateString("fr-FR",{
            year : 'numeric',
            month : 'long',
            day : 'numeric',
            hour : 'numeric',
            minute : 'numeric'
        })
        return newDate
    }

    const handleDelete= ()=>{
        axios.delete("http://localhost:3004/articles/"+article.id);
        window.location.reload()
    }

    const handleEdit =() =>{
        const data ={
            author : article.author,
            content : editContent ? editContent : article.content,
            date : article.date,
            updateDate : Date.now()
        };
        axios.put('http://localhost:3004/articles/'+article.id, data)
        .then(()=> setIsEditing(false))
    };
    
  return (
    <div className='article' style={{background : isEditing ? "#f3feff" : "white"}}>
        <div className="card-header">
            <h3>{article.author}</h3>
            <em>Posté le {dateFormat(article.date)}</em>
        </div>
        {isEditing ? (
            <textarea
            defaultValue={editContent ? editContent : article.content}
            autoFocus
            onChange={(e) => setEditContent(e.target.value)}
            ></textarea>
        ) : (
            <p>{editContent ? editContent : article.content}</p>
        )}
       
        <div className="btn-container">
            {isEditing ? (
            <button onClick={() => handleEdit()}>Valider</button>
            ) : (
            <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
            <button onClick={()=>{
                if(window.confirm('voulez vous supprimer ?')){
                    handleDelete();
                }
            }}> Supprimer </button>
        </div>
    </div>
  )
}

export default Article

