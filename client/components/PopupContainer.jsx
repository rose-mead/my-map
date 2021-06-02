import React from 'react'
import PopupInfo from './PopupInfo'
import { Popup } from "react-map-gl"

function PopupContainer () {
    return (
    <Popup
      tipSize={5}
      anchor="top"
      longitude={viewport.longitude}
      latitude={viewport.latitude}
      closeOnClick={true}
      // onClose={()=>setPopupInfo(false)}
      // offset={{top:[0,0]}}
    >
      {" "}
      Info
      <PopupInfo info={popupInfo} />
    </Popup>
    )
}

export default PopupContainer