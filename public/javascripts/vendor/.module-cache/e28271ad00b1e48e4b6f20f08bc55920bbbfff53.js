var SquareBox = React.createClass({displayName: "SquareBox",

    getInitialState: function(){

        var squares = []

        for(var i = 0; i <20; i++)
        {
            squares.push(React.createElement(Square, {id: i}));
        }
        return {squareHtml: squares};
    },

    render: function() {
        return React.createElement("div", {id: "squareBox"}, this.state.squareHtml);
    }
});


ReactDOM.render(
    React.createElement(SquareBox, null),
    document.getElementById('squares')
);