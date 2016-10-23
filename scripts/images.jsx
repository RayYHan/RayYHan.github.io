import React from "react";

//React component to render image(s) of sub-sections
var Images = React.createClass ({
  getInitialState: function () {
    return { play: false };
  },

  clickHandler: function () {
    this.setState({ play: !this.state.play })
  },

  render: function () {
    var imgObj = this.props.imgObj;
    var stopImg = imgObj.stop;
    var playImg = imgObj.play;
    if (imgObj.type == "animation") {
      return (
        <img 
        src={ this.state.play ? playImg : stopImg }
        className={"img-responsive center-block"}
        onClick={ this.clickHandler }
        />);
    }
  }
});

export default Images;