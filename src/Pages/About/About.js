import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='container about-container'>
            
            <div>
                <h1>About Us</h1>
                
            <div className='about-details'>
                <h3>Introduction</h3>
                <p>Deep Eye Care Foundation (DECF) is a non-government, community based eye health care organization which commenced its strenuous journey on 9th October, 2008 in Rangpur with a view to provide equitable and quality eye care services to all the people of Northern Part of Bangladesh. Since its inception, it has always been a matter of special emphasis to reach the unreached people and the poorest segment of the society where the impact of needless avoidable blindness is most damaging.</p>
            </div>

            <div className='about-details'>
                <h3>VISION</h3>
                <p>To be established as a Center of Excellence in Eye Care through which People of Northern part of Bangladesh will be ensured of their comprehensive eye services.</p>
            </div>


            <div className='about-details'>
                <h3>MISSION</h3>
                <p>PATIENT CARE…..Ensure qualitative and quantitative eye care services for all.
COMMUNITY OUTREACH…..Work with community people’s participation.
EDUCATION & TRAINING…..Human resource development in eye care sector.
RESEARCH…..Research to intervene both the prevalence and incidence of eye diseases.</p>
            </div>
</div>

        </div>
    );
};

export default About;