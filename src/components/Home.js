import React, { Component } from 'react';

class Home extends Component {
	render (){
		let heading = " Album example ";
		let subheading = " Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely. ";
		return (
			<div>
				<section className="jumbotron text-center">
					<div className="container">
						<h1 className="jumbotron-heading"> { heading } </h1>
						<p className="lead text-muted"> { subheading } </p>
						<p>
							<a href="#" className="btn btn-primary m-2 border-shadow-none">Main call to action</a>
							<a href="#" className="btn btn-secondary m-2 border-shadow-none">Secondary action</a>
						</p>
					</div>
				</section>

				<div className='container mb-4'>
					<div className='row'>
						<div className='col-4 mb-7'>
							<div className='text-center'>
								<div className='icon-with-text'>
									<i className="fa fa-diamond"></i>
									<h3>Professional Design</h3>
									<p>Achieve virtually any design and layout from within the one template.</p>
								</div>
							</div>
						</div>
						<div className='col-4 mb-7'>
							<div className='text-center'>
								<div className='icon-with-text'>
									<i className="fa fa-bullseye"></i>
									<h3>Front Strategy</h3>
									<p>We strive to figure out ways to help your business grow through all platforms.</p>
								</div>
							</div>
						</div>
						<div className='col-4 mb-7'>
							<div className='text-center'>
								<div className='icon-with-text'>
									<i className="fa fa-tachometer"></i>
									<h3>Unlimited Power</h3>
									<p>Find what you need in one template and combine features at will.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='three-movie py-5'>
					<div className='container'>
						<div className="row">
							<div className="col-lg-4">
								<div className='text-center'>
									<svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
									<h2>Heading</h2>
									<p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
									<p><a className="btn btn-primary border-shadow-none" href="#" role="button">View details »</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;