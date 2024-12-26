import React, { createContext, useState, useContext, ReactNode } from 'react';
import { SatelliteData } from '../types';

type SatelliteContextType = {
  satellites: SatelliteData[];
  setSatellites: React.Dispatch<React.SetStateAction<SatelliteData[]>>;
  flyToSatellite: (lng: number, lat: number) => void;
  setFlyToSatellite: React.Dispatch<
    React.SetStateAction<(lng: number, lat: number) => void>
  >;
};

const SatelliteContext = createContext<SatelliteContextType | undefined>(undefined);

interface SatelliteProviderProps {
  children: ReactNode;
}

export const SatelliteProvider: React.FC<SatelliteProviderProps> = ({ children }) => {
  const [satellites, setSatellites] = useState<SatelliteData[]>([]);
  const [flyToSatellite, setFlyToSatellite] = useState<
    (lng: number, lat: number) => void
  >(() => {
    console.warn('flyToSatellite is not yet initialized.');
  });

  return (
    <SatelliteContext.Provider
      value={{
        satellites,
        setSatellites,
        flyToSatellite,
        setFlyToSatellite,
      }}
    >
      {children}
    </SatelliteContext.Provider>
  );
};

export const useSatelliteContext = () => {
  const context = useContext(SatelliteContext);
  if (!context) {
    throw new Error('useSatelliteContext must be used within a SatelliteProvider');
  }
  return context;
};
