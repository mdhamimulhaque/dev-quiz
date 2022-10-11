import React from 'react';

const Options = ({ quizQn, option }) => {

    const { question, options, id, correctAnswer } = quizQn;
    // console.log(quizQn)

    return (
        <div className="input_box flex justify-center items-center">
            <input
                type="radio"
                name="radio-2"
                className="radio radio-primary mr-3"

            />
            <label htmlFor="1" >{option}</label>
        </div>
    );
};

export default Options;