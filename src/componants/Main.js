import React from "react";
import avatar from "../images/avaterimg.jpeg"
function Main() {
    return (
        <main>
            <div className="container">
                <img src={avatar} alt="avatar" className="avatar" />
                <h3 className="name">Muhammed Safvan</h3>
                <h5 className="sub-title">Frontend Developer</h5>
                <p className="second-sub-title">React . Javascript</p>
                <div className="buttons">
                    <button className="mail-button"><i className="fa fa-envelope-o"></i> Email</button>
                    <button className="li-button"><i className="fa fa-linkedin"></i> LinkedIn</button>
                </div>
                <h5 className="sub-heading">About</h5>
                <p className="about-content"> I'm a Self-taught MERN stack Developer and would like
                    to work as a Frontend Developer. I love to learn new things etc.</p>
                    <h5 className="sub-heading">Interests</h5>
                <p className="about-content"> I am a passionate Frontend Developer and also I would like to learn many more things new such as Javascript , React , Html5 , css3 etc . </p>
            </div>

        </main>
    )
}

export default Main; 