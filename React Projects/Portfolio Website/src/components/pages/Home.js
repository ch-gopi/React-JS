import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Profile from '../../components/pages/profile/Profile';
import About from '../../components/pages/about/About';
import Skills from '../../components/pages/skills/Skills';
import Experiences from '../../components/pages/experiences/Experiences';
import Educations from '../../components/pages/educations/Educations';
import Portfolios from '../../components/pages/portfolios/Portfolios';

export default class Home extends Component {
	render() {
		return (
			<section>
				<Navbar />
				<div className='container'>
					<div className='row'>
						<div className='col s12 m3'>
							<Profile />
						</div>
						<div className='col s12 m9'>
							<About />
							<Skills />
							<Experiences />
							<Educations />
							<Portfolios />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
