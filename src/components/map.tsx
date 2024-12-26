import { useEffect, useRef } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import './map.css';
import { fetchSatelliteData } from '../services/api';
import { useSatelliteContext } from '../store/satelliteContext';
import { transformSatelliteData } from '../utils/transformSatelliteData';

type Props = {};

function Map({}: Props) {
  const map = useRef<maptilersdk.Map | null>(null);
  const mapContainer = useRef<HTMLDivElement | null>(null);

  const { setSatellites, setFlyToSatellite } = useSatelliteContext();

  maptilersdk.config.apiKey = 'BrsYCaPwUgR1Xs8LiBuB';

  useEffect(() => {
    if (!mapContainer.current) return;

    if (!map.current) {
      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        style: 'https://api.maptiler.com/maps/79dfa750-ce53-47f6-ac64-cccf3d678128/style.json?key=BrsYCaPwUgR1Xs8LiBuB',
      });

      map.current.scrollZoom.disable();
    }

    const getData = async () => {
      try {
        const data = await fetchSatelliteData();
        const transformedData = await transformSatelliteData(data.member);
        setSatellites(transformedData);

        transformedData.forEach((satellite) => {
          if (map.current && satellite.position.lat) {
            new maptilersdk.Marker()
              .setLngLat([satellite.position.lng, satellite.position.lat])
              .addTo(map.current);
          }
        });
      } catch (err) {
        console.error(err);
      }
    };

    getData();

    const flyToSatellite = (lng: number, lat: number) => {
      map.current?.flyTo({ center: [lng, lat], zoom: 8 });
    };

    setFlyToSatellite(() => flyToSatellite);
  }, [setSatellites, setFlyToSatellite]);

  return (
    <div className="map-wrap">
      <button
        onClick={() => map.current?.flyTo({ center: [0, 2.8], zoom: 1 })}
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          zIndex: 1,
        }}
      >
        Recenter
      </button>
      <div ref={mapContainer} className="map" />
    </div>
  );
}

export default Map;
