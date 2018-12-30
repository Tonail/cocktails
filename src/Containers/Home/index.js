import React from "react";
import ReactDOM from "react-dom";
import "./home.less";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  compoentDidUpdate(prevProps, prevState) {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}
