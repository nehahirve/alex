import React, {  useState } from 'react';


import {Content} from '../features/content/Content'

interface CardInterface {
    content: Content 
    onDeleteContent: (content?: Content) => void 
    onSaveContent: (content: Content) => void 
    onCloseContent: () => void 
  }

const Card = ({content, onDeleteContent, onSaveContent}: CardInterface) => {
    const [editable, setEditable] = useState(false)
    const [title, setTitle] = useState<string>(content?.title || '')
    const [body, setBody] = useState<string>(content?.body || '')
  
  
    
    if (editable) {
      return (
        <form onSubmit={e => {
          e.preventDefault()
          onSaveContent({...content, title, body})
          }}>
        <input value={title} onChange={e => setTitle(e.target.value)}/>
        <input value={body} onChange={e => setBody(e.target.value)} />
        <button type="submit">Save</button>
        <button onClick={() => {
            setTitle(content?.title || '')
            setBody(content?.body || '')
            setEditable(false)
            }}>Close</button>
        </form>
      )
    }
  

    return (
      <>
        <h1>{title}</h1>
        <p>{body}</p>
        <button onClick={() => setEditable(true)}>Edit</button>
        <button onClick={() => onDeleteContent(content)}>Delete</button>
      </>
    )
  
  }

  export default Card