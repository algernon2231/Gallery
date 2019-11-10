import React , {useState} from 'react'
import Gallery from './Gallery'


function App() {
  const [showGallery, setShowGallery] = useState(true)
  const toggleShowGallery = () => {
    setShowGallery(!showGallery)
  }
  return (
    <div className="App">
      {showGallery ? <Gallery /> : null}
      <button onClick= {toggleShowGallery}>{showGallery? 'Hide': 'Show'} Gallery</button>
    </div>
  );
}
export  default App