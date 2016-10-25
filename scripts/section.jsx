import React from "react";
import Navbar from "./navbar.jsx";
import SubSection from "./subsection.jsx";
import config from "./config.js";

//React component to render each section of the content
var Section = React.createClass({
  getInitialState: function () {
    var initState = { first: false, first_sub: null, last: false };
    if (this.props.idx == 0) {
      initState.first = true;
    }
    if (this.props.idx == this.props.len - 1) {
      initState.last = true;
    }
    return initState;
  },

  handleScroll: function () {
    var id = this.props.section.id;
    var el = document.getElementById(id);
    var rc = el.getBoundingClientRect();
    if (rc.top <= 50 && rc.bottom > 50 && !this.state.first) {
      this.setState({first: true});
      this.props.firstHandler(id);
    }
    if (rc.top > 50 || rc.bottom < 100 && this.state.first) {
      this.setState({first: false});
    }
  },

  handleFirst: function (first) {
    this.setState({ first_sub: first });
  },

  componentDidMount: function() {
    window.addEventListener("scroll", this.handleScroll);
  },

  render: function () {
    var className = "container-fluid color-" + (this.props.idx % config.color_num + 1);
    if (this.state.last) {
      className += " last";
    }
    if (this.state.first) {
      className += " first";
    }
    return (
      <div className={className} id={ this.props.section.id }>
        {this.props.section.subsections && this.state.first && 
          <Navbar
          data={this.props.section.subsections}
          subMenu={ true }
          colorOffset={ this.props.idx + 1 }
          first={ this.state.first_sub } />}
        {!this.state.first && <h2>{ this.props.section.title }</h2>}
        <img src={ this.props.section.image } className={"img-circle img-responsive center-block"} />
        <div className="lead">{ this.props.section.description }</div>
        {this.props.section.subsections && this.props.section.subsections.map(function (subsection, idx, subSections) {
          return (<SubSection
            idx={idx}
            sidx={this.props.idx}
            section={subsection}
            key={subsection.id}
            firstHandler={this.handleFirst}
            last={this.state.last}
            len={subSections.length}
            first={this.state.first_sub}
          />)
        }, this)}
      </div>
    );
  }
});

export default Section;