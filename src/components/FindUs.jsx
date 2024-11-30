import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";




const FindUs = () => {
    return (
        <div className='my-5'>
            <h2 className='text-xl font-semibold my-3'>Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-100 ">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start"><FaTwitter></FaTwitter> X Space</button>
                <button className="btn join-item justify-start"><FaXTwitter></FaXTwitter> Twitter</button>
            </div>
        </div>
    );
};

export default FindUs;