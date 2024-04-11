import { Outlet } from 'react-router-dom';

import CustomNavbar from 'components/_shared/Navbar/Navbar';

import styles from './Home.module.scss';

const Layout = (): JSX.Element => (
  <div className={styles.container}>
    <CustomNavbar />
    <div>
      <Outlet />
    </div>
  </div>
);

export default Layout;
