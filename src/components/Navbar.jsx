import React, { useContext } from 'react';

import profileicon from '../assets/user.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const {user,LogOut} = useContext(AuthContext);
    return (
        <div className='mt-4'>
            <nav className='flex justify-between items-center'>
                <div> {user && user.email} </div>
                <div className=''>
                    <ul className='flex space-x-5'>
                        <Link to={'/'} className='text-[#706F6F] text-lg'>Home</Link>
                        <Link  className='text-[#706F6F] text-lg'>About</Link>
                        <Link  className='text-[#706F6F] text-lg'>Career</Link>
                       
                    </ul>
                </div>
                {
                    user && user?.email ?
                 (<button onClick={LogOut}  className='btn bg-[#403F3F] text-white px-10'>Logout</button>) : 
                    (<div className='flex items-center gap-5'>
                        <img src={profileicon} alt="" />
                        <Link to='/auth/login' className='btn bg-[#403F3F] text-white px-10'>Login</Link>
                    </div>)
                }
                    
            </nav>
        </div>
    );
};

export default Navbar;