import React, { useEffect } from "react"
import { connect } from "react-redux"

import MyMapWithLayer from "./MyMapWithLayer"

import { fetchFavourites, fetchTrails, fetchDocTrails } from "../actions"
import Favourites from "./Favourites"
import Trails from "./Trails"
import Topbar from "./Topbar"

const App = (props) => {
  useEffect(() => {
    // props.dispatch(fetchTrails())
    props.dispatch(fetchDocTrails())
    // props.dispatch(fetchFavourites())
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
