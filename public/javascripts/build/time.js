var Time = React.createClass({displayName: "Time",

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
        return React.createElement("div", {id: "time"}, this.state.timeString);
    }
});