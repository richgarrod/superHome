var SquareBox = React.createClass({

    getInitialState: function(){

        var squares = [];

        for(var i = 0; i < 1000; i++)
        {
            squares.push(<Square key={i} id={"square" + i} />);
        }
        return {squareHtml: squares};
    },

    render: function() {
        return <div id="squareBox">{this.state.squareHtml}</div>;
    }
});


ReactDOM.render(
    <SquareBox />,
    document.getElementById('squares')
);