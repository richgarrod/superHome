var Square = React.createClass({

    getInitialState: function(){

        // This is called before our render function. The object that is 
        // returned is assigned to this.state, so we can use it later.

        return {classNameString: 'square normalSquare'};
    },

    changeColour: function() {

        var element = document.getElementById(this.props.id);
        var newName = element.className.replace('normalSquare', 'hoveredSquare');

    	this.setState({classNameString: newName});    
    },

    changeColourBack: function(e) {
        var element = document.getElementById(this.props.id);
        var newName = element.className.replace('hoveredSquare', 'normalSquare');

        this.setState({classNameString: newName});    
    },

    handleChange: function(e) {
    	this.setState({textValue: e.target.value});
    },

    render: function() {
        return <textArea id={this.props.id} className={this.state.classNameString} 
        			onMouseEnter={this.changeColour}
        			onMouseLeave={this.changeColourBack}
        			onChange={this.handleChange} />;
    }
});