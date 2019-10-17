import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

	constructor(props){
		super(props);
		this.state = {isToggleOn: false};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

  render(){

		let isActive = this.state.isToggleOn ? ' show' : '';

    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
					<Link className="navbar-brand" to="/">Movie App</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={this.handleClick}>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className={"collapse navbar-collapse justify-content-end" +isActive} id="navbarSupportedContent">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/tabs">Movies</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">About</Link>
							</li>
							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Dropdown
								</Link>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<Link className="dropdown-item" to="/">Action</Link>
									<Link className="dropdown-item" to="/">Another action</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/">Something else here</Link>
								</div>
							</li>
						</ul>
					</div>
				</nav>
    ); 
  }
}

export default Header;
