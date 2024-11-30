import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='mx-auto justify-center'>
            <div className='flex items-center text-lg gap-3 justify-center  bg-gray-200 px-4 py-2 rounded-xl'>
                <button className='btn bg-red-500 text-white border-none'>Latest</button>
                <Marquee className='text-xl font-semibold text-white' speed={100} pauseOnHover={true}>
                    <Link>
                        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti, cum doloremque delectus sed voluptatibus sit. Sequi nam ipsa illo .
                    </Link>
                </Marquee>

            </div>
        </div>
    );
};

export default LatestNews;