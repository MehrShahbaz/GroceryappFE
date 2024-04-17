import ReactDOM from 'react-dom/client';
import { ReactNotifications } from 'react-notifications-component';
import { Provider } from 'react-redux';

import RouterConfig from 'routes/RouterConfig';

import store from './redux/store/store';

import 'react-notifications-component/dist/theme.css';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <ReactNotifications />
    <RouterConfig />
  </Provider>
);
