//Data model for the about section of the website
var about = {
  id: "about",
  title: "About Me",
  description: 
  <div>
    <h2>Ray Y Han</h2>
    <h3>Software Engineer</h3>
    <p>
    I am a recently graduated computer science major with the professional goal of a
    software engineering position. I have had excellent academic record and some professional
    experice. I have done several projects for the reasons of academic, professional and
    personal interest. I believe these personal properties of mine will make me a great
    candidate for a software engineering position:
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
  image: "../images/about_me.png"
};

//Data model for the education section of the website
var education = {
  id: "education",
  title: "Education",
  description: 
  <div>
    <h2>California State University, Los Angeles</h2>
    <h3>Computer Science - 2016</h3>
    <ul>
      <li>Graduation honor: <b>Summa Cum Laude, 2016</b></li>
      <li>Competition winner: <b>Cal State LA Codeathon, 2015</b></li>
      <li>Scholarship: <b>NASA DIRECT STEM Research Scholarship, 2015 - 2016</b></li>
      <li>Other: <b>Dean's Honor, 2015 - 2016</b></li>
    </ul>
  </div>,
  image: "../images/codeathon.png"
};

var heartAttack = {
  id: "heartAttack",
  title: "Heart Attack",
  images: {
    type: "animation",
    stop: "../images/heart_attack.png",
    play: "../images/heart_attack.gif"
  },
  description:
  <div>
    <h2>PyGame Prototype</h2>
    <h3>Codeathon, 2015</h3>
    <p>
      In fall 2105, I participated the Cal State LA, "Fight the Ladykiller",
      codeathon. The theme was to design and rapid prototype if possible an App
      that raises awareness of women's heart disease of women of the age group 18
      - 25. To cater the interest of this age group, the design of my group was a
      simple advanture game with embeded heart health messages. The prototype was
      retooled from a project I did the previous quarter. It was writtin in Python
      with the PyGame library.
    </p>
  </div>
};

var projects = {
  id: "project",
  title: "Projects",
  image: "../images/projects.png",
  description: 
  <div>
    <h2>Academic and Professional Projects</h2>
    <h3>Cal State LA, NASA JPL, 2015 - 2016</h3>
    <p>
    During my time at school and internship, I have completed several projects. Some project
    helped me learn different tools and technology while others taught me how to apply
    classroom theories in practice. Below is a short list of the more notable projects I
    worked on.
    </p>
  </div>,
  subsections: [heartAttack]
  //"I have worked on several projects for both academic and professional purposes"
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

//React component to render image(s) of sub-sections
var ImageComponent = React.createClass ({
  getInitialState: function () {
    return { play: false };
  },

  hoverHandler: function () {
    this.setState({ play: true });
  },

  unhoverHandler: function () {
    this.setState({ play:false });
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
        onMouseOver={ this.hoverHandler }
        onMouseLeave={ this.unhoverHandler }
        />);
    }
  }
});

//React component to render each sub-section of a section
var SubSectionComponent = React.createClass({
  getInitialState: function () {
    return {first: false};
  },

  render: function () {
    var colorId = (this.props.sidx + this.props.idx + 1) % 4 + 1;
    var className = "sub-section container-fluid color-" + colorId;
    return (
      <div className={ className }>
        {!this.state.first && <h2>{ this.props.section.title }</h2>}
        <ImageComponent imgObj={this.props.section.images} />
        <div className="lead">{ this.props.section.description }</div>
      </div>
    );
  }

});

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
    var className = "container-fluid color-" + (this.props.idx % 4 + 1);
    if (this.props.idx == this.props.len - 1) {
      className += " last";
    }
    if (this.state.first) {
      className += " first";
    }
    return (
      <div className={className} id={ this.props.section.id }>
        {!this.state.first && <h2>{ this.props.section.title }</h2>}
        <img src={ this.props.section.image } className={"img-circle img-responsive center-block"} />
        <div className="lead">{ this.props.section.description }</div>
        {this.props.section.subsections && this.props.section.subsections.map(function (subsection, idx) {
          return <SubSectionComponent idx={idx} sidx={this.props.idx} section={subsection} key={subsection.id}/>
        }, this)}
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