/** @format */

import React, { useState } from 'react';

export default function CodeInput(props) {
	const { number } = props;

	return (
		<div
			style={{
				width: '200px',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<input style={{ width: '30px', height: '30px' }} />
			<input style={{ width: '30px', height: '30px' }} />
			<input style={{ width: '30px', height: '30px' }} />
			<input style={{ width: '30px', height: '30px' }} />
			<input style={{ width: '30px', height: '30px' }} />
		</div>
	);
}
