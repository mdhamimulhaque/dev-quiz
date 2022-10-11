import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizzes = () => {
    const quizzes = useLoaderData();

    console.log(quizzes)
    return (
        <div>
            Quiz
        </div>
    );
};

export default Quizzes;