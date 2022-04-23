import React from "react"
import "./headerModale.css"

const HeaderModale = ({ headerMsg, headerStyle }) => {
  return (
    <div className="headerModal" style={headerStyle}>
      <h1>{headerMsg}</h1>
    </div>
  )
}

export default HeaderModale
