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
    if (imgObj.type == "animation") {
      var stopImg = imgObj.stop;
      var playImg = imgObj.play;
      return (
        <img 
        src={ this.state.play ? playImg : stopImg }
        className={"img-responsive center-block"}
        onClick={ this.clickHandler }
        />);
    }
    if (imgObj.type == "carousel") {
      var images = imgObj.images;
      var id = this.props.id + "-images";
      return (
        <div id={id} class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            { images.map( function(image, idx) {
              return (<li 
                data-target={ "#" + id }
                data-slide-to={ idx } 
                class={ idx==0 && "active" }></li>);
            }, this) }
          </ol>

          <div class="carousel-inner" role="listbox">
            { images.map( function (image, idx) {
              return (
                <div class={ idx == 0 ? "item active" : "item" }>
                  <img src={ image } alt={ "image-" + idx} />
                </div>
              );
            }, this ) }
          </div>

          <a class="left carousel-control" href={ "#" + id } role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href={ "#" + id } role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      );
    }
  }
});

export default Images;