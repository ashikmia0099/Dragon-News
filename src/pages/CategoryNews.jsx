import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/layout-components/NewsCard';

const CategoryNews = () => {


    const {data: news} = useLoaderData();
    

    return (
        <div>
            <h2 className='text-xl font-semibold '>Dragon News Home</h2>

            <h1> {news.length} </h1>

            <div>
                {
                    news.map(singlenews => <NewsCard key={singlenews._id} news={singlenews} ></NewsCard>)
                }

            </div>

            
        </div>
    );
};

export default CategoryNews;


