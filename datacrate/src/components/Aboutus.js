import React from 'react'
import model from '../assets/model.png'
import smallimg from '../assets/about-img.png'
import yavatar from '../assets/yavatar.svg'
import male from '../assets/maleavt.svg'
import female from '../assets/feavt.svg'
import './Aboutus.css'
import Footer from './Footer'

function Aboutus() {
    return (
        <>
            <section className='aboutsec'>
                <div class="text-container">
                    <p>Hello,</p>
                    <p>Welcome to</p>
                    <p>Datacrate</p>
                    <p>A perfect solution for your business</p>
                    <button class="hire-btn">Hire Us</button>
                    <button class="down-cv">Visit Us</button>
                </div>
                <img alt="model" class="model" src={model}></img>
            </section>
            <div class="about-container">

                <img src={smallimg} />

                <div class="about-text">
                    <p>About Us</p>
                    <p>Devolper & Designer</p>
                    <p>Hello,We are Devolpers and also Designers.If you have asany Project or if you want make a software for your business conatact us.We make as soon as possibale.You really like our work,if you don't we change this until you like and give you seticfaction result.</p>
                    <button>Hire Us</button>
                    <button>Visit Us</button>
                </div>
            </div>
            <div class="aboutservices">
                <div class="services-text ">
                    <p>Meet Team!</p>
                    <p>Best at their work</p>
                    <p>if you want make a software for your business conatact us.We make as soon as possibale.You really like our work,if you don't we change this until you like and give you seticfaction result.if you want make a software for your business conatact us.We make as soon as possibale.You really like our work,if you don't we change this until you like and give you seticfaction result.if you want make a software for your business conatact us.We make as soon as possibale.You really like our work,if you don't we change this until you like and give you seticfaction result.</p>
                </div>
                <div class="box-container">

                    <div class="box-1">
                        <span><img src={yavatar}/></span>
                        <p class="heading">Data Analyst</p>
                        <p class="details">Kyle Jemisson | Gream Williamson | Hobart Perth | Osumana Dembele | Sergio Alba | Kyle Jemisson | Gream Williamson | Hobart Perth | Osumana Dembele | Sergio Alba</p>
                        <button>Read More</button>
                    </div>

                    <div class="box-2">
                        <span><img src={male}/></span>
                        <p class="heading">Web Devoloment</p>
                        <p class="details">Kyle Jemisson | Gream Williamson | Hobart Perth | Osumana Dembele | Sergio Alba | Kyle Jemisson | Gream Williamson | Hobart Perth | Osumana Dembele | Sergio Alba</p>
                        <button>Read More</button>
                    </div>

                    <div class="box-3">
                        <span><img src={female}/></span>
                        <p class="heading">Security SEO</p>
                        <p class="details">Kyle Jemisson | Gream Williamson | Hobart Perth | Osumana Dembele | Sergio Alba | Kyle Jemisson | Gream Williamson | Hobart Perth | Osumana Dembele | Sergio Alba</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
            <Footer/>


        </>
    )
}

export default Aboutus
