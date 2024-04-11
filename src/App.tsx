import CustomNavbar from 'components/_shared/Navbar/Navbar';

import Loader from './components/_shared/Loader/Loader';
import HomePage from './screens/Home';

import './App.scss';

const App = (): JSX.Element => (
  <div className="App">
    <CustomNavbar />
    <Loader />
    <HomePage />
  </div>
);

export default App;
