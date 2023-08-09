import React, {useState} from 'react';
import data from '../../../JSON/db.json'

// export const faqData = [
//   {
//     id: 1,
//     question: 'What materials are thinkitchen made of ?',
//     answer: 'Answer to Question 1.',
//   },
//   {
//     id: 2,
//     question: 'What is the shipping cost of thinkitchen ?',
//     answer: 'Answer to Question 2.',
//   },
//   {
//     id: 3,
//     question:
//       'What is the minimum and maximum price range of thinkitchen products ?',
//     answer: 'Answer to Question 3.',
//   },
//   {
//     id: 4,
//     question: 'How many products are available in thinkitchen ?',
//     answer: 'Answer to Question 4.',
//   },
//   {
//     id: 5,
//     question: 'What are the best selling products in thinkitchen ?',
//     answer: 'Answer to Question 5.',
//   },
// ];

export const Accordian = ({question, answer}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div onClick={() => setShow(!show)} className="faq-line cursor-pointer">
        <div  className="flex justify-between items-center text-sm py-2">
          <div className="question font-bold">{question}</div>
          <div
            onClick={() => setShow(!show)}
            className="text-xl cursor-pointer select-none"
          >
            {show ? '-' : '+'}
          </div>
        </div>
        <div
          className={`answer font-medium text-sm pb-2 ${
            show ? 'block' : 'hidden'
          } `}
        >
          {answer}
        </div>
        <div className="border-b-2 border-gray"></div>
      </div>
    </>
  );
};
