import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {

    const pricingOptions = [
        {
            name: 'regular', id: 1, price: 15.99, benifits: [
                'everything on free',
                'super-sunday offers',
                'deal-of-the-month',
                '15% discount on sales'
            ]
        },
        {
            name: 'premium', id: 2, price: 19.99, benifits: [
                'everything on regular',
                'super-sunday offers',
                'lucky coupons',
                'deal-of-the-month',
                '20% discount on sales'
            ]
        },
        {
            name: 'regular', id: 3, price: 0, benifits: [
                'priority of customer satisfaction',
                'sunday-deals',
                'deal-of-the-month',
                '5% discount on sales'
            ]
        }
    ]

    return (
        <div className='bg-yellow-200 p-4 mt-4 '>
            <h1 className='text-6xl'>Welcome to my pricing club</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem corporis, magni unde nemo vitae! Sint sapiente, nisi alias enim, libero error officia adipisci amet eum hic eaque nulla magni.</p>
            <div className='md:grid grid-cols-3 mt-4 gap-3'>
                {
                    pricingOptions.map(option => <PricingOption
                        option={option}
                        key={option.id}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing; 