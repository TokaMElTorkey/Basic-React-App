import React from 'react';

const Footer = () => {
	return (
		<footer>
			<div className='flued-container p-4'>
				<div className='row'>
					<div className='col-8'>
						<p>This is a React Bootstrap Project By Toka ElTorkey</p>
					</div>
					<div className='col-4 justify-content-end d-flex'>
						<ul>
							<li className='d-inline-block'>
								<a href='#' className='icon'>
									<i className="fa fa-facebook"></i>
								</a>
							</li>
							<li className='d-inline-block'>
								<a href='#' className='icon'>
									<i className="fa fa-twitter-square"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	); 
};

export default Footer;
