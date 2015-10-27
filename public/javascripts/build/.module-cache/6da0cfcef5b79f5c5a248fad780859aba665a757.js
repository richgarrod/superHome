var Square = React.createClass({displayName: "Square",

    getInitialState: function(){

        // This is called before our render function. The object that is 
        // returned is assigned to this.state, so we can use it later.

        return { classNames: ['square', 'normalSquare'] ,
    			 classNameString: 'square normalSquare'};
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
    	names = this.state.classNames;

    	indexToRemove = names.indexOf('normalSquare');

    	if (indexToRemove < 0) return;

    	names.splice(indexToRemove, 1);
    	names.push('hoveredSquare');

    	this.setState({classNames: names, classNameString: names.join(' ')});    
    },

    changeColourBack: function() {
    	names = this.state.classNames;

    	indexToRemove = names.indexOf('hoveredSquare');

    	if (indexToRemove < 0) return;

    	names.splice(indexToRemove, 1);
    	names.push('normalSquare');

    	this.setState({classNames: names, classNameString: names.join(' ')});    
    },

    increaseSize: function(indexToRemove) {
    	names.splice(indexToRemove, 1);
    	names.push('bigSquare');

    	this.setState({classNames: names, classNameString: names.join(' ')});    
    },

    decreaseSize: function() {
    	names.splice(indexToRemove, 1);
    	names.push('square');

    	this.setState({classNames: names, classNameString: names.join(' ')});    
    },

    adjustSize: function() {
    	names = this.state.classNames;

    	indexToRemove = names.indexOf('square');

    	if (indexToRemove >= 0)
    	{
    		this.increaseSize(indexToRemove);
    		return;
    	}

    	indexToRemove = names.indexOf('bigSquare');

    	if (indexToRemove >= 0)
    	{
    		this.decreaseSize(indexToRemove);
    		return;
    	}
    },

    render: function() {
        
        // Although we return an entire <p> element, react will smartly update
        // only the changed parts, which contain the seconds variable.

        return React.createElement("div", {className: this.state.classNameString, 
        			onMouseEnter: this.changeColour, 
        			onMouseLeave: this.changeColourBack, 
        			onClick: this.adjustSize});
    }
});


ReactDOM.render(
    React.createElement(Square, null),
    document.getElementById('squares')
);