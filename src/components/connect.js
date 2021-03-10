import React from 'react'

import '../styles/connect.scss'

import { FiInstagram, FiMail } from 'react-icons/fi'

const Connect = () => {

	const Buttons = ({ insta, email }) => (
		<div className="connect-buttons">
			<a href={insta} target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
			<a href={email} target="_blank" rel="noopener noreferrer"><FiMail /></a>
		</div>
	)

	return (
		<div className="connect-wrap">
			<div className="connect-cont">
				<p className="connect-title">Connect</p>
				<label>Facility</label>
				<section>
					<div className="connect-entity">
						<p>Apex Performance</p>
						<Buttons
							insta="https://www.instagram.com/apexperformancefacility"
							email="https://mail.google.com/mail/u/0/?fs=1&to=wes@apexapf.com&su=Inquiry&cc=justin@apexapf.com&tf=cm"
						/>
					</div>
				</section>
				<label>Personnel</label>
				<section>
					<div className="connect-entity">
						<p>Wes Budge</p>
						<Buttons
							insta="https://www.instagram.com/wes_budge"
							email="https://mail.google.com/mail/u/0/?fs=1&to=wes@apexapf.com&su=Inquiry&tf=cm"
						/>
					</div>
					<div className="connect-entity">
						<p>Justin Wakefield</p>
						<Buttons
							insta="https://www.instagram.com/justin_wakefield_"
							email="https://mail.google.com/mail/u/0/?fs=1&to=justin@apexapf.com&su=Inquiry&tf=cm"
						/>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Connect
