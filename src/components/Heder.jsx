import React from 'react';
import moment from 'moment';
import logo from '../assets/logo.png'

const Heder = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 my-5'>
           <div className='justify-center items-center gap-2 my-5 text-center'>
           <img src={logo} alt="" />
            <p className='text-lg text-gray-400 my-2'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-gray-500 font-medium'>{moment().format('LLLL')}</p>
           </div>
        </div>
    );
};

export default Heder;