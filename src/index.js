import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import store from './redux/store'
import App from './App';
import './fonts/fonts.css';
import * as serviceWorker from './serviceWorker';

library.add(fab, fas, far)

ReactDOM.render(
	<Provider store={store} >
		<BrowserRouter forceRefresh={true}>
		<App />
		</BrowserRouter>
	</Provider>, document.getElementById('root'));

serviceWorker.unregister();




