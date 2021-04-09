import React, { useEffect } from 'react'
import { connect } from 'react-redux'


import { fetchTrails } from '../actions'
import Trails from './Trails'

const App = (props) => {
  useEffect(() => {
    props.dispatch(fetchTrails())
  })

  return (
    <>
      <div className='app'>
        <h1>My Map</h1>
       <Trails/>
      </div>
    </>
  )
}


export default connect()(App)
