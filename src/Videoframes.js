import React from 'react'
import "../src/vidframs.css"
// import Videoframes from './Videoframes';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap';




export default function Videoframes() {
  return (
    <div>
    <div className='vid--1'>
      
      <h1>Iframes example in reactjs</h1>
      </div>

<Container className='container mt-5' style={{ width: '70%' }} >
<div className="ratio ratio-16x9">
<iframe width="560" height="315" src="https://www.youtube.com/embed/BBlZiECq8ZA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</Container>



</div>
  )
}
