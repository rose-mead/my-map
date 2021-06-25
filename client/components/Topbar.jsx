import React from "react"
import { connect } from 'react-redux'

import regions from '../data/regions.json'
import { fetchDocTrails } from '../actions'

function Topbar(props) {

  const handleChange = (evt) => {
      // when a region is selected
      // go and get data for that region
      // render all pins for that region  
      // center viewport around that region

      // how to deal with regions with two region codes??
    props.dispatch(fetchDocTrails(evt.target.value))
    props.centerViewPortToRegion()
  }

 const renderOptions = () => {
   return regions.map(region => {
     return <option key={region.id} value={region.id}>{region.name}</option>
   })
 }



  return (
    <div className="topbar">
      <div className="search">
        <select className="search-input" type='text' name='region'
        onChange={handleChange}>
          <option value='1' >Select a region</option>
          {renderOptions()}
        </select>
      </div>
      <div className="material-icons ">filter_alt</div>
    </div>
  )
}

export default connect()(Topbar)
