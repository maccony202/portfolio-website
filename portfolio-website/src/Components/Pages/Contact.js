import React from "react";
import githubimg from '../assets/images/github.png'
import linkdlnimg from '../assets/images/linkdln.png'
import twitterimg from '../assets/images/twitter.png' 

const Contact = () => {
    return(
        <div className="contact-container">
            <div className="contact-page">
                <p>
                I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
                </p>
                <form className="contact-form" action="https://formspree.io/f/mgeqypzb" method="post">
                    <input type='text' id='name' name='user_name' placeholder='full name' required/>
                    <input type='email' id='email' name='user_email' placeholder='Email' required/>
                    <textarea name="message" id="meesage" cols="30" rows="10" placeholder="Write your message here" required maxlength="500"></textarea>
                    <button className="contact-btn">Get In touch</button>

                </form>
            </div>
            <hr/>
            <ul className="socials">
                <li><a href="/"><img src={githubimg} alt='github'/></a></li>
                <li><a href="/"><img src={linkdlnimg} alt='linkdln'/></a></li>
                <li><a href="/"><img src={twitterimg} alt='twitter'/></a></li>

            </ul>
        </div>
    )
}

export default Contact;