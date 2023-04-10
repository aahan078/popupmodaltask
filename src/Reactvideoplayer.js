import React from 'react'
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css';
import introvideo from './html-video/video.mp4';
import Videoframes from './Videoframes';
import '../src/vidplayer.css'
import audio from '../src/audio/audio.mp3'

export default function Reactvideoplayer() {
  return (
    <div>
    <div className='container mt-5'>
        <div className='txt--1'>
        <h1>React Media Player</h1>
        </div>
       
    </div>
            <div className='container mt-5' style={{ width: '70%' }}>
    
            <div className="ratio ratio-16x9">
                 <video controls> <source src={introvideo} type='video/mp4' >
                
                </source></video>
                </div>
               
            </div>
    
            <div className='container mt-5' >
            <div className="audio-tag">
                <audio  src={audio} type='audio/mp3' controls style={{ width: '70%' }}> </audio>
                </div>
            </div>
        </div>
  )
}
