﻿//Data model for the about section of the website
var about = {
  id: "about",
  title: "About Me",
  description: 
  <div>
    <h3>Ray Y Han</h3>
    <h4>Software Engineer</h4>
    <p>
    I am a recently graduated computer science major with excellent academic record and
    some professional experice. I have done several projects for the reasons of academic,
    professional and personal interest. I believe these personal properties of mine will
    make me a great candidate for a software engineering position:
    <ul>
      <li>
      <b>Logical</b>
      <p>I have a very logical mindset that enables me </p>
      </li>
      <li>Enthusiastic</li>
      <li>Deadline Driven</li>
      <li>Flexible</li>
    </ul>
    </p>
  </div>,
  //"My name is Ray Han. I am a recent graduated computer science major. In the past few years, I have completed several curricular, extracurricular and off-campus programming projects. Through these projects, I have gained a lot of valuable experices in different areas of software engineering including design, implementation and testing. I am also able to develop my area of interest by taking on different roles in different kind of projects.",
  image: "../images/about_me.png"
};

//Data model for the education section of the website
var education = {
  id: "education",
  title: "Education",
  description: "I have graduated with the honor from California State University, Los Angeles with a Bachelor of Science in computer science. During my undergraduate years, I have excelled in all courses, received several honors and rewards and participated in many projects and events."
};

var projects = {
  id: "project",
  title: "Projects",
  description: "I have worked on several projects for both academic and professional purposes"
}

//Color Scheme used on the website
var colors = ['#4285f4', "#0f9d58", "#f4b400", "#db4437"]
//var colors = ['#C0B283', '#DCD0C0', '#F4F4F4', '#373737']

//Data model for the content of the website
var content = [about, education, projects];

//React component to render the navbar
var NavComponent = React.createClass({
  render: function () {
    return (
      <ul className="nav nav-tabs navbar-fixed-top">
        {this.props.data.map(function (section, idx) {
          var className = "color-" + (idx % 4 + 1);
          section.id == this.props.first && (className += " disabled");
          return (
            <li><a className={className} href={"#" + section.id}>{ section.title }</a></li>
          )
          }, this)}
      </ul>
    );
  }
})

//React component to render each section of the content
var SectionComponent = React.createClass({
  getInitialState: function () {
    if (this.props.idx == 0) {
      return {rect: null, first: true};
    }
    return {rect: null, first: false};
  },

  handleScroll: function () {
    var id = this.props.section.id;
    var el = document.getElementById(id);
    var rc = el.getBoundingClientRect();
    if (rc.top <= 42 && rc.bottom > 42 && !this.state.first) {
      this.setState({first: true});
      this.props.firstHandler(id);
    }
    if (rc.top > 42 || rc.bottom < 42 && this.state.first) {
      this.setState({first: false});
    }
  },

  componentDidMount: function() {
    window.addEventListener("scroll", this.handleScroll);
  },

  render: function () {
    var className = "container-fluid" + " color-" + (this.props.idx % 4 + 1);
    if (this.props.idx == this.props.len - 1) {
      className += " last";
    }
    if (this.state.first) {
      className += " first";
    }
    return (
      <div className={className} id={ this.props.section.id }>
        {!this.state.first && <h2>{ this.props.section.title }</h2>}
        <img src={ this.props.section.image } className="img-circle img-fluid" />
        <p className="lead">{ this.props.section.description }</p>
      </div>
    );
  }
});

//React component to render the content of the website
var ContentComponent = React.createClass({
  getInitialState: function () {
    return {first: this.props.data[0].id}
  },

  firstHandler: function (first) {
    this.setState({first: first});
  },

  render: function () {
    return (
      <div>
        <NavComponent data={ this.props.data } first={this.state.first} />
        {this.props.data.map(function (section, idx, arr) {
          return (
            <SectionComponent section={section} idx={idx} len={arr.length} firstHandler={this.firstHandler} first={this.state.first} />
          )
        }, this)}
      </div>
    )
  }
});

//Render content compont to the DOM
//ReactDOM.render(<NavComponent data={ content } />, document.getElementById("navbar"));
ReactDOM.render(<ContentComponent data={ content } />, document.getElementById("content"));