import './App.css';

import React, { useState } from 'react'

function App() {
  const imgs = [
    { link: "https://www.viaero.com/images/thumbs/0000440_iphone-13-pro-max_550.jpeg" },
    { link: "https://www.viaero.com/images/thumbs/0000116_iphone-13-pro_550.jpeg" },
    { link: "https://www.viaero.com/images/thumbs/0000424_iphone-13-pro-max_550.jpeg" }
  ]
  const [displacement, setChange] = useState(imgs[0])
  const imgsChange = (place) => {
    const change = imgs[place]
    setChange(change)
    console.log(place)

  }
  return (
    <div className='all'>
      <div className='sss'>

        <img src={displacement.link} />
      </div>
      <div className='imgdatas'>
        {
          imgs.map((data, value) => {
            return (
              <img src={data.link} onClick={() => imgsChange(value)} />
            )
          })
        }
      </div>
      </div>
      )
}

      export default App