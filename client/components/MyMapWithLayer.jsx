import React from "react"
import { useState } from "react"
import MapGL, { Popup, _MapContext as MapContext } from "react-map-gl"
import Pin from "./Pin"
import PopupInfo from "./PopupInfo"

import DeckGL from "@deck.gl/react"
import { GeoJsonLayer } from "@deck.gl/layers"

import data from "./data.json"

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN

function MyMapWithLayer() {
  const [popupInfo, setPopupInfo] = useState(null)
  const [viewport, setViewport] = useState({
    latitude: -41.146366,
    longitude: 174.818397,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  })

  const [lineStyling, setLineStyling] = useState({
    lineColor: [0, 255, 255, 200],
    lineWidth: 50
  })

  // const [lineThickness, setLineThickness] = useState(50)
  // const [lineColour, setLineColour] = useState([0, 255, 255, 200])
  const [hoverInfo, setHoverInfo] = useState(false)

  const toggleLineStyle = (width) => {
    if(lineStyling.lineWidth == width) {
      return null
    } else if (lineStyling.lineWidth == 50){
      console.log('setting width')
      setLineStyling({
        lineColor: [0, 0, 255, 200],
        lineWidth: 100
      })
    } else {
        setLineStyling({
          lineColor: [0, 255, 255, 200],
          lineWidth: 50
        })
      }
  }


  const handleHover = (evt) => {
    const { object } = evt

    // if exiting toggle, make linethickness 50
    // if entering hover, make linethickness 100
    // if during hover, don't change thickness

    if(!object) {
      toggleLineStyle(50)
      console.log('exited hover')
    } else {
      toggleLineStyle(100)
    }
    setHoverInfo('info')
    // if entering hover, thicken the line, else make it thin
    // how to do this using only the onHover event handler
    // if(!isHovering){
    //   setIsHovering(true)
    //   console.log('hovering')
    //   // setLineThickness(100)
    // } else {
    //   return null
    // }
  }

  const layers = [
    new GeoJsonLayer({
      id: "geojson",
      data: data,
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

  const INITIAL_VIEW_STATE = {
    latitude: viewport.latitude,
    longitude: viewport.longitude,
    zoom: 12,
    minZoom: 2,
    maxZoom: 8,
  }

  const renderPopup = () => {
   
    return (
      <Popup
        tipSize={5}
        anchor="top"
        longitude={viewport.longitude}
        latitude={viewport.latitude}
        closeOnClick={false}
        onClose={setPopupInfo}
      >
        {" "}
        Info
        <PopupInfo info={"popupInfo"} />
      </Popup>
    )
  }

  return (
    <DeckGL 
      ContextProvider={MapContext.Provider}
      layers={layers}
      pickingRadius={5}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      getTooltip={({ object }) =>
        object && (object.properties.name || object.properties.station)
      }
      onClick={() => setPopupInfo(true)}
      >
        {popupInfo && renderPopup()}
        <Pin onClick={setPopupInfo} />

      <MapGL
        key="map"
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        >

      </MapGL>
    </DeckGL>
  )
}

export default MyMapWithLayer
