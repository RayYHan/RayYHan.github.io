import React from "react";
import ReactDOM from "react-dom";

var LightBox = React.createClass({
  getInitialState: function () {
    return { display: false };
  },

  handleEmailIconClick: function (event) {
    !this.state.display && event.stopPropagation();
    this.setState({ display: true });
  },

  componentDidMount: function () {
    var emailIcon = document.getElementById("email-icon");
    emailIcon.onclick = this.handleEmailIconClick;
    var body = document.getElementsByTagName("body");
    window.onclick = this.handleFocusLoss;
  },

  handleFocusLoss: function () {
    this.state.display && this.setState({ display: false });
  },

  clickOnWindow: function (event) {
    event.stopPropagation();
  },

  render: function () {
    var className = "lightbox";
    this.state.display && (className += " show");
    return (
      <div onClick={ this.clickOnWindow } className={ className + " well" }>
        <h3>Email Me</h3>
        <p>
        Due to the lack of a back-end of this website, emailing from
        here directly would be very difficult to achieve. Sorry for
        the inconvenience. Please copy the email address below. Default
        email client may also be opened by clicking the button at the
        bottom. Click outside of this window to close this dialog.
        </p>
        <input className="form-control" id="email-address" readOnly value="giraiday@gmail.com" ></input>
        <br />
        <a type="button" className="btn btn-primary" href="mailto:giraiday@gmail.com">Open email client</a>
      </div>
    );
  }
});

export default LightBox;