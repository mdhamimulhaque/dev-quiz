import React, { useState } from 'react';
import Options from '../Options/Options';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';

const Quiz = ({ quizQn }) => {
    const { question, options, correctAnswer } = quizQn;

    const [answer, setRightAnswer] = useState('');

    const handleShowRightAnswer = (ans) => {
        setRightAnswer(ans);
        toast.success(ans, { autoClose: 1000 })
    }

    return (
        <section className='quiz_wrapper my-10 bg-gray-900 text-white pb-20'>

            <span
                className="show_answer flex justify-between bg-indigo-700 px-4 py-2 mb-20 "
                onClick={() => handleShowRightAnswer(correctAnswer)}
            >
                <p className='text-green-300'><strong>{answer}</strong></p>
                <div className="icon_box flex cursor-pointer">
                    <span>Answer</span> <EyeIcon className="h-6 w-6 text-white ml-2" ></EyeIcon>
                </div>
            </span>

            <h2 className='text-center text-2xl font-semibold mb-10'>{question}</h2>
            <div className="quiz_options_box flex flex-wrap gap-8 px-5 justify-start  lg:justify-center">
                {options.map((option, index) =>
                    <Options
                        key={index}
                        quizQn={quizQn}
                        option={option}
                    />)}
            </div>
        </section>
    );
};

export default Quiz;