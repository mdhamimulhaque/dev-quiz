import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quizzes = useLoaderData();
    const { id, logo, name, questions } = quizzes.data;
    return (
        <section className='quizzes_container'>
            <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold order-2 lg:order-1">{name}</h2>
                        <div className="space-x-2 text-center py-2 lg:py-0 w-32 order-1 lg:order-2">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="quiz_container lg:w-3/4 mx-auto">
                {questions.map(quizQn => <Quiz key={quizQn.id} quizQn={quizQn} />)}
            </div>
        </section>
    );
};

export default Quizzes;