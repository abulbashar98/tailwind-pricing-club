import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {


    const routes = [
        { name: 'home', id: 1, link: './home' },
        { name: 'shop', id: 2, link: './shop' },
        { name: 'deals', id: 3, link: './deals' },
        { name: 'contact', id: 4, link: './contact' },
        { name: 'coupons', id: 5, link: './coupons' }
    ]




    // 1st way of doing it is the old way
    return (
        <nav>
            {/* <ul>
                <li><a href=""></a>Home</li>
                <li><a href=""></a>Shop</li>
                <li><a href=""></a>Deals</li>
                <li><a href=""></a>Contact</li>
                <li><a href=""></a>Coupons</li>
            </ul> */}

            <ul>
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