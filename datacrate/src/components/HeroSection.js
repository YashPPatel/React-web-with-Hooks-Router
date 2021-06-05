import React from 'react'
import {Button} from './Button'
import './HeroSection.css'
import video from '../videos/video-2.mp4'
import '../App.css'
import { Buttonwatch } from './Buttonwatch'

export default function HeroSection() {
    return (
        <div className="hero-container">
            <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
            <h1>DATACRATE.JS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button 
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                    >
                        GET STARTED
                    </Button>
                    <Buttonwatch 
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    >
                        WATCH TRAILER <i className="far fa-play-circle" />
                    </Buttonwatch>
            </div>
        </div>
    )
}
