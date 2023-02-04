import React, {useState} from "react";
import ImgPlaceholder from '../assets/images/awesomebooks.png'

const Projects = () => {
    const [showModal, setShowModal] = useState(false)
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
                    <div>
                      
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
                    <button onClick={() => setShowModal(true)} className="see-proj-btn">See project</button>
                    {showModal && (
                        <div className="my-modal">
                            <button onClick={() => setShowModal(false)}>close</button>
                            <div className="modal-content">
                            <img className="proj-img1" src={ImgPlaceholder} alt='project1'/>
                    <div>
                      
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
                      </div>
                            </div>

                        </div>
                    )}
                    </div>
                  
                </div>

                
            </div>
        </div>
    )
}

export default Projects;