var SquareBox = React.createClass({displayName: "SquareBox",

    getInitialState: function(){

        var squares = []

        for(var i = 0; i <20; i++)
        {
            squares.push(React.createElement(Square, {idNumber: i}));
        }
        return {squareHtml: squares};
    },

    render: function() {
        return React.createElement("div", {id: "squareBox"}, this.state.squareHtml);
    }
});


ReactDOM.render(
    React.createElement(SquareBox, {key: "squareBox0"}),
    document.getElementById('squares')
);