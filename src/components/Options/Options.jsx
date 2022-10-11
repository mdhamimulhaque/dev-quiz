import React from 'react';
import { toast } from 'react-toastify';

const Options = ({ quizQn, option }) => {
    const { correctAnswer } = quizQn;

    const handleRightAnswer = (option) => {
        if (option === correctAnswer) {
            toast.success('Your answer is currect', { autoClose: 1000 })
        } else {
            toast.error('Sorry..!!! Wrong answer!', { autoClose: 1000 })
        }
    }

    return (
        <div className="input_box flex justify-center items-center">
            <input
                type="radio"
                name="radio-2"
                className="radio radio-primary mr-3"
                onClick={() => handleRightAnswer(option)}

            />
            <label htmlFor="1" >{option}</label>
        </div>
    );
};

export default Options;