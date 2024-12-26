import { getLatLngObj } from "tle.js";
import { SatelliteData } from "../types";

export const transformSatelliteData = async (member: any[]): Promise<SatelliteData[]> => {
  const formatTle = (name: string, line1: string, line2: string): string => `${name}\n${line1}\n${line2}`;

  const transformedData = await Promise.all(
    member.map(async (satellite) => {
      try {
        const tle = formatTle(satellite.name, satellite.line1, satellite.line2);
        const position = getLatLngObj(tle);

        return {
          id: satellite.satelliteId,
          tle: tle,
          position: position,
        };
      } catch (error) {
        console.warn(`Error processing satellite ${satellite.satelliteId}:`, error);
        return null;
      }
    })
  );

  return transformedData.filter((satellite) => satellite !== null) as SatelliteData[];
};
