import React from 'react';
import ReactDOM from 'react-dom';

import Connect from './components/connect'
import Footer from './components/footer'

import './styles/index.scss';
import './styles/landing.scss'

import LOGO_BLACK from './assets/apex-logo-black.jpg'
import Location from './components/location';

function Index() {
	return (
		<div className="landing-cont">
			<div className="landing-logo">
				<img src={LOGO_BLACK} alt="" />
			</div>
			<div className="landing-connect">
				<Connect />
				<Location />
			</div>
			<Footer />
		</div>
	)
}

ReactDOM.render(<Index />, document.getElementById('root'))