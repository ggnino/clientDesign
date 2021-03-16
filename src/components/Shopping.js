import React from 'react'
import img1 from '../imgs/product1.jpg'
import img2 from '../imgs/product2.jpg'
import img3 from '../imgs/product3.jpg'
import img4 from '../imgs/product4.jpg'
import img5 from '../imgs/product5.jpg'
import img6 from '../imgs/product6.jpg'

function Shopping() {
    //Render component
    return (
        <div className='container main-content' id='shop'>
            
            <ul className='grid-container'>
                <li className='grid-item'><img className='img' src={img1} alt='product-img' />Product-1<button>Buy</button></li>
                <li className='grid-item'><img className='img' src={img2} alt='product-img' />Product-2<button>Buy</button></li>
                <li className='grid-item'><img className='img' src={img4} alt='product-img' />Product-3<button>Buy</button></li>
                <li className='grid-item'><img className='img' src={img5} alt='product-img' />Product-4<button>Buy</button></li>
                <li className='grid-item'><img className='img' src={img3} alt='product-img' />Product-5<button>Buy</button></li>
                <li className='grid-item'><img className='img' src={img6} alt='product-img' />Product-6<button>Buy</button></li>
            </ul>
        </div>
    )
}

export default Shopping
