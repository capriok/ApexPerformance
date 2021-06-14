import React from 'react'

import '../styles/location.scss'

const Location = () => {
	return (
		<div className="location-wrap">
			<div className="location-address">
				<p>
					<span>1716 W Broadway Rd Suite 101, </span>
					<span>Mesa, AZ 85202</span>
				</p>
			</div>
			<div className="location-maps">
				<a
					href="https://g.page/APEXAPF?share"
					target="_blank"
					rel="noopener noreferrer">
					Open in Maps
					</a>
			</div>
		</div>
	)
}

export default Location
