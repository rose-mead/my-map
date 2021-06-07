import React, { useState } from "react"
import { connect } from "react-redux"
import MapGL, { _MapContext as MapContext } from "react-map-gl"
import DeckGL from "@deck.gl/react"
import { GeoJsonLayer } from "@deck.gl/layers"

import Pin from "./Pin"
import Drawer from "./Drawer"

import Pins from "./Pins"
const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN



function MyMapWithLayer() {

  const [popupInfo, setPopupInfo] = useState(null)

  // viewport is where we want the map to be centered on
  const [viewport, setViewport] = useState({
    latitude: -41.146366,
    longitude: 174.818397,
    zoom: 12,
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
      zoom: 14,
    })
    // longitude: -74.1,
    // latitude: 40.7,

    // transitionInterpolator: new FlyToInterpolator(),
    // transitionEasing: d3.easeCubic
  }

   function toggleLineStyle(width) {
    // change the line when you click on it
     // if exiting toggle, make linethickness 50
      // if entering hover, make linethickness 100
      // if during hover, don't change thickness
      if (lineStyling.lineWidth == width) {
        return null
      } else if (lineStyling.lineWidth == 50) {
        return {
          lineColor: [0, 0, 255, 200],
          lineWidth: 100,
        }
      } else {
        return{
          lineColor: [0, 255, 255, 200],
          lineWidth: 50,
        }
      }
    }
    

  const handleLineHover = (evt) => {
    const { object } = evt
   
    if (!object) {
      setLineStyling(toggleLineStyle(50))
    } else {
      setLineStyling(toggleLineStyle(100))
    }
    // setHoverInfo("info")
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
      <MapGL
      key="map"
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    ></MapGL>
    </DeckGL>
  )
}

function mapStateToProps(globalState) {
  return {
    docTrails: globalState.docTrails,
  }
}

export default connect(mapStateToProps)(MyMapWithLayer)
