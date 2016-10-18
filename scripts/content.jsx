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

var projects = {
  title: "Project",
  description: "I have worked on several projects for both academic and professional purposes"
}

//Color Scheme used on the website
var colors = ['#4285f4', "#0f9d58", "#f4b400", "#db4437"]
//var colors = ['#C0B283', '#DCD0C0', '#F4F4F4', '#373737']

//Data model for the content of the website
var content = [about, education, projects];

//React Component to render the content of the website
var ContentComponent = React.createClass({
  render: function () {
    return (
      <div>
        <ul className="nav nav-tabs navbar-fixed-top">
          {this.props.data.map(function (section, idx) {
            return (
              <li><a id={"color-" + (idx % 4 + 1)} href="#">{ section.title }</a></li>
            )
          }, this)}
        </ul>
        {this.props.data.map(function (section, idx) {
          return (
            <div className="container-fluid" id={"color-" + (idx % 4 + 1)}>
              <h2>{ section.title }</h2>
              <img src={ section.image } className="img-circle img-fluid" />
              <p className="lead">{ section.description }</p>
            </div>
          )
        }, this)}
      </div>
    )
  }
});

//Render content compont to the DOM
ReactDOM.render(<ContentComponent data={ content } colors={ colors } />, document.getElementById("mainPage"));