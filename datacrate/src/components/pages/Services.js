import React from 'react'
import ScriptTag from 'react-script-tag';
import './Services.css'
import gold from '../../assets/i12-gold.png'
import graphite from '../../assets/i12-graphite.png'
import pacific from '../../assets/i12-pacificblue.png'
import silver from '../../assets/i12-silver.png'
import alogo from '../../assets/alogo.png'


export default function Services() {
  
            const colors = document.querySelectorAll('.color');
            const phones = document.querySelectorAll('.phone');
            const gradients = document.querySelectorAll('.gradient');
            //const phoneBg = document.querySelector('.phonebackground');

            let prevColor = "gold";
            let animationEnd = true;

            
            
            function changeColor(){
                if(!animationEnd) return;
                let primary = this.getAttribute('primary');
                let color = this.getAttribute('color');
                let phone = document.querySelector(`.phone[color="${color}"]`);
                let gradient = document.querySelector(`.gradient[color="${color}"]`);
                let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);
            
                if(color === prevColor) return;
            
                colors.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
            
                document.documentElement.style.setProperty('--primary', primary);
                
                phones.forEach(s => s.classList.remove('show'));
                phone.classList.add('show');
            
                gradients.forEach(g => g.classList.remove('first', 'second'));
                gradient.classList.add('first');
                prevGradient.classList.add('second');
            
                prevColor = color;
                animationEnd = false;
            
                gradient.addEventListener('animationend', () => {
                    animationEnd = true;
                })
            }
            
            colors.forEach(c => c.addEventListener('click', changeColor));
            
            
            // let x = window.matchMedia("(max-width: 1000px)");
            
            // function changeHeight(){
            //     if(x.matches){
            //       console.warn(phones[0])
            //         let phoneHeight = phones[0].offsetHeight;
            //         console.log(phoneHeight)
            //         phoneBg.style.height = `${phoneHeight * 0.9}px`;
            //     }
            //     else{
            //         phoneBg.style.height = "475px";
            //     }
            // }
            
            // changeHeight();
            
            // window.addEventListener('resize', changeHeight)
          
  return (
    <div>
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
                          <h3 class="title">Colors</h3>
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
        </div>
   )
}
