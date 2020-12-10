import React from "react";
import "./contact.css";

const name ="Brennan Allen";
const avatar =
  "https://randomuser.me/api/portraits/men/32.jpg";
let online = false;

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="" />
      <div>
        <h4 className="name">{name}</h4>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"}></div>
          <p className="status-text">{online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
