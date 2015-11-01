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

    handleChange: function(e) {
    	this.setState({textValue: e.target.value});
    },

    checkToClose: function(e) {
        if(e.target.className !== this.state.classNameString
            && this.state.classNames.indexOf('bigSquare') >= 0)
        {
            this.decreaseSize();
        }
    },

    render: function() {
        return React.createElement("textArea", {key: "key" + this.props.idNumber, id: "square"+this.props.idNumber, className: this.state.classNameString, 
        			onMouseEnter: this.changeColour, 
        			onMouseLeave: this.changeColourBack, 
        			onChange: this.handleChange, 
        			onClick: this.adjustSize});
    }
});