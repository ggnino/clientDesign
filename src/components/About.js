import React from 'react'
import {Link} from 'react-router-dom';
import img1 from '../imgs/about.png'

function About() {
    //Render component
    return (
        <div className='container main-content' >
            
            <div className='container'id='about'>
               <img className='img grid-item' src={img1} alt='about-img' /> <p className='grid-item'>The <span>Rozay </span>shop is a family owned bussiness,
               operating in the beautiful city of Miami. Since we opened our doors 5 years ago, we have been dedicated to not only
               insuring our clients with great products and services. But to legitmately bring happiness to each and every 
               customer that contacts us via walk-in/online, or however we crossed paths. From a simple surprise gift to your 
               significant other, to parties and events, we got you covered. With bouqets,roses,flowers, ranging from all colors,
               custom designs and even making them edible(sweetness up to customer taste). Not only we offer beautiful flowers,
               but we also offer a decorative and catering service. For more information, <Link to='/contact'>contact us.</Link></p>
            </div>
            
        </div>
    )
}

export default About
