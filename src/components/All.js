import React, { Component } from 'react';
import Tabs from './Tabs';

class All extends Component {
	constructor(props){
		super(props)
		this.state = {
			movies: [],
			moviesCat:"popular",
			currentPage:1,
			
		}
	}


	componentDidMount(){
		this.callingAPI();
	}
	componentDidUpdate(prevProps) {
		if(prevProps.moviesCat !== this.props.moviesCat) {
				this.callingAPI();
		}
	}
	callingAPI(){
		var proxy = 'https://cors-anywhere.herokuapp.com/',
		apiLink = `https://api.themoviedb.org/3/movie/${this.props.moviesCat}?api_key=36ccdeb1a698391b27bb03f49ececac1&language=en-US&page=${this.state.currentPage}`
		fetch(proxy+apiLink)
		.then(res => res.json())
			// const movie = res.data.slice(0,10);
			.then(json => {
			this.setState({ 
				movies:json.results,
        totalResults:json.total_results,
			 });
		})
	}



	render (){
		var { movies } = this.state;  
		return (
			<div className='container'>
				<div className='thumbnails'>
					<div className="row">
						{movies.map (movie =>
						<div className="col-6 col-md-3">
							<img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt=""/>
							<h2>{movie.title}</h2>
							<p>{movie.overview}</p>
							<span>
								<span className='rate-icon'></span>
								<span className='rate-value'>{movie.vote_average}</span>
							</span>
							<p><a className="btn btn-primary border-shadow-none" role="button" href=''>View details »</a></p>
						</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default All;