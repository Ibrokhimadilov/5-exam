import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import "./language/i18next"
import { Suspense } from 'react';
import { store } from './redux/store/index';
import { Provider } from 'react-redux';
const App = lazy(() => import('./App'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Suspense fallback={<p>Loading...</p>}>
      <Provider store={store}>
      <App />
      </Provider>
    </Suspense>
  </BrowserRouter>
);