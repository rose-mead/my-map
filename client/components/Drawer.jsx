import React from "react"

function Drawer(props) {
  return (
    <div className="drawer">
      <div className="drawer-content">
        <div>
          <h3>{props.info.name}</h3>
          <span onClick={props.onClose} class="material-icons close">close</span>
        </div>

        {/* <ul>
                <li>Region: Wellington</li>
                <li>Dog friendly: Yes</li>
                <li>Distance: 7km</li>
            </ul> */}
        <table>
          <tr>
            <td>
              <span class="material-icons ">map</span>
            </td>
            <td>Region:</td>
            <td>Wellington</td>
          </tr>
          <tr>
            <td>
              <span class="material-icons ">pets</span>
            </td>
            <td>Dog friendly:</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>
              <span class="material-icons ">straighten</span>
            </td>
            <td>Distance:</td>
            <td>7km</td>
          </tr>
          <tr>
            <td>
              <span class="material-icons ">terrain</span>
            </td>
            <td>Elevation:</td>
            <td>100m</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Drawer
