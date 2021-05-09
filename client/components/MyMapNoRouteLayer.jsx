import React from "react"
import { useState } from "react"
import MapGL, { Popup } from "react-map-gl"
import Pin from "./Pin"
import PopupInfo from "./PopupInfo"

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN

function MyMap() {
  const [popupInfo, setPopupInfo] = useState(null)
  const [viewport, setViewport] = useState({
    latitude: -41.3458,
    longitude: 174.936858,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  })

  return (
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
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={setPopupInfo}
        >
          {" "}
          Info
          <PopupInfo info={"popupInfo"} />
        </Popup>
      )}
    </MapGL>
  )
}

export default MyMap
