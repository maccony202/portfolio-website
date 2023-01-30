import React from "react";
import ImgPlaceholder from '../assets/images/ImgPlaceholder.png'

const Projects = () => {
    return(
        <div>
            <div className="projects">
                <div className="proj-head">
                <h2>
                    My Recent Works
                </h2>
                <hr/>
                </div>

                <div className="proj1">
                    <img className="proj-img1" src={ImgPlaceholder} alt='project1'/>
                    <p className="title-post">Multi-Post Stories</p>
                    <p className="supporting-text">
                    A daily selection of privately personalized reads; no accounts or sign-ups required. 
                    has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a standard dummy text.
                    </p>
                    <ul className="tags">
                        <li>css</li>
                        <li>html</li>
                        <li>bootstrap</li>
                        <li>ruby</li>
                    </ul>
                    <button className="see-proj-btn">See project</button>
                </div>

                
            </div>
        </div>
    )
}

export default Projects;