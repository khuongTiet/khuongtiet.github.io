import React, { Component } from "react";
import "./Experience.css";

export default class Experience extends Component {
  render() {
    const { dateRange, link, src, title } = this.props;

    return (
      <div className="experienceContainer">
        <div
          style={{
            width: "70vw",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <div className="experienceHalf">
            <a href={link} target="_blank">
              <img src={src} alt={"Work"} />
            </a>
          </div>
          <div className="experienceHalf">
            <div style={{ fontSize: "1.5rem" }}>{title}</div>
            <div style={{ fontSize: "1rem" }}>{dateRange}</div>
          </div>
        </div>
      </div>
    );
  }
}
