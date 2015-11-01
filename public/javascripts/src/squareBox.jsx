var SquareBox = React.createClass({

    getInitialState: function(){

        var squares = [];

        for(var i = 0; i < 400; i++)
        {
            squares.push(<Square key={i} id={"square" + i} />);
        }
        return {squareHtml: squares};
    },

    render: function() {
        return  <div id="squareBox">
                    <Time />
                    {this.state.squareHtml}
                </div>;
    }
});