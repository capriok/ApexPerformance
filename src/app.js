import React from 'react'
import Contact from './components/contact'
import Footer from './components/footer'

import './styles/app.scss'

import LOGO_BLACK from './assets/apex-logo-black.jpg'

const Apex = () => {
	return (
		<div className="app-home">
			<div className="home-logo">
				<img src={LOGO_BLACK} alt="" className="logo" />
			</div>
			<Contact />
			<Footer />
		</div>
	)
}

export default Apex
