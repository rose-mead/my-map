import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getDocTrails } from '../apis/doc-trails'

import MyMapWithLayer from './MyMapWithLayer'


import { fetchFavourites, fetchTrails } from '../actions'
import Favourites from './Favourites'
import Trails from './Trails'

const App = (props) => {
  useEffect(() => {
    props.dispatch(fetchTrails())
    props.dispatch(fetchFavourites())
    getDocTrails()
  })

  return (
    <>
      <div className='app'>
        <h1>My Map</h1>
       <Trails/>
       <Favourites/>
       <MyMapWithLayer/>
      </div>
    </>
  )
}


export default connect()(App)

