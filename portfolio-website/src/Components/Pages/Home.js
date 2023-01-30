import React from "react";
import Projects from "./Products";

const Home = () => {
    return(
        <div>
            <div className="headline">
                <h1 className="intro">Hey There.<br/> I’m Nana Antwi</h1>
                <p className="discription">I’am a Software Developer</p>
                <p className="details">
                    I can help you build a product , 
                    feature or website Look through some of my work and experience! 
                    If you like what you see and have a project you need coded, don’t hestiate to contact me.
                    </p>
            </div>
            <Projects />
        </div>
    )
}

export default Home;