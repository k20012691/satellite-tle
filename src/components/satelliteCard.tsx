import { getIntDesignatorYear, getSatelliteName } from 'tle.js'
import './satelliteCard.css'

type SatelliteCardProps = {
    tle: string;
};

function SatelliteCard({ tle }: SatelliteCardProps) {
  const transformYear = (tle: string) => {
    const year = getIntDesignatorYear(tle)
    if (year <= 9) {
      return `200${year}`
    }
    else if (year > 9 && year <= 56) {
      return `20${year}`
    }
    else {
      return `19${year}`
    }
  }

  return (
    <div id='card-container'>
        <div>{getSatelliteName(tle)}</div>
        <div>{transformYear(tle)}</div>
    </div>
  )
}

export default SatelliteCard