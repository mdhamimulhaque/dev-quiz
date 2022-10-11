import React from 'react';
import { Link } from 'react-router-dom';

const Test = ({ quizTopic }) => {
    const { id, logo, name, total } = quizTopic;
    return (
        <section className='flex w-full px-5 flex-col justify-center bg-slate-50 max-w-xs  shadow-md rounded-xl sm:px-12 '>
            <img src={logo} alt="" className="w-32 h-32 mx-auto rounded-full aspect-square" />
            <div className="space-y-4 text-center divide-y divide-gray-700">
                <div className="my-2 space-y-1">
                    <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
                    <p className="px-5 text-xs sm:text-base dark:text-gray-400">Total Quiz: {total}</p>
                </div>

                <div className="mt-5 pb-5">
                    <Link to={`/test/${id}`}>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-700 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                        >
                            Start Test

                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Test;