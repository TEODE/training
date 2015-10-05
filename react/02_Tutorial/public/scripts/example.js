var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});

var CommentList = React.createClass({displayName: "CommentList",
    render: function() {
        return (
            React.createElement('div', {className: "commentList"},
                "Hello I am a CommmentList."
            )
        );
    }
});

var CommentForm = React.createClass({displayName: "CommentForm",
    render: function() {
        return (
            React.createElement('div', {className: "commentForm"},
                "Hello I am a CommentForm."
            )
        );
    }
});

React.render(
    <CommentBox />,
    document.getElementById('content')
);