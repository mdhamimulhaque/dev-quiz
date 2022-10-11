import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const blogs = [
        {
            title: "What is the purpose of react router?",
            ans: ""
        },
        {
            title: "How does context api works?",
            ans: ""
        },
        {
            title: "What is useRef?",
            ans: ""
        },
    ]
    return (
        <section>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-indigo-700">
                            Tech Blog
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">Read Blogs</span>
                        </span>{' '}
                        and improve your knowledge and skills.
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Get update all the time...
                    </p>
                </div>
                <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
                    <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            11 Oct 2022
                        </p>
                        <Link
                            to="/"
                            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-indigo-700"
                            aria-label="Read article"
                            title="Nori grape silver beet broccoli kombu beet"
                        >
                            Nori grape silver beet broccoli kombu beet
                        </Link>
                        <p className="max-w-xs mx-auto mb-2 text-gray-700">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque.
                        </p>
                        <Link
                            to="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-700 hover:text-deep-indigo-500"
                        >
                            Read more

                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Blog;