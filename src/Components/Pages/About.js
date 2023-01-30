import React from "react";
import rectangle from '../assets/images/Rectangle.png'

const About = () => {
    return(
        <div className="about-container">
            <div className="about-page">
                <h2 className="primary-text">About me</h2>
                <p className="decription">Hello I’m a software developer! I can help you build a product , 
                    feature or website Look through some of my work and experience! 
                    If you like what you see and have a project you need coded, 
                    don’t hestiate to contact me.</p>
                    <button className="see-proj-btn">Get My Resume</button>
            </div>
            <hr />
            <div className="skill">
                        <ul className="skill-frame1">
                            <div className="mini-frame">
                                <img className="rectangle" src={rectangle} alt='rectangle'/>
                               <p className="language">Language</p>
                            </div>
                            <li>Javascript</li>
                            <li>Ruby</li>
                            <li>Html</li>
                            <li>Css</li>

                        </ul>

                        <ul className="skill-frame1">
                            <div className="mini-frame">
                                <img className="rectangle" src={rectangle} alt='rectangle'/>
                               <p className="language">Frameworks</p>
                            </div>
                            <li>Bootstrap</li>
                            <li>Ruby on Rails</li>
                            <li>RSPec</li>
                            <li>CapyBara</li>

                        </ul>

                        <ul className="skill-frame1">
                            <div className="mini-frame">
                                <img className="rectangle" src={rectangle} alt='rectangle'/>
                               <p className="language">Skill</p>
                            </div>
                            <li>Codekit</li>
                            <li>Github</li>
                            <li>Codepen</li>
                            <li>Gitlab</li>
                            <li>Terminal</li>

                        </ul>
                    </div>
        </div>
    )
}

export default About;