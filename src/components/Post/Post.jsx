import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {

    const [details, setDetails] = useState(!false);

    const handlePostDetails = () => {
        setDetails(!details)
    }

    return (
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                {post?.date}
            </p>
            <Link
                to="/"
                className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-indigo-700"
                aria-label="Read article"
                title="Nori grape silver beet broccoli kombu beet"
            >
                {post?.title}
            </Link>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
                {details ? post?.ans.slice(0, 100) + "..." : post?.ans}

            </p>
            <Link

                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-700 hover:text-deep-indigo-500"
                onClick={handlePostDetails}
            >
                Read Details
            </Link>
        </div>

    );
};

export default Post;