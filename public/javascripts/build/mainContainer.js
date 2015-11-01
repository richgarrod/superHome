var MainContainer = React.createClass({displayName: "MainContainer",

    render: function() {
        return  React.createElement("div", {id: "mainContainer"}, 
                    React.createElement(SquareBox, null)
                );
    }
});


ReactDOM.render(
    React.createElement(MainContainer, null),
    document.getElementById('squares')
);