import React from 'react'
import {connect} from 'react-redux'

import {getDocTrailById} from '../apis/docTrails'

import Pin from './Pin'

function Pins ({setPopupInfo, centerViewPortToPin, docTrails}) {

  // on initial load - do api call for doc tracks in the current region
  // convert data to geojson
  // set this data for all of the pins

  // when click on pin - do api call to get more info on that trail
  const handleClick = (id) => {
    // call api
    getDocTrailById(id)
    .then(detailedInfo => {
      setPopupInfo(detailedInfo)
      centerViewPortToPin(detailedInfo)
    })
    // get obj back from api 
    // convert to json (or do this in the api call)
    // set this data in state
   
}

    return docTrails.map((trail, i) => {
      // const trackData = formatDocTrailAsJson(docTrails[i])
      return (
        <Pin
          handleClick={() => handleClick(trail.assetId)}
          pinInfo={trail}
          key={i}
        />
      )
    })
}

function mapStateToProps (globalState) {
  return {
    docTrails: globalState.docTrails
  }
}

export default connect(mapStateToProps)(Pins)