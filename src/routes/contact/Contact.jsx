import React from "react";
import "./contact.scss";
import AgentCard from "../../components/agentCard/AgentCard";

const Contact = () => {
  return (
    <div className="containera">
      <div className="contenta">
        <h2 className="title1">Our best agents</h2>
        <div className="grid-container">
          <div className="sidebar">
            <h2 className="title">Infos Contact</h2>
            <p className="info">
              Location Address
              <span className="details">Addis Ababa, Ethiopia</span>
            </p>
            <p className="info">
              Phone Number
              <span className="details">+251 123456789</span>
            </p>
            <p className="info">
              Email Address
              <span className="details">ykebed40@gmail.com</span>
            </p>
            <p className="info">
              Web Address
              <span className="details">https://yared21.netlify.app</span>
            </p>
          </div>

          <div className="main-contenta">
            <AgentCard
              name={"Abebe Kebede"}
              place={"Special Agent arrount Megenagna and CMC"}
              phone={"+251 123456789"}
              image={
                "https://th.bing.com/th/id/OIP.ZyG7c7hS4wsrvYdOnJFyqQHaHa?w=178&h=178&c=7&r=0&o=5&pid=1.7"
              }
            />
            <AgentCard
              name={"Abiy Mengitstu"}
              place={"Special Agent arrount Bole area"}
              phone={"+251 123456789"}
              image={
                "https://th.bing.com/th/id/OIP.ZyG7c7hS4wsrvYdOnJFyqQHaHa?w=178&h=178&c=7&r=0&o=5&pid=1.7"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
