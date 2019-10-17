import React, { Component } from 'react';
import All from './All';

class Tabs extends Component {

	
	constructor(props){
		super(props)
		this.state = {
			moviesCat:'popular'
			
		}
	}

	changeCategory=(chooseCat)=> {
		this.setState({moviesCat : chooseCat })
	}

	render (){
		return (
			<div className='container'>
				<div className='page-head'>
					<h1>
							All Movies
					</h1>
					<p>Here you can find all movie you want to show </p>
				</div>
				<ul className="nav justify-content-center tabs" id="movie-tab" role="tablist">
					<li className="nav-item">
						<a className="nav-link " onClick = {()=>this.changeCategory("popular")} id="tab-popular" data-toggle="pill" href="#popular" role="tab" aria-controls="popular" aria-selected="true" >Popular</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" onClick = {()=>this.changeCategory("top_rated")} id="tab-top" data-toggle="pill" href="#top" role="tab" aria-controls="top" aria-selected="false" >Top Rated</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" onClick = {()=>this.changeCategory("upcoming")} id="tab-soon" data-toggle="pill" href="#commingsoon" role="tab" aria-controls="commingsoon" aria-selected="false" >Comming Soon</a>
					</li>
				</ul>
				<div className="tab-content" id="tabContent">
          <div className="tab-pane fade show active" id="popular" role="tabpanel" aria-labelledby="tab-popular">
            <All moviesCat={this.state.moviesCat} />
          </div>
        </div>
			</div>

		);
	}
}

export default Tabs;