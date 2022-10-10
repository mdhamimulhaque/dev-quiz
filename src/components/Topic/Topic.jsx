import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Test from '../Test/Test';

const Topic = () => {
    const quizzesTopic = useLoaderData();

    return (
        <section>
            <Banner />
            <div className="test_area my-32">
                <h2 className='text-center text-4xl font-bold mb-20'>Quiz <span className='text-indigo-700'>Topic</span> Zone</h2>
                <div className="test_container flex justify-center flex-wrap gap-5 my-10">
                    {
                        quizzesTopic?.data.map(quizTopic =>
                            <Test key={quizTopic.id}
                                quizTopic={quizTopic}
                            />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Topic;