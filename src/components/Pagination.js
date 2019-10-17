
class All extends Component {

	constructor(props){
		super(props)

		this.state = {
			movies: [],
			movieCategory:"popular",
			pageNumber:1,
		}
	}


	componentDidMount(){
		this.callingAPI();
	}
	callingAPI(){
		var proxy = 'https://cors-anywhere.herokuapp.com/',
		apiLink = `https://api.themoviedb.org/3/movie/${this.state.movieCategory}?api_key=36ccdeb1a698391b27bb03f49ececac1&language=en-US&page=${this.state.pageNumber}`
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

	callingPagination(){
		const pageLinks =[]
    for(let i=1; i<= 4 ; i++){
        let active= props.currentPage == i ? 'active':'';
        pageLinks.push(<li className={`pr-2 ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="javascript:void(0)" onClick={() => props.Loading()}>{i}</a></li>)
		}
	}

	render (){
		var { movies } = this.state;  
		return (
			<div className='container'>
				<h1>
					All Movies
				</h1>
				<p>Here you can find all movie you want to show </p>
				<div className="row">
					{movies.map (movie =>
					<div className="col-6 col-lg-4">
						<div className='text-center'>
						<img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt=""/>
							<h2>{movie.title}</h2>
							<p>{movie.overview}</p>
							<span>{movie.vote_average}</span>
							<p><a className="btn btn-primary border-shadow-none" href="#" role="button">View details »</a></p>
						</div>
					</div>
					)}
				</div>
				<div className="col-12 text-center">
            <ul className="pagination justify-content-center">
                {props.currentPage > 1 ? <li className='pr-2' onClick={() => props.nextPage(props.currentPage -1 )}><a href="javascript:void(0)" onClick={() => props.Loading()}>prev</a></li>:'' }
                {pageLinks}
                {props.currentPage< 4 ? <li  onClick={() => props.nextPage(props.currentPage + 1)}><a href="javascript:void(0)" onClick={() => props.Loading()}>next</a></li>:'' }
            </ul>
        </div>
			</div>
		);
	}
}

export default All;