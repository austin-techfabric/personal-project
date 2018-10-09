import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './store';

import { Provider } from 'react-redux'; 

// === ROUTER === \\
import { BrowserRouter } from 'react-router-dom';

// === HOT RELOADER === \\
// import { AppContainer } from 'react-hot-loader';

const render = () => {
ReactDOM.render(
    
    // <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    // </AppContainer>,
    document.getElementById('root')
    );
};

// Do this once
registerServiceWorker();

// Render once
render();

// Webpack Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./App', () => {
//     render();
//   });
// }