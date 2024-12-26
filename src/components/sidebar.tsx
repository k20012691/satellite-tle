import { useSatelliteContext } from '../store/satelliteContext';
import SatelliteCard from './satelliteCard';
import './sidebar.css';

type Props = {};

function Sidebar({}: Props) {
  const { satellites, flyToSatellite } = useSatelliteContext();

  if (!flyToSatellite) {
    console.warn('flyToSatellite is not yet initialized.');
  }

  return (
    <div id="sidebar-container">
      <h2>Satellite TLE Data</h2>
      <span>
        This dashboard displays the representative locations for man-made bodies in Earth's orbit
        on a 2D map.
      </span>
      <div id="satellite-data">
        <ul>
          {satellites.map((satellite) => (
            <li
              key={satellite.id}
              onClick={() => flyToSatellite(satellite.position.lng, satellite.position.lat)}
            >
              <SatelliteCard tle={satellite.tle} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
