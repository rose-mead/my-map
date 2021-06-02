import React, { useState } from "react"
import { connect } from "react-redux"
import MapGL, { _MapContext as MapContext } from "react-map-gl"
import DeckGL from "@deck.gl/react"
import { GeoJsonLayer } from "@deck.gl/layers"
import {toggleLineStyle} from './utils'

import Pin from "./Pin"
import Drawer from "./Drawer"

import Pins from "./Pins"
import GLMap from "./GLMap"


function MyMapWithLayer() {

  const [popupInfo, setPopupInfo] = useState(null)

  // viewport is where we want the map to be centered on
  const [viewport, setViewport] = useState({
    latitude: -41.146366,
    longitude: 174.818397,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  })

  // whats the difference between viewport and INITIAL_VIEW_STATE?
  const INITIAL_VIEW_STATE = {
    latitude: viewport.latitude,
    longitude: viewport.longitude,
    zoom: 12,
    minZoom: 2,
    maxZoom: 8,
  }

  // styling for the trail line
  const [lineStyling, setLineStyling] = useState({
    lineColor: [0, 255, 255, 200],
    lineWidth: 50,
  })

  const centerViewPortToPin = (pinData) => {
    setViewport({
      ...viewport,
      latitude: pinData.lat,
      longitude: pinData.lon,
    })
  }

  const handleLineHover = (evt) => {
    const { object } = evt
   
    if (!object) {
      setLineStyling(toggleLineStyle(50))
    } else {
      setLineStyling(toggleLineStyle(100))
    }
    setHoverInfo("info")
  }

  // create a deck layer for the trail lines
  const layers = [
    new GeoJsonLayer({
      id: "geojson",
      data: popupInfo,

      stroked: false,
      filled: false,
      lineWidthMinPixels: 0.5,
      parameters: {
        depthTest: false,
      },
      getLineColor: lineStyling.lineColor,
      getLineWidth: lineStyling.lineWidth,

      pickable: true,
      onHover: handleLineHover,
      updateTriggers: {
        getLineColor: [255, 255, 0, 200],
        // getLineWidth: {year}
      },

      transitions: {
        getLineColor: 1000,
        getLineWidth: 1000,
      },
    }),
  ]

  return (
    // deckGL map layer, allows to use layers
    <DeckGL
      ContextProvider={MapContext.Provider}
      layers={layers}
      pickingRadius={5}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      getTooltip={({ object }) =>
        object && (object.properties.name || object.properties.station)
      }
    >
      {/* {popupInfo && renderPopup()} */}
      {popupInfo && (
        <Drawer info={popupInfo} onClose={() => setPopupInfo(false)} />
      )}

      {/* put pins in all the spots */}
      {/* if data is there and no popupInfo, render pins, else just render one pin */}
      {!popupInfo ? <Pins setPopupInfo={setPopupInfo} centerViewPortToPin={centerViewPortToPin}/> : <Pin handleClick={() => setPopupInfo(popupInfo)} pinInfo={popupInfo} />}

      {/* Mapgl - just the regular map */}
      <GLMap viewport={viewport} setViewport={setViewport}/>
    </DeckGL>
  )
}

function mapStateToProps(globalState) {
  return {
    docTrails: globalState.docTrails,
  }
}

export default connect(mapStateToProps)(MyMapWithLayer)
