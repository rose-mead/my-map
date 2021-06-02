import React from "react"
import MapGL from "react-map-gl"

function GLMap({ viewport, setViewport }) {
  const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN

  return (
    <MapGL
      key="map"
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    ></MapGL>
  )
}

export default GLMap
