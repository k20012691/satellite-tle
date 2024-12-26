import { LatLngObject } from "tle.js";

export type SatelliteData = {
    id: number,
    tle: string,
    position: LatLngObject
  };
  