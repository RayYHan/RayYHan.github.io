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
        <div id={id} className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            { images.map( function(image, idx) {
              return (<li 
                data-target={ "#" + id }
                data-slide-to={ idx } 
                className={ idx==0 && "active" }
                key={ idx }></li>);
            }, this) }
          </ol>

          <div className="carousel-inner" role="listbox">
            { images.map( function (image, idx) {
              return (
                <div className={ idx == 0 ? "item active" : "item" } key={ idx }>
                  <img src={ image } alt={ "image-" + idx} key={ idx }/>
                </div>
              );
            }, this ) }
          </div>

          <a className="left carousel-control" href={ "#" + id } role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href={ "#" + id } role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      );
    }
    if (imgObj.type == "embeded") {
      return (
        <div className="embeded-responsive">
          <iframe
            scrolling="no"
            className="embed-responsive-item"
            src={imgObj.src}></iframe>
        </div>);
    }
  }
});

export default Images;