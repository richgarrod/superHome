var MainContainer = React.createClass({

    render: function() {
        return  <div id="mainContainer">
                    <SquareBox />
                </ div>;
    }
});


ReactDOM.render(
    <MainContainer />,
    document.getElementById('squares')
);