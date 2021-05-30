import React from "react"

function Topbar() {
  return (
    <div className="topbar">
      <div className="search">
        <input className="search-input" type='text'/>
        <span className="material-icons search-icon" onClick={() => console.log('clicked')}>
search
</span>
      </div>
      <div className="material-icons ">filter_alt</div>
    </div>
  )
}

export default Topbar
