import React, { useState } from 'react';
import '../style/Faq.css';

export default function Faq(){
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do live tutoring sessions work?",
      answer: "Live tutoring sessions connect you with expert tutors in real-time via video calls. You can schedule sessions, ask questions, and get personalized guidance on your chosen subjects."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time through your account settings. There are no long-term commitments, and you’ll have access until the end of your billing cycle."
    },
    {
      question: "Can I upload my own learning materials?",
      answer: "Absolutely! You can upload your own learning materials, such as notes or practice questions, to personalize your study plan and get tailored recommendations."
    },
    {
      question: "How do I track my learning progress?",
      answer: "You can track your learning progress through the dashboard, which provides detailed insights into your performance, quiz results, and completed lessons."
    },
    {
      question: "How do I access past exam questions?",
      answer: "Past exam questions are available in the question bank. You can filter by subject, exam type (e.g., JAMB, WAEC), and difficulty level to practice effectively."
    },
    {
      question: "What subjects or courses are available?",
      answer: "EasyLearn covers a wide range of subjects, including Math, Science, English, Business, Technology, and more. We also provide specialized exam prep materials."
    }
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
        <h3>FAQs</h3>
      <h2>Common Questions</h2>
      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${openIndex === index ? 'open' : 'closed'}`}
              onClick={() => toggleAnswer(index)}
            >
              <span>{faq.question}</span>
              <button className={`toggle-btn ${openIndex === index ? 'open' : 'closed'}`}>
                {openIndex === index ? '-' : '+'}
              </button>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

