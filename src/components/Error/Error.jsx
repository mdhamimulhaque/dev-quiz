import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section className="flex items-center justify-center h-full p-16 ">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-indigo-700">
                        <span className="sr-only ">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 ">But don't worry, you can find plenty of other things on our homepage.</p>
                    <Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded bg-indigo-700 text-white hover:bg-gray-900">Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default Error;