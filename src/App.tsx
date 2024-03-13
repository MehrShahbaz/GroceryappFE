import Loader from './components/shared/Loader/Loader';
import HomePage from './screens/Home';

import './App.scss';

const App = (): JSX.Element => (
  <div className="App">
    <Loader />
    <HomePage />
  </div>
);

export default App;
