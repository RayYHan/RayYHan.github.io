//Data model for the about section of the website
var about = {
  id: "about",
  title: "About Me",
  description: 
  <div>
    <h2>Ray Y Han</h2>
    <h3>Software Engineer</h3>
    <p>
    I am a recently graduated computer science major with excellent academic record and
    some professional experice. I have done several projects for the reasons of academic,
    professional and personal interest. I believe these personal properties of mine will
    make me a great candidate for a software engineering position:
    </p>
    <ul>
      <li>
      <b>Logical</b>
      <p>
      I have a very logical mindset that enables me be good at modeling a problem into
      code and produce necessary steps to reach a solution.
      </p>
      </li>
      <li>
      <b>Enthusiastic</b>
      <p>
      When I run into a difficult challenge, I try really hard to come up with a solution
      not because I have to, but because I really want to. Sometime a mental road block
      would keep me sleepless and other times an eruka moment would wake me from the
      deepest slumber.
      </p>
      </li>
      <li>
      <b>Deadline Driven</b>
      <p>
      Deadline is my religious. If a due date is set, I would exert all my might to meet it.
      During my years in school, I turned in all the assignments on time and met all the
      project deadlines.
      </p>
      </li>
      <li>
      <b>Flexible</b>
      <p>
      I have taken on many different roles in different groups for different projects. I was
      known for my ability to code when a coder was needed; I came up with many well received
      design ideas when the team already had strong coders; and I assumed a leadship role and
      took charge when a team was headless.
      </p>
      </li>
    </ul>
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
          section.id == this.props.first && (className += " disabled first");
          return (
            <li key={section.id}><a className={className} href={"#" + section.id}>{ section.title }</a></li>
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
        <div className="lead">{ this.props.section.description }</div>
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
            <SectionComponent section={section} key={section.id} idx={idx} len={arr.length} firstHandler={this.firstHandler} first={this.state.first} />
          )
        }, this)}
      </div>
    )
  }
});

//Render content compont to the DOM
//ReactDOM.render(<NavComponent data={ content } />, document.getElementById("navbar"));
ReactDOM.render(<ContentComponent data={ content } />, document.getElementById("content"));