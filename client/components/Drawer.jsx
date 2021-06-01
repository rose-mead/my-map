import React from "react"

function Drawer(props) {
  return (
    <div className="drawer">
      <div className="drawer-content">
        <div>
          <h3 className="drawer-title">{props.info.name}</h3>
          <span onClick={props.onClose} className="material-icons close">
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
              <td>{props.info.region}</td>
            </tr>
            <tr>
              <td>
                <span className="material-icons ">pets</span>
              </td>
              <td>Dog friendly:</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>
                <span className="material-icons ">straighten</span>
              </td>
              <td>Distance:</td>
              <td>7km</td>
            </tr>
            <tr>
              <td>
                <span className="material-icons ">terrain</span>
              </td>
              <td>Elevation:</td>
              <td>100m</td>
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
