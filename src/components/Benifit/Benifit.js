import React from 'react';
import { ArrowCircleRightIcon } from '@heroicons/react/solid'

const Benifit = (props) => {
    const { benifit } = props;
    return (
        <div className='flex items-center'>
            <ArrowCircleRightIcon className='w-6 h-6 text-green-500 mr-4'></ArrowCircleRightIcon>
            <p>{benifit}</p>
        </div>
    );
};

export default Benifit;