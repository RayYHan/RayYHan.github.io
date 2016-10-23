import React from "react";
import Images from "./images.jsx"

//React component to render each sub-section of a section
var SubSection = React.createClass({
  getInitialState: function () {
    return {first: false};
  },

  render: function () {
    var colorId = (this.props.sidx + this.props.idx + 1) % 4 + 1;
    var className = "sub-section container-fluid color-" + colorId;
    return (
      <div className={ className } id={ this.props.section.id }>
        {!this.state.first && <h2>{ this.props.section.title }</h2>}
        <Images imgObj={this.props.section.images} />
        <div className="lead">{ this.props.section.description }</div>
      </div>
    );
  }
});

export default SubSection;