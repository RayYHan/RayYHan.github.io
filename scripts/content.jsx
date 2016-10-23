import React from "react";
import Navbar from "./navbar.jsx";
import Section from "./section.jsx";

//React component to render the content of the website
var Content = React.createClass({
  getInitialState: function () {
    return {first: this.props.data[0].id}
  },

  firstHandler: function (first) {
    this.setState({first: first});
  },

  render: function () {
    return (
      <div>
        <Navbar data={ this.props.data } first={this.state.first} />
        {this.props.data.map(function (section, idx, arr) {
          return (
            <Section section={section} key={section.id} idx={idx} len={arr.length} firstHandler={this.firstHandler} first={this.state.first} />
          )
        }, this)}
      </div>
    )
  }
});

export default Content;