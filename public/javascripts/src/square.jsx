var Square = React.createClass({

    getInitialState: function(){

        // This is called before our render function. The object that is 
        // returned is assigned to this.state, so we can use it later.

        return { classNames: ['square', 'normalSquare'] ,
    			 classNameString: 'square normalSquare'};
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
        return <div className={this.state.classNameString} 
        			onMouseEnter={this.changeColour}
        			onMouseLeave={this.changeColourBack}
        			onClick={this.adjustSize}></div>;
    }
});


ReactDOM.render(
    <Square />,
    document.getElementById('squares')
);