import React from 'react';
import Options from '../Options/Options';

const Quiz = ({ quizQn }) => {

    const { question, options } = quizQn;

    return (
        <section className='quiz_wrapper my-10 bg-gray-900 text-white py-20'>
            <h2 className='text-center text-2xl font-semibold mb-10'>{question}</h2>
            <div className="quiz_options_box flex flex-wrap gap-8 px-5 justify-start  lg:justify-center">
                {options.map((option, index) => <Options key={index} quizQn={quizQn} option={option} />)}
            </div>
        </section>
    );
};

export default Quiz;