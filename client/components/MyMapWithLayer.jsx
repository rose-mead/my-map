import React, { useState } from "react"
import { connect } from "react-redux"
import MapGL, { Popup, _MapContext as MapContext } from "react-map-gl"
import DeckGL from "@deck.gl/react"
import { GeoJsonLayer } from "@deck.gl/layers"

import Pin from "./Pin"
import PopupInfo from "./PopupInfo"
import Drawer from "./Drawer"
import data from "./data2.json"



import Pins from "./Pins"

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN

function MyMapWithLayer() {

  const [popupInfo, setPopupInfo] = useState(null)

  // viewport is where we want the map to start on
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

  // change the line when you click on it
  const toggleLineStyle = (width) => {
    if (lineStyling.lineWidth == width) {
      return null
    } else if (lineStyling.lineWidth == 50) {
      setLineStyling({
        lineColor: [0, 0, 255, 200],
        lineWidth: 100,
      })
    } else {
      setLineStyling({
        lineColor: [0, 255, 255, 200],
        lineWidth: 50,
      })
    }
  }

  const handleHover = (evt) => {
    const { object } = evt
    // if exiting toggle, make linethickness 50
    // if entering hover, make linethickness 100
    // if during hover, don't change thickness

    if (!object) {
      toggleLineStyle(50)
    } else {
      toggleLineStyle(100)
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
      onHover: handleHover,
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


  // popup html to show when pin has been clicked
  const renderPopup = () => {
    return (
      <Popup
        tipSize={5}
        anchor="top"
        longitude={viewport.longitude}
        latitude={viewport.latitude}
        closeOnClick={true}
        // onClose={()=>setPopupInfo(false)}
        // offset={{top:[0,0]}}
      >
        {" "}
        Info
        <PopupInfo info={popupInfo} />
      </Popup>
    )
  }

  // const renderPins = () => {
  //   return new Array(6).fill(0).map((e, i) => {
  //     const trackData = formatDocTrailAsJson(docTrails[i])
  //     return (
  //       <Pin
  //         handleClick={() => {
  //           setPopupInfo(trackData)
  //           centerViewPortToPin(trackData)
  //         }}
  //         pinInfo={trackData}
  //       />
  //     )
  //   })
  // }

  const renderOnePin = () => {
    return (
      <Pin handleClick={() => setPopupInfo(popupInfo)} pinInfo={popupInfo} />
    )
  }

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
      // onClick={handleMapClick}
    >
      {/* {popupInfo && renderPopup()} */}
      {popupInfo && (
        <Drawer info={popupInfo} onClose={() => setPopupInfo(false)} />
      )}

      {/* put pins in all the spots */}
      {/* if data is there and no popupInfo, render pins, else just render one pin */}
      {!popupInfo ? <Pins setPopupInfo={setPopupInfo} centerViewPortToPin={centerViewPortToPin}/> : renderOnePin()}

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
