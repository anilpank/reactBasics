class LoginControl extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = {isLoggedIn: false};
	}
	
	handleLoginClick() {
		console.log('handling login click');
		this.setState({
			isLoggedIn: true
		});
	}
	
	handleLogoutClick() {
		console.log('handling logout click');
		this.setState({
		    isLoggedIn: false		
		});
	}
	
	render() {
	    const isLoggedIn = this.state.isLoggedIn;
		let button = null;
		if (isLoggedIn) {
			button = <LogOutButton onClick={this.handleLogoutClick}></LogOutButton>
		}
		else {
			button = <LoginButton onClick={this.handleLoginClick}></LoginButton>
		}
		console.log('rendering LoginControl');
		return (			
			<div>
			   <Greeting isLoggedIn={isLoggedIn}/>
			   {button}
			</div>
		);
	};
	
}