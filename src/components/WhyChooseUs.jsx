import React from 'react';
import '../style/WhyChooseUs.css';
import reactLogo from '../assets/react.svg';
import expert from "../assets/experttutors.png"
import questionbank from "../assets/questionbank.jpg"
import AI from "../assets/AI.jpg"
import live from "../assets/livesession.webp"
import progess from "../assets/progress.jpg"
import signup from "../assets/signup.avif"
export default function WhyChooseUs(){
  return (
    <div className="why-choose-us">
        <h2 className='text'>WHY CHOOSE US</h2>
      {/* Our Values Section */}
      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            {/* <img className="icon icon-question-bank"> /> */}
            <img className="icon" src={questionbank} alt="" />
            <h3>Comprehensive Question Bank</h3>
            <p>Access thousands of past questions from JAMB, WAEC, NECO, and IELTS with detailed solutions.</p>
          </div>
          <div className="value-card">
            {/* <div className="icon icon-tutors"></div> */}
            <img className="icon" src={expert} alt="" />
            <h3>Expert Tutors</h3>
            <p>Connect with verified teachers for personalized live tutoring sessions.</p>
          </div>
          <div className="value-card">
            {/* <div className="icon icon-ai"></div> */}
            <img className="icon" src={AI} alt="" />
            <h3>AI-Powered Learning</h3>
            <p>Benefit from intelligent recommendations and automated study plans.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2>HOW IT WORKS</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            {/* <div className="step-icon step-sign-up">{reactLogo}</div> */}
            <img className="icon" src={signup} alt="" />
            <p>Sign up and choose a learning plan</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            {/* <div className="step-icon step-access"></div> */}
            <img className="icon" src={live} alt="" />
            <p>Access past questions or join live classes</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            {/* <div className="step-icon step-track"></div> */}
            <img className="icon" src={progess} alt="" />
            <p>Track progress and improve with quizzes</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat">
          <h3>50K+</h3>
          <p>Active learners</p>
        </div>
        <div className="stat hide-on-mobile">
          <h3>1000+</h3>
          <p>Expert tutors</p>
        </div>
        <div className="stat hide-on-mobile">
          <h3>25K+</h3>
          <p>Practice questions</p>
        </div>
        <div className="stat hide-on-mobile">
          <h3>95%</h3>
          <p>Success rate</p>
        </div>
      </section>
    </div>
  );
};

