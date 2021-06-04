import React from 'react'
import {formatDocTrailAsJson} from './utils'
// use this data for now - replace with api and gs
import docTrails from "./docData.json"
import trailData from "./trailData.json"
import Pin from './Pin'

function Pins ({setPopupInfo, centerViewPortToPin}) {
    return new Array(6).fill(0).map((e, i) => {
      // const trackData = formatDocTrailAsJson(docTrails[i])
      const trackData = formatDocTrailAsJson(trailData)

      return (
        <Pin
          handleClick={() => {
            setPopupInfo(trackData)
            centerViewPortToPin(trackData)
          }}
          pinInfo={trackData}
          key={i}
        />
      )
    })
}

export default Pins