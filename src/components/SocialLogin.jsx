import React from 'react';
import { FaGoogle,FaGithub } from "react-icons/fa";



const SocialLogin = () => {
    return (
        <div className='space-y-2 mt-5'>
            <button className='btn w-full'> <FaGoogle /> Login With Google</button>
            <button className='btn w-full'> <FaGithub /> Login With Github</button>
        </div>
    );
};

export default SocialLogin;