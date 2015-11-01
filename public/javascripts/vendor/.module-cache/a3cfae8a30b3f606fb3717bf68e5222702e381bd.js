var Square = React.createClass({displayName: "Square",

    getInitialState: function(){

        // This is called before our render function. The object that is 
        // returned is assigned to this.state, so we can use it later.

        return { classNames: ['square', 'normalSquare'] ,
    			 classNameString: 'square normalSquare'};
    },

    componentWillMount: function () {
        document.addEventListener('click', this.checkToClose, false);
    },

    componentWillUnmount: function () {
        document.removeEventListener('click', this.checkToClose, false);
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

    	if(this.state.textValue !== undefined && this.state.textValue.length > 0) return;

    	names = this.state.classNames;

    	indexToRemove = names.indexOf('hoveredSquare');

    	if (indexToRemove < 0) return;

    	names.splice(indexToRemove, 1);
    	names.push('normalSquare');

    	this.setState({classNames: names, classNameString: names.join(' ')});    
    },

    increaseSize: function(names, indexToRemove) {
    	names.splice(indexToRemove, 1);
    	names.push('bigSquare');

    	this.setState({classNames: names, classNameString: names.join(' ')});    
    },

    decreaseSize: function(names, indexToRemove) {
    	names.splice(indexToRemove, 1);
    	names.push('square');

    	this.setState({classNames: names, classNameString: names.join(' ')});    
    },

    adjustSize: function() {
    	var names = this.state.classNames;

    	var indexToRemove = names.indexOf('square');

    	if (indexToRemove >= 0)
    	{
    		this.increaseSize(names, indexToRemove);
    		return;
    	}

    	indexToRemove = names.indexOf('bigSquare');

    	if (indexToRemove >= 0)
    	{
    		this.decreaseSize(names, indexToRemove);
    		return;
    	}
    },

    handleChange: function(e) {
    	this.setState({textValue: e.target.value});
    },

    checkToClose: function(e) {
        var indexToRemove = this.state.classNames.indexOf('bigSquare');
        if(e.target.id !== this.props.id
            && indexToRemove >= 0)
        {
            this.decreaseSize(this.state.classNames, indexToRemove);
        }
    },

    render: function() {
        return React.createElement("textArea", {id: this.props.id, className: this.state.classNameString, 
        			onMouseEnter: this.changeColour, 
        			onMouseLeave: this.changeColourBack, 
        			onChange: this.handleChange, 
        			onClick: this.adjustSize});
    }
});