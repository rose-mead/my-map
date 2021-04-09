import React from 'react'
import { connect } from 'react-redux'


function Trails (props) {
    return (
        <>
         <ul>
          {props.trails.map(trail => (
            <li key={trail.id}>{trail.name}</li>
          ))}
        </ul>
        </>
    )
}

const mapStateToProps = (globalState) => {
    return {
      trails: globalState.trails
    }
  }

export default connect(mapStateToProps)(Trails)