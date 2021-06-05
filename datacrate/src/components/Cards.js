import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img9 from '../assets/img-9.jpg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
import img4 from '../assets/img-4.jpg'
import img5 from '../assets/img-5.jpg'


export default function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!!!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={img9}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle "
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem 
                            src={img2}
                            text="Travel through the Island of Bali in a Private Cruise"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src={img3}
                            text="Ocean is more ancient than the mountains and freighted with the memories and the dreams of Time "
                            label="Deep-Sea"
                            path="/services"
                        />
                        <CardItem 
                            src={img4}
                            text="The only way to prove you are a good sport is to lose "
                            label="Adventure-sports"
                            path="/services"
                        />
                        <CardItem 
                            src={img5}
                            text="Some of your best ideas come when you're on vacation "
                            label="Vacation"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}
