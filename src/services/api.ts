interface ApiResponse {
  member: any[];
}

export const fetchSatelliteData = async (): Promise<ApiResponse> => {
    const response = await fetch('https://tle.ivanstanojevic.me/api/tle/');
    if (!response.ok) {
      throw new Error('Failed to fetch TLE data');
    }
    return response.json();
};
  