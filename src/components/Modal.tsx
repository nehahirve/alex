import React, {  useState } from 'react';


import {Content} from '../features/content/Content'

interface CardInterface {
    onAddContent: (content: Content) => Promise<void>
    onClose: () => void
  }

const Modal = ({ onAddContent, onClose}: CardInterface) => {
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState(false)
  
    const handleFormSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      if (saving) return
      
      if (title && body) {
        const newContent = {id: 'generateUUID', title, body}
        setSaving(true)
        try {
          await onAddContent(newContent)
          setSaving(false)
          onClose()
        } catch {
          setError(true)
        }
      }
    }

      return (
        <form style={{position: 'fixed', top: 0,width: '100vw', height: '100vh', backgroundColor: 'yellow'}} onSubmit={handleFormSubmit}>
          {error ? <>smth went wrong in the modal </> : (
            <>
              <input value={title} onChange={e => setTitle(e.target.value)}/>
              <input value={body} onChange={e => setBody(e.target.value)} />
              <button disabled={saving} type="submit">{saving ? 'Saving...': 'Save'}</button>
              <button onClick={onClose}>Cancel</button>
              </>
          )}
    
        </form>
      )
  
  }

  export default Modal