import React from 'react'

function Drawer (props) {
    return (

        <div className="drawer">
            <h3>{props.info.name}</h3>
            <ul>
                <li>Region: Wellington</li>
                <li>Dog friendly: Yes</li>
                <li>Distance: 7km</li>
            </ul>
        </div>
    )
}

export default Drawer