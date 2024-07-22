import React from 'react'
import './Body2.css'
import model1 from './model1.jpg'  ;
import model2 from './model2.jpg'  ;
import model3 from './model3.jpg'  ;

export default function Body2() {
  return (
    <>
    <h1>Trending Shoes</h1>
    <div className='container'>
        <div className="box">
            <img src= {model1} alt=""  className='model1'/>
        </div>
        <div className="box">
            <img src= {model2} alt=""  className='model1'/>
        </div>
        <div className="box">
            <img src= {model3} alt=""  className='model1'/>
        </div>
      
    </div>
    </>
  )
}
