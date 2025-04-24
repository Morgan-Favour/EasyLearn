    import React from 'react';
    import Slider from "@ant-design/react-slick";
    import '../style/StartJourney.css';
    

    export default function StartJourney(){
    return (
        <div className="learning-journey-container">
        <div className="text-content">
            <h2>Ready to Start Your Learning Journey?</h2>
            <p>Join thousands of students achieving their academic goals with EasyLearn</p>
        </div>
        <div className="avatar-row">
            <div className="avatar avatar-1"></div>
            <div className="avatar avatar-2"></div>
            <div className="avatar avatar-3"></div>
            <div className="avatar avatar-4"></div>
            <div className="avatar avatar-5"></div>
            <div className="avatar avatar-6"></div>
        </div>
        <button className="start-button">
            Start Learning Now
            <span className="sparkle"></span>
        </button>
        </div>
    );
    };
