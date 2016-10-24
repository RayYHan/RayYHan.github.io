import React from "react";
import config from "./config.js"

//React component to render the navbar
var Navbar = React.createClass({
  render: function () {
    var className = "nav nav-tabs navbar-fixed-top";
    this.props.subMenu && (className += " sub-menu");
    //this.props.colorOffset && (className += (" color-" + ((this.props.colorOffset - 1) % 4 + 1)));
    return (
      <ul className={ className }>
        {this.props.data.map(function (section, idx) {
          var colorId = ((this.props.colorOffset ? this.props.colorOffset : 0) + idx) % config.color_num + 1
          var className = "color-" + colorId;
          section.id == this.props.first && (className += " disabled first");
          return (
            <li key={section.id}><a className={className} href={"#" + section.id}>{ section.title }</a></li>
          )
          }, this)}
      </ul>
    );
  }
});

export default Navbar;