import React, { Component } from "react";

class Footer extends Component {
  render() {
    const { displayTab } = this.props;
    console.log("in footer: ", this.props.displayTab.length);
    return (
      <div className={`${displayTab.length === 0 ? "alt-footer" : "footer"}`}>
        <div>Privacy Policy and T&#38;C</div>
        <div>Movie App</div>
        <div>&#169;SB - 2022</div>
      </div>
    );
  }
}

export default Footer;
