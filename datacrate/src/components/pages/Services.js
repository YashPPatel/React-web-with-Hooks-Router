import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import '../pages/Services.css'
import PlanetOne from '../../assets/planet.svg';
import PlanetTwo from '../../assets/planet-2.svg';
import PlanetThree from '../../assets/planet-3.svg';
import PlanetFour from '../../assets/planet-4.svg';
import podvideo from '../../videos/video-5.mp4'
import airpod from '../../assets/airpod.png'
import text from '../../assets/img-22.png'
import gold from '../../assets/i12-gold.png'
import graphite from '../../assets/i12-graphite.png'
import pacific from '../../assets/i12-pacificblue.png'
import silver from '../../assets/i12-silver.png'
import alogo from '../../assets/alogo.png'
import large from '../../videos/video-6.mp4'
import mwatch from '../../assets/miwatch.png'
import {PieChart,Pie,ResponsiveContainer} from 'recharts'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const Watch = styled.div`
position: relative;
width: 100%;
height: 607px;
background: #000;
display: grid;
padding-top: 50px;
grid-template-columns: 2fr 2fr;

@media (max-width: 1000px){
  grid-template-columns: repeat(1,1fr);

}
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 3px;
    left: 10px;
  }

  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }

  ${Image}:nth-child(3) {
    top: 336px;
    left: 50px;
  }

  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 75px;
  }
  @media (max-width: 1000px){
    display:none
  }
`;


const Hero = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];




  const colors = document.querySelectorAll('.color');
  const phones = document.querySelectorAll('.phone');
  const gradients = document.querySelectorAll('.gradient');
  //const phoneBg = document.querySelector('.phonebackground');

  let prevColor = "gold";
  let animationEnd = true;



  function changeColor() {
    if (!animationEnd) return;
    let primary1 = this.getAttribute('primary1');
    let color = this.getAttribute('color');
    let phone = document.querySelector(`.phone[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    if (color === prevColor) return;


    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary1', primary1);

    phones.forEach(s => s.classList.remove('show'));
    phone.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = true;

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
    <>
      <Section>
        <Container>
          <ColumnLeft>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Let's WALKTHROUGH
            </motion.h1>
            <motion.p
              variants={fadeLeft}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1 }}
            >
              Journey to the TECHNOGLOB
            </motion.p>
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.95,
                backgroundColor: '#67F6E7',
                border: 'none',
                color: '#000'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5 } }}
            >
              <a href="#airdops" style={{ textDecoration: "none", color: "#fff" }}>Get Started</a>
            </Button>

          </ColumnLeft>
          <ColumnRight>
            <Image
              src={PlanetOne}
              alt='planet'
              whileTap={{ scale: 0.5 }}
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            />
            <Image
              src={PlanetTwo}
              alt='planet'
              whileTap={{ scale: 0.6 }}
              drag={true}
              dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            />
            <Image
              src={PlanetThree}
              alt='planet'
              whileTap={{ scale: 0.8 }}
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 40 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            />
            <Image
              src={PlanetFour}
              alt='planet'
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            />
          </ColumnRight>
        </Container>
      </Section>

      <div id="airdops" className="bgservice">
        <div class="containerservice">
          <div class="card1">
            <div class="phonebackground">
              <div class="gradients">
                <div class="gradient second" color="gold"></div>
                <div class="gradient" color="graphite"></div>
                <div class="gradient" color="pacificblue"></div>
                <div class="gradient" color="silver"></div>
              </div>
              <h1 class="iphone">APPLE</h1>
              <img src={alogo} alt="apple" class="logo" />
              <a href="#" class="share"><i class="fas fa-share-alt"></i></a>

              <img src={gold} alt="goldcolor" class="phone show" color="gold" />
              <img src={graphite} alt="graphitecolor" class="phone" color="graphite" />
              <img src={pacific} alt="paceficbluecolor" class="phone" color="pacificblue" />
              <img src={silver} alt="silvercolor" class="phone" color="silver" />


            </div>
            <div class="info">
              <div class="phoneName">
                <div>
                  <h1 class="big">Iphone 12 Max Pro</h1>
                  <span class="new">new</span>
                </div>
                <h3 class="small">The best smartphone it's in range</h3>
              </div>
              <div class="description">
                <h3 class="title">Product Info</h3>
                <p class="text">5G speed. A14 Bionic, the fastest chip in a smartphone. And a Pro camera system that takes low-light photography to the next level - with an even bigger jump on iphone 12 Pro Max.</p>
              </div>
              <div class="color-container"  >
                <h3 class="title">Colors</h3>
                <div class="colors">
                  <span class="color active" primary1="#fdeed9" color="gold"></span>
                  <span class="color" primary1="#656160" color="graphite"></span>
                  <span class="color" primary1="#465d69" color="pacificblue"></span>
                  <span class="color" primary1="f6f6f2" color="silver"></span>

                </div>
              </div>

              <div class="buy-price">
                <a href="#" class="buy" id="color"><i class="fas fa-shopping-cart"></i>Add to cart</a>
                <div class="price">
                  <i class="fas fa-dollar-sign"></i>
                  <h1>799.99</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Watch data-aos="fade-up">

        <div className="card_box">
          <div className="card">
            <div className="img_box">
              <img src={airpod} className="pod_img" />
            </div>
            <div className="content_box">
              <h2>Airpod</h2>
              <div className="pod_color">
                <h3>Color :</h3>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <a href="#">Buy Now</a>
            </div>
          </div>
        </div>
        <div className="text_box">
          <a href={podvideo} style={{ textDecoration: "none", color: "#fff", fontSize: "1.8em" }} target="_blank">Watch the product film <i className="far fa-play-circle" /></a>
          <img src={text} style={{ paddingLeft: "0px" }} />
          <div className="pod_info">
            <p>More than</p><br></br>
            <span style={{ fontSize: "2.8em", fontWeight: "500" }}>24</span>&nbsp;
            <span>hr</span>
            <p>of listening time</p>
            <p>with multiple</p>
            <p>additioal charges</p>
            <p>in the case</p>
            
          </div>
        </div>
      </Watch>
      
      <div className="mi_watch">
        <div className="left_side">
          <p style={{textAlign:"center",fontSize:"2.8em",paddingTop:"20px"}}>Mi WATCH REVOLVE</p>
          <ResponsiveContainer width={500} height="50%" >
            <PieChart width={730} height={250}>
              <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
              <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
          </ResponsiveContainer>
          
            <p style={{paddingLeft:"30%",fontSize:"1.1em",paddingTop:"0px"}}>YEAR GROTH</p>
            <p style={{fontSize:"1.6em",paddingTop:"20px",paddingLeft:"20px"}}>1.39 AMOLED Screen</p>
            <p style={{fontSize:"1.6em",paddingTop:"20px",paddingLeft:"20px"}}>5ATM Water Resistant</p>
            <p style={{fontSize:"1.6em",paddingTop:"20px",paddingLeft:"20px"}}>VO2 Max,First Beat Motion Algorithm</p>
            <p style={{fontSize:"1.6em",paddingTop:"20px",paddingLeft:"20px"}}>Stress & Sleep Management, Chrome Silver</p>
          
        </div>
        <div className="right_side">
         
          <img src={mwatch} style={{width:"85%",height:"70%"}} />

        </div>
      </div>






      <div style={{height:"30vh"}}>
        <video controls loop> <source src={large} type="video/mp4" /></video>
      </div>




    </>
  );
};

export default Hero;
