import React, { useEffect, useState } from 'react'

function UseEffect2() {

  const [widthCount, setWidthCount] = useState(window.screen.width);

  const actualWidth = () => {
    console.log(window.innerWidth);
    setWidthCount(window.innerWidth);
  }

  useEffect(() => {
    console.log("add event")
    window.addEventListener("resize", actualWidth);
    
    return () => {
      console.log("remove event")
      window.removeEventListener("resize", actualWidth);
    }
  })

  return (
    <div className='useEffect2'>
      <p>The actual size of the window is:</p>
      <h1>{ widthCount }</h1>
    </div>
  )
}

export default UseEffect2;
