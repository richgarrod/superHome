var Square = React.createClass({displayName: "Square",

    getInitialState: function(){

        // This is called before our render function. The object that is 
        // returned is assigned to this.state, so we can use it later.

        return { classname: 'square' };
    },

    componentDidMount: function(){

        // componentDidMount is called by react when the component 
        // has been rendered on the page. We can set the interval here:

        this.timer = setInterval(this.tick, 50);
    },

    componentWillUnmount: function(){

        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:

        clearInterval(this.timer);
    },

    tick: function(){

        // This function is called every 50 ms. It updates the 
        // elapsed counter. Calling setState causes the component to be re-rendered

        this.setState({elapsed: new Date() - this.props.start});
    },

    changeColour: function() {
    },

    render: function() {
        
        // Although we return an entire <p> element, react will smartly update
        // only the changed parts, which contain the seconds variable.

        return React.createElement("div", {className: this.state.classname});
    }
});


React.renderComponent(
    React.createElement(Square, null),
    document.getElementById('square')
);