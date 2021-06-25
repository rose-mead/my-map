import React, {useState} from "react"

import MyMap from "./MyMap"
import Topbar from "./Topbar"

const App = () => {
  const [viewport, setViewport] = useState({
    latitude: -41.146366,
    longitude: 174.818397,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  })


  const centerViewPortToRegion = () => {
    setViewport(curState => {
      return {
        ...curState,
        zoom: 12,
        minZoom: 2,
        maxZoom: 8,
        latitude:-41.173324,
        longitude: 173.391475,
      }
    })
  }

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


  return (
    <>
      <div className="app">
        <Topbar centerViewPortToRegion={centerViewPortToRegion}/>
        <MyMap viewport={viewport} centerViewPortToPin={centerViewPortToPin} setViewport={setViewport}/>
      </div>
    </>
  )
}

export default App
