import React from 'react'
// import {link, NavLink} from 'react-router-dom' // we use 'link' instead of 'a' tag  cuz agar a tag use karenge toh page refresh hoga, but link use karenge toh page refresh nahi hoga. Link mai hum href k jaga pe "to" use krte hai.
import paw from '../images/paw.png' // This is how to import images in react. We can also use 'require' to import images in react.
import searchbar from '../images/search.png'
import cart from '../images/cart.png'

function Header() {
    return (
        <header className='lg:w-full text-[#212548] lg:h-20 bg-slate-100 lg:border-b-4 lg:border-b-[#212548] rounded-lg flex justify-between items-center'>
            <div className='flex items-center h-full w-[40%] justify-between'> 
                <img src={paw} alt="Paw" className='h-10'/>
                <span className='font-semibold'>HOME</span>
                <span className='font-semibold'>CATEGORIE</span>
                <span className='font-semibold'>BLOG</span>
                <span className='font-semibold'>CONTACT</span>
            </div>
            <div className='flex gap-4'>
                <img src={searchbar} alt="Search Bar" className='h-8'/>
                <img src={cart} alt="Cart" className='h-8'/>
            </div>
        </header>
    )
}

export default Header
