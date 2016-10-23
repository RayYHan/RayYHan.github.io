import React from "react";
import Navbar from "./navbar.jsx";
import SubSection from "./subsection.jsx";

//React component to render each section of the content
var Section = React.createClass({
  getInitialState: function () {
    if (this.props.idx == 0) {
      return {first: true};
    }
    return {first: false};
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
        {this.props.section.subsections && this.state.first && 
          <Navbar
          data={this.props.section.subsections}
          subMenu={ true }
          colorOffset={ this.props.idx + 1 } />}
        {!this.state.first && <h2>{ this.props.section.title }</h2>}
        <img src={ this.props.section.image } className={"img-circle img-responsive center-block"} />
        <div className="lead">{ this.props.section.description }</div>
        {this.props.section.subsections && this.props.section.subsections.map(function (subsection, idx) {
          return <SubSection idx={idx} sidx={this.props.idx} section={subsection} key={subsection.id}/>
        }, this)}
      </div>
    );
  }
});

export default Section;