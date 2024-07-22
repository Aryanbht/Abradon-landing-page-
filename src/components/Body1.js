import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import './Body1.css'

export default function Body1() {
  const [text] = useTypewriter({
    words: ['ABRADON  ','Best Footwear Brand  ','Premium Footwear Brand  '],
    loop:{},
    typeSpeed:100,
    delaySpeed:80
  })

  return (
    <div className='main'>
      <div className="text1">
        This Is 
      </div>
      <span>
        {text}
      </span>
      <Cursor/>
      
    </div>
  )
}
