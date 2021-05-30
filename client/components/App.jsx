import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getDocTrailsByRegion } from "../apis/doc-trails"

import MyMapWithLayer from "./MyMapWithLayer"

import { fetchFavourites, fetchTrails } from "../actions"
import Favourites from "./Favourites"
import Trails from "./Trails"
import Topbar from "./Topbar"

const App = (props) => {
  useEffect(() => {
    props.dispatch(fetchTrails())
    props.dispatch(fetchFavourites())
    getDocTrailsByRegion("NZ-WGN")
  })

  return (
    <>
      <div className="app">
        <Topbar />
        {/* <Trails /> */}
        {/* <Favourites /> */}
          <MyMapWithLayer />
      </div>
    </>
  )
}

export default connect()(App)
