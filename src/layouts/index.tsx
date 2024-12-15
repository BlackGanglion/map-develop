import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Map</Link>
        </li>
        <li>
          <Link to="/leaflet">Leaflet</Link>
        </li>
        <li>
          <Link to="/mapbox">Mapbox</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
