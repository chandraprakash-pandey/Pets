import React from 'react'
// import {link, NavLink} from 'react-router-dom' // we use 'link' instead of 'a' tag  cuz agar a tag use karenge toh page refresh hoga, but link use karenge toh page refresh nahi hoga. Link mai hum href k jaga pe "to" use krte hai.

function Header() {
    return (
        <header className='lg:w-full text-[#212548] lg:h-16 bg-slate-100 lg:border-b-4 lg:border-b-[#212548] rounded-lg'>
            <div>
                <div>
                    <img src="./images/paw.png" alt="" className='w-10 h-10' />
                    <img src="./" alt="" />
                    <a href="./"></a>
                </div>
            </div>
        </header>
    )
}

export default Header
