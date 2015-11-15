var SquareBox = React.createClass({

    getInitialState: function(){

        var squares = [];

        for(var i = 0; i < 400; i++)
        {
            squares.push(<Square key={i} id={"square" + i} />);
        }
        return {squareHtml: squares};
    },

    shrinkBigBoxes: function () {

        var oldElements = document.getElementsByClassName('bigSquare');

        for(var i = 0; i < oldElements.length; i++)
        {
            oldElements[i].className = oldElements[i].className.replace('bigSquare', 'square');
        }    
    },

    boxAdjust: function(e) {

        this.shrinkBigBoxes();

        var newElement = document.getElementById(e.target.id);

        if(newElement.className.indexOf('bigSquare') < 0)
        {
            newElement.className = newElement.className.replace('square', 'bigSquare');
        }
    },

    render: function() {
        return  <div id="squareBox" onClick={this.boxAdjust}>
                    <Time />
                    {this.state.squareHtml}
                </div>;
    }
});