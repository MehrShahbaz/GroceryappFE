import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import RouterConfig from 'routes/RouterConfig';

import store from './redux/store/store';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <RouterConfig />
  </Provider>
);
