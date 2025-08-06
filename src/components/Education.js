import React from 'react';
import './Education.css';
//internship letter add krayech 
//bca ty update


const Education = () => {
    return (
        <section id="education" className="education-section">
            <header className="education-header">
                <h2>Education</h2>
            </header>
            <div className="education-container">
                <div className="education-box">
                    <h3>Swami Ramanand Teerth Marathwada University, Nanded</h3>
                    <p>Bachelor of Computer Applications (BCA), Third Year</p>
                    <p>BCA Third Year Completed, 2025 with CGPA - 9.14</p>
                    <p>BCA Second Year Completed, 2024 with CGPA - 9.8</p>
                    <p>BCA First Year Completed, 2023 with CGPA - 9.17</p>
                </div>
                <div className="education-box">
                    <h3>Maharashtra State Board of Secondary and Higher Secondary Education, Pune</h3>
                    <p className="duration">2018-2020</p>
                    <h4>HSC</h4>
                    <p>Completed HSC from the Mahatma Gandhi Mahavidyalaya, Ahmedpur, Maharashtra</p>
                </div>
                <div className="education-box">
                    <h3>Maharashtra State Board of Secondary and Higher Secondary Education, Pune</h3>
                    <p className="duration">2017-2018</p>
                    <h4>SSC</h4>
                    <p>Completed SSC from the Dr. Madhusudan Bangad Vidyalaya, Anjansonda, Maharashtra</p>
                </div>
            </div>
        </section>
    );
}

export default Education;
