var Time = React.createClass({

    getInitialState: function(){
        return {timeString: this.getTime()};
    },

    componentDidMount: function(){

        this.timer = setInterval(this.tick, 1000);
    },

    componentWillUnmount: function(){

        clearInterval(this.timer);
    },

    tick: function() {

        this.setState({timeString: this.getTime()});
    },

    getTime: function() {
    	var date = new Date();
        return date.toLocaleTimeString();
    },

    render: function() {
        return <div id="time">{this.state.timeString}</div>;
    }
});