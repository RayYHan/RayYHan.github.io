//Data model for the about section of the website
var about = {
  title: "About Me",
  description: "My name is Ray Han. I am a recent graduated computer science major. In the past few years, I have completed several curricular, extracurricular and off-campus programming projects. Through these projects, I have gained a lot of valuable experices in different areas of software engineering including design, implementation and testing. I am also able to develop my area of interest by taking on different roles in different kind of projects.",
  color: '#C63D0F'
};

//Data model for the education section of the website
var education = {
  title: "Education",
  description: "I have with the honor from California State University, Los Angeles with a Bachelor of Science in computer science. During my undergraduate years, I have excelled in all courses, received several honors and rewards and participated in many projects and events.",
  color: "#3B3738"
};

//Data model for the content of the website
var content = [about, education];

//React Component to render the content of the website
var ContentComponent = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.data.map(function (section) {
          //Create the div style from the section color
          var divStyle = {
            background: section.color,
            margin: 0
          };
          //Create the text style from the section color
          var textStyle = {
            color: section.color,
            filter: "invert(100%)"
          };
          return (
            <div style={divStyle} className="well">
              <h1 style={textStyle}>{section.title}</h1>
              <p className="lead" style={textStyle}>{section.description}</p>
            </div>
          )
        })}
      </div>
    )
  }
});

//Render content compont to the DOM
ReactDOM.render(<ContentComponent data={content } />, document.getElementById("mainPage"));