import React, {useState, useEffect} from 'react'
import PICTURES from './pictures'

const SECONDS = 1000

const Gallery = () => {

  const [index, setIndex] = useState(0);

  const [delay, setDelay] = useState(3 * SECONDS);

  const [increment, setIncrement] = useState(1)

  
  useEffect(() => {

    console.log('delay', delay)

     const interval = setInterval( () => {
      // const i = Math.floor(Math.random() * PICTURES.length)
       setIndex(storedIndex => {
         return (storedIndex + 1) % PICTURES.length;
       })
     }, delay );

     return () => {
       clearInterval(interval)
     }
  },[delay]);

  const updateDelay = (e) => {
    const miniDelay = 1 * SECONDS
    const delay  = (e.target.value) * SECONDS
    setDelay(delay < miniDelay ? miniDelay  : delay) ;
  }
  
  return (
    <div className="Gallery">
      <img 
        src= {PICTURES[index].src}
        alt ='gallery'
      />
      <div className= "multiform">
        <div>
          Gallery transition delay(seconds) &nbsp;
          <input type = 'number' onChange = { updateDelay} />
          <br/>
          <br/>
          <hr/>
        </div>
      </div>
    </div>
  )

}
export default Gallery