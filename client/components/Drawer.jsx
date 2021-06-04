import React from "react"

function Drawer({info, onClose}) {
    const {name, region, dogsAllowed, walkDuration, distance, walkTrackCategory} = info

  return (
    <div className="drawer">
      <div className="drawer-content">
        <div>
          <h3 className="drawer-title">{name}</h3>
          <span onClick={onClose} className="material-icons close">
            close
          </span>
        </div>

        <table>
          <tbody>
            <tr>
              <td>
                <span className="material-icons ">map</span>
              </td>
              <td>Region:</td>
              <td>{region}</td>
            </tr>
            <tr>
              <td>
                <span className="material-icons ">pets</span>
              </td>
              <td>Dog friendly:</td>
              <td>{dogsAllowed}</td>
            </tr>
            <tr>
              <td>
                <span className="material-icons ">straighten</span>
              </td>
              <td>Distance:</td>
              <td>{walkDuration} {distance}</td>
            </tr>
            <tr>
              <td>
                <span className="material-icons ">terrain</span>
              </td>
              <td>Category:</td>
              <td>{walkTrackCategory}</td>
            </tr>
          </tbody>
        </table>
        <div className="circle-icon">
          <span className="material-icons">favorite_border</span>
        </div>
      </div>
    </div>
  )
}

export default Drawer
