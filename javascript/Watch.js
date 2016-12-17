class Watch extends React.Component {
	
	//Adding a class constructor that assigns the initial this.state
	constructor(props) {
		//We pass props to base constructor
		super(props);
		this.state = {date: new Date()};
	}
	
	//This method gets executed when component is mounted (lifecycle hook)
	componentDidMount() {
		var that = this;
		this.timerID = setInterval(
			function() {		
				that.tick();
			},
			1000
		)
	}
	
	tick() {
		console.log('executing tick');
		this.setState(
			{date: new Date()}
		);
	}
	
	//This method gets executed when component is unmounted (lifecycle hook)
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	
	render() {
		return (
			<div>
			  <h1>Hello World</h1>
			  <FormattedDate date = {this.state.date}/>
			</div>
		);
	}
}