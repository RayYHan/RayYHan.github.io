var data = {
  title: 'Ray Y Han',
  content: 'Computer Science'
};

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h1>{this.props.data.title}</h1>
        {this.props.data.content}
      </div>
    );
  }
});

ReactDOM.render(<About data={data } />, document.getElementById('mainPage'));