var CommentBox = React.createClass({
  render: function() {
    return (
        React.createElement('div', {classame: "commentBox"},
            "Hello, world! I'm a CommentBox."
        )
    );
  }
});

React.render(
    React.createElement('CommentBox', null),
    document.getElementById('content')
);
