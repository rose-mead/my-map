import React from "react"
import { useState } from "react"
import MapGL, { Popup } from "react-map-gl"
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

      // getLineColor,
      getLineColor: [0, 255, 255, 200],
      getLineWidth: 50,

      pickable: true,
      // onHover: setHoverInfo,

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
    maxZoom: 8
  };

  return (
    <DeckGL
      layers={layers}
      pickingRadius={5}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      getTooltip={({object}) => object && (object.properties.name || object.properties.station)} 
      onClick={() => setPopupInfo('clicked')}
    >
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Pin onClick={setPopupInfo} />

        {popupInfo && (
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
        )}
      </MapGL>
    </DeckGL>
  )
}

export default MyMapWithLayer
