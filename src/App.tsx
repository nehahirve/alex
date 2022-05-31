import React, { useEffect, useState } from 'react';

import {Content} from './features/content/Content'
import ContentApi from './features/content/ContentApi'

import Card from './components/Card'


function App() {
const [content, setContent]  = useState<Content[]>()
const [error, setError] = useState(false)

  const requestContent = async ( ) => {
    const response = await ContentApi.get()
    setContent(response)
  }

  const handleDeleteButtonClick = async (contentPiece?: Content) => {
    try {
      if (contentPiece) {
        await ContentApi.delete(contentPiece)
        setContent (content ? [...content.filter(c => c.id !== contentPiece.id)]: [])

      }
    } catch {
      setError(true)
    }
  }

  const handleSaveButtonClick = async (contentPiece?: Content) => {
    console.log('in here', contentPiece)
    try {
      if (contentPiece) {
        await ContentApi.update(contentPiece)

        if (content) {
          setContent(content.map(c => {
            return c.id === contentPiece.id ? 
            contentPiece : c
          }))
        }
      }
    } catch {
      setError(true)
    }
  }

  useEffect(() => {
    requestContent()
  }, [])

  if (error) {
    return (
      <div>
        <h2>
          Sorry, error
        </h2>
      </div>
    )
  }

  return (
    <div className="App">
      {content?.map(c => 
        (<div style={{
          display: 'flex',
          borderColor: 'black',
          borderWidth: 2,
          borderStyle: 'solid',
          padding: 4
        }} key={c.id}>
          <Card content={c} onSaveContent={handleSaveButtonClick} onCloseContent={() => {}} onDeleteContent={handleDeleteButtonClick}/>
        </div>))}
    </div>
  );
}

export default App;
