import React from "react";
import Images from "./images.jsx";
import config from "./config.js";

//React component to render each sub-section of a section
var SubSection = React.createClass({
  getInitialState: function () {
    var initState = { first: false, last: false };
    if (this.props.last && this.props.idx == this.props.len - 1) {
      initState.last = true;
    }
    return initState;
  },

  handleScroll: function () {
    var id = this.props.section.id;
    var el = document.getElementById(id);
    var rc = el.getBoundingClientRect();
    if (rc.top <= 100 && rc.bottom > 100 && !this.state.first) {
      this.setState({ first: true });
      this.props.firstHandler(id);
    }
    if (rc.top > 100 || rc.bottom < 100 && this.state.first) {
      this.setState({ first: false });
      this.props.first == id && this.props.firstHandler(null);
    }
  },

  componentDidMount: function () {
    window.addEventListener("scroll", this.handleScroll);
  },

  render: function () {
    var colorId = (this.props.sidx + this.props.idx + 1) % config.color_num + 1;
    var className = "sub-section container-fluid color-" + colorId;
    this.state.first && (className += " first-sub");
    this.state.last && (className += " last");
    return (
      <div className={ className } id={ this.props.section.id }>
        {!this.state.first && <h2 className="sub-sect-title">{ this.props.section.title }</h2>}
        <Images imgObj={this.props.section.images} />
        <div className="lead">{ this.props.section.description }</div>
      </div>
    );
  }
});

export default SubSection;