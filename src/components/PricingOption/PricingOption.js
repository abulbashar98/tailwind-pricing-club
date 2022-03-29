import React from 'react';
import Benifit from '../Benifit/Benifit';

const PricingOption = (props) => {
    const { name, price, benifits } = props.option;
    return (
        <div className='rounded-lg bg-white p-4'>
            <h1 className='bg-yellow-200 p-3 rounded text-2xl font-bold'>{name}</h1>
            <p className='text-4xl font-mono font-bold'>{price}<span className='text-gray-500'>/mo</span></p>
            <div>
                <h1 className='text-xl text-left'>Benifits:</h1>
                {
                    benifits.map(benifit => <Benifit benifit={benifit}></Benifit>)
                }
            </div>
        </div>
    );
};

export default PricingOption;