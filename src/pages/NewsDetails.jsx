import React from 'react';
import Heder from '../components/Heder';
import RightNav from '../components/layout-components/RightNav';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {


    const data = useLoaderData();
    const news = data.data[0]
    

    return (
        <div>
            <header>
                <Heder></Heder>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h1 className='text-xl font-semibold mb-3'>Dragon News</h1>
                    <div className="card bg-base-100 shadow-xl text-start">
                        <figure className="px-10 pt-10">
                        <img src={news?.image_url} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back To Category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className='col-span-3'>
                    <RightNav>

                    </RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;