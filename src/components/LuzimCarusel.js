import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import imagen1 from '../assets/images/luz1.png'


function LuzimCarusel(){
  return(
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        alt="First slide"
        src = {imagen1}
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        alt="First slide"
        src = {imagen1}
      />

    </Carousel.Item>
  </Carousel>
  )
}



export default LuzimCarusel