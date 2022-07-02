import React from "react";
import "./Heading.css";

export default class Heading extends React.Component {
  render() {
    return (
      <div className={"Heading"}>
        {this.props.title}
      </div>
    );
  }
}
