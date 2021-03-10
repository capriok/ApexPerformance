import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './styles/index.scss';

function Index() {
	return <App />
}

ReactDOM.render(<Index />, document.getElementById('root'))