import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { name: 'home', id: 1, link: '/home' },
        { name: 'shop', id: 2, link: '/shop' },
        { name: 'deals', id: 3, link: '/deals' },
        { name: 'contact', id: 4, link: '/contact' },
        { name: 'coupons', id: 5, link: '/coupons' }
    ]




    // 1st way of doing it is the old way
    return (

        // <nav>
        //     {/* <ul>
        //         <li><a href=""></a>Home</li>
        //         <li><a href=""></a>Shop</li>
        //         <li><a href=""></a>Deals</li>
        //         <li><a href=""></a>Contact</li>
        //         <li><a href=""></a>Coupons</li>
        //     </ul> */}
        //     </nav>

        <nav className='bg-red-400'>

            <div onClick={() => setOpen(!open)} className='w-8 h-8 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>

            <ul className={`md:flex md:p-4 justify-center md:static absolute bg-red-400 w-full duration-100 ease-in ${open ? 'top-[30px]' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link
                        route={route}
                        key={route.id}
                    ></Link>)
                }
            </ul>


        </nav>
    );
};

export default Navbar;