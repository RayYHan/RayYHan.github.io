﻿var Menu = React.createClass({
  render: function() {
    return(
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              </button>
            <a class="navbar-brand" href="#">Rayy Y Han</a>
          </div>
        </div>
      </nav>
    );
  }
});

ReactDOM.render(
  <Menu />, document.getElementById('navBar')
);