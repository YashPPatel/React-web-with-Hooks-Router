import React,{useEffect} from 'react'
import '../../App.css'
import '../pages/Products.css'
import video1 from '../../videos/video-3.mp4'
import iimg from '../../assets/img-10.png'
import iimg1 from '../../assets/img- 11.png'
import iimg2 from '../../assets/img-12.jpg'
import iimg3 from '../../assets/img-13.png'
import iimg4 from '../../assets/img-14.png'
import iimg5 from '../../assets/img-15.png'
import iimg6 from '../../assets/img-16.png'
import iimg7 from '../../assets/img-17.png'
import {Link} from 'react-router-dom'
import Footer from '../Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Products() {

    useEffect(() => {
        Aos.init({duration:2500});
    }, [])
    return (
        <>
            <div className="container">

                <div className="left_side">

                    <Link to="./services"><img src={iimg} className="pimg" alt="techimg"/></Link>

                </div>

                <div className="right_side">

                    <h1 style={{color:'#fff',textAlign:'center'}}>The Smart Watch</h1>
                    <p style={{lineHeight:'1.6',paddingTop:'20px'}}>The elegant modern Smart watch.Available in three different colors.Amazing performance and water resistant up to 5 meters underwater.</p>
                    <h3 style={{color:'#fff',paddingTop:'20px'}}>Starting at $399</h3>
                    <h2 style={{color:'#0096ff',paddingTop:'20px',textAlign:'center'}}>About The Product</h2>
                    <h3 style={{color:'#fff',paddingTop:'20px'}}>Comes with SW chip</h3>
                    <p style={{color:'#808080',paddingTop:'10px'}}>Amazing watch with great power.</p>
                    <h3 style={{color:'#fff',paddingTop:'20px'}}>Inbuilt ECG</h3>
                    <p style={{color:'#808080',paddingTop:'10px'}}>Amazing watch with great power.</p>
                    <h3 style={{color:'#fff',paddingTop:'20px'}}>AMOLED Display</h3>
                    <p style={{color:'#808080',paddingTop:'10px'}}>Amazing watch with great power.</p>

                </div>

            </div>

            <div className="container1">

                <div className="left_side">

                <Link to="./services"><img src={iimg1} className="pimg" alt="techimg"/></Link>

                </div>

                <div className="right_side">

                    <h1 style={{color:'#000',textAlign:'center'}}>What Is Alexa?</h1>
                    <p style={{color:'#000',lineHeight:'1.6',paddingTop:'20px'}}>Alexa is Amazon’s cloud-based voice service available on hundreds of millions of devices from Amazon and third-party device manufacturers. With Alexa, you can build natural voice experiences that offer customers a more intuitive way to interact with the technology they use every day.</p>
                    <h3 style={{color:'#000',paddingTop:'20px'}}>Starting at $38.28</h3>
                    <h2 style={{color:'#0096ff',paddingTop:'25px',textAlign:'center'}}>What Can You Build with Alexa? </h2>
                    <h3 style={{color:'#000',paddingTop:'20px'}}>Create Alexa Skills</h3>
                    <p style={{color:'#808080',paddingTop:'10px'}}>Amazing device with great power.</p>
                    <h3 style={{color:'#000',paddingTop:'20px'}}>Build Alexa Devices</h3>
                    <p style={{color:'#808080',paddingTop:'10px'}}>Amazing device with great power.</p>
                    <h3 style={{color:'#000',paddingTop:'20px'}}>Develop Enterprise Solutions</h3>
                    <p style={{color:'#808080',paddingTop:'10px'}}>Amazing device with great power.</p>
                    
                </div>

            </div>

            <div className="simplecon">

                <p>iPad Pro</p>
                <p>Supercharged by the Apple M1 chip</p>
                <Link to="./services"><img src={iimg2} alt="techimg"/></Link>

            </div>

            <div className="simplecon1">

                <p>iPhone 12</p>
                <p>Blast Past Fast</p>
                <h4>From $780 before trade-in</h4>
                <Link to="./services"><img src={iimg3} alt="techimg"/></Link>
                
            </div><br/>
            
            <div className="blockcon" data-aos="fade-up">

                <div className="left_side">

                    <p>OnePlus TV U Series 55U1</p>
                    <h4>4K With 93% Colour Gamut</h4>
                    <h4>6.9mm Ultra Slim</h4>
                    <h4>Gamma Engine picture quality enhancer</h4>
                    <h4>From ₹52 999 <s>₹58 999</s></h4>
                    <Link to="./services"><img src={iimg4} alt="techimg"/></Link>

                </div>

                <div className="right_side">

                    {/* <p>1m 63cm (65") QN800A Neo QLED 8K Smart TV</p> 
                    <h4>EMI starts from ₹ 18358.18/ month</h4>
                    <h4>Quantum Matrix Technology Pro with Mini LED</h4>
                    <h4>Neo Quantum Processor 8K with AI Upscaling</h4>
                    <Link to="./services"><img src={iimg5} alt="techimg"/></Link>  */}

                    <video autoPlay loop muted>
                        <source src={video1} type="video/mp4" />
                    </video>

                </div>

            </div>

            <div className="blockcon1" data-aos="fade-up">

                <div className="left_side">

                    <p>Galaxy Buds Pro</p>
                    <h4>Control Active Noise Canceling level</h4> 
                    <h4>for immersive sound experience</h4>
                    <h4>Bring studio sound to you from powerful </h4>
                    <h4>2-way speakers with sound by AKG</h4>
                    <h4>No Cost EMI starts from ₹ 2397.41/ month</h4>
                    <Link to="./services"><img src={iimg6} alt="techimg"/></Link> 

                </div>
        
                <div className="right_side">

                    <p>OnePlus 9 Pro 5G</p>
                    <h4>Hasselblad Camera for Mobile</h4>
                    <h4>120 Hz Fluid Display Qualcomm®</h4>
                    <h4>Snapdragon™ 888 and 5G Premium Design</h4>
                    <Link to="./services"><img src={iimg7} alt="techimg"/></Link>

                </div>

            </div>

           <Footer /> 
        </>
    )
}
