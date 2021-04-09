import React from 'react'
import { connect } from 'react-redux'


function Favourites (props) {
    return (
        <>
         <ul>
          {props.favourites.map(favourite => (
            <li key={favourite.id}>{favourite.name}</li>
          ))}
        </ul>
        </>
    )
}

const mapStateToProps = (globalState) => {
    return {
      favourites: globalState.favourites
    }
  }

export default connect(mapStateToProps)(Favourites)