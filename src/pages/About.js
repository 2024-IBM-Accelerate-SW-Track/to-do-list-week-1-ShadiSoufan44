import React, { Component } from "react";
import "./About.css";
import profilePic from "../assets/profile_pic_name.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img className="profile_image" profilePic alt="Profile Pic"></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Your Name</div>
              <div className="brief_description">
                Hi! My name is Shadi Soufan and I'm a rising junior at Brown
                University studying Computer Science and Economics! In my free
                time, I enjoy playing basketball, hanging out with family and
                friends, and traveling.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
