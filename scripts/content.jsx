//Data model for the about section of the website
var about = {
  title: "About Me",
  description: "My name is Ray Han. I am a recent graduated computer science major. In the past few years, I have completed several curricular, extracurricular and off-campus programming projects. Through these projects, I have gained a lot of valuable experices in different areas of software engineering including design, implementation and testing. I am also able to develop my area of interest by taking on different roles in different kind of projects.",
  backgroundImage: "url(../images/about_me_bg.jpg)",
  image: "../images/about_me.png"
};

//Data model for the education section of the website
var education = {
  title: "Education",
  description: "I have graduated with the honor from California State University, Los Angeles with a Bachelor of Science in computer science. During my undergraduate years, I have excelled in all courses, received several honors and rewards and participated in many projects and events."
};

//Color Scheme used on the website
var colors = ['#4285f4', "#0f9d58", "#f4b400", "#db4437"]

//Data model for the content of the website
var content = [about, education];

//React Component to render the content of the website
var ContentComponent = React.createClass({
  render: function () {
    var navStyle = {
      color: "black",
      border: 0
    }
    return (
      <div>
        <ul style={ navStyle } className="nav nav-tabs">
          {this.props.data.map(function (section, idx) {
            //Create tab style
            var tabStyle = {
              color: "black",
              background: this.props.colors[idx % 4],
              border: 0
            };
            return (
              <li style={ tabStyle }><a href="#">{ section.title }</a></li>
            )
          }, this)}
        </ul>
        {this.props.data.map(function (section, idx) {
          //Create the div style
          //console.log(this.props.colors);
          var divStyle = {
            background: this.props.colors[idx % 4],
            margin: 0,
            border: 0
          };
          //Create the text style
          var textStyle = {
            color: 'black',
            margin: 10
            //textShadow: '-1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff'
          };
          //Create the image style
          var imageStyle = {
            display: 'block',
            margin: 'auto'
          };
          return (
            <div style={ divStyle } className="well">
              <h1 style={ textStyle }>{ section.title }</h1>
              <img style={ imageStyle } src={ section.image } className="img-circle img-fluid" />
              <p className="lead" style={ textStyle }>{ section.description }</p>
            </div>
          )
        }, this)}
      </div>
    )
  }
});

//Render content compont to the DOM
ReactDOM.render(<ContentComponent data={ content } colors={ colors } />, document.getElementById("mainPage"));