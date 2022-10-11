import React from 'react';
import { Link } from 'react-router-dom';
import Post from '../Post/Post';

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "What is the purpose of react router?",
            ans: "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.",
            date: ' 11 Oct 2022'
        },
        {
            id: 2,
            title: "How does context api works?",
            ans: "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to prop drilling or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.",
            date: ' 11 Oct 2022'
        },
        {
            id: 3,
            title: "What is useRef?",
            ans: "The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.",
            date: ' 11 Oct 2022'
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
                    {
                        blogs.map(post => <Post post={post} key={post.id} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;