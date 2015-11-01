var SquareBox = React.createClass({displayName: "SquareBox",

    getInitialState: function(){

        var squares = [];

        for(var i = 0; i < 400; i++)
        {
            squares.push(React.createElement(Square, {key: i, id: "square" + i}));
        }
        return {squareHtml: squares};
    },

    render: function() {
        return  React.createElement("div", {id: "squareBox"}, 
                    React.createElement(Time, null), 
                    this.state.squareHtml
                );
    }
});