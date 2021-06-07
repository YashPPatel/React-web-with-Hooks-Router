import React from 'react'
import './Services.css'
import gold from '../../assets/i12-gold.png'
import graphite from '../../assets/i12-graphite.png'
import pacific from '../../assets/i12-pacificblue.png'
import silver from '../../assets/i12-silver.png'
import alogo from '../../assets/alogo.png'
import './Servicesupdate'

export default function Services() {
  return (
    <>
      <div class="containerservice">
        <div class="card">
          <div class="phonebackground">
            <div class="gradients">
              <div class="gradient second" color="gold"></div>
              <div class="gradient" color="graphite"></div>
              <div class="gradient" color="pacificblue"></div>
              <div class="gradient" color="silver"></div>
            </div>
            <h1 class="iphone">APPLE</h1>
            <img src={alogo} alt="apple" class="logo"/>
              <a href="#" class="share"><i class="fas fa-share-alt"></i></a>

              <img src={gold} alt="goldcolor" class="phone show" color="gold"/>
                <img src={graphite}alt="graphitecolor" class="phone" color="graphite"/>
                  <img src={pacific} alt="paceficbluecolor" class="phone" color="pacificblue"/>
                    <img src={silver} alt="silvercolor" class="phone" color="silver"/>
                      

            </div>
                      <div class="info">
                        <div class="phoneName">
                          <div>
                            <h1 class="big">Iphone 12 Max Pro</h1>
                            <span class="new">new</span>
                          </div>
                          <h3 class="small">The best smartphone it's range</h3>
                        </div>
                        <div class="description">
                          <h3 class="title">Product Info</h3>
                          <p class="text">5G speed. A14 Bionic, the fastest chip in a smartphone. And a Pro camera system that takes low-light photography to the next level - with an even bigger jump on iphone 12 Pro Max.</p>
                        </div>
                        <div class="color-container">
                          <h3 class="title">Color</h3>
                          <div class="colors">
                            <span class="color active" primary="#fdeed9" color="gold"></span>
                            <span class="color" primary="#656160" color="graphite"></span>
                            <span class="color" primary="#465d69" color="pacificblue"></span>
                            <span class="color" primary="f6f6f2" color="silver"></span>

                          </div>
                        </div>
                        
                        <div class="buy-price">
                          <a href="#" class="buy"><i class="fas fa-shopping-cart"></i>Add to card</a>
                          <div class="price">
                            <i class="fas fa-dollar-sign"></i>
                            <h1>799.99</h1>
                          </div>
                        </div>
                      </div>
        </div>
    </div>  
        </>
   )
}
