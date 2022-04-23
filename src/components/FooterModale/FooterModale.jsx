import React from "react"
import "./footerModale.css"

const FooterModale = ({ footerMsg, footerStyle }) => {
  return (
    <div className="footerModale" style={footerStyle}>
      <h1>{footerMsg}</h1>
    </div>
  )
}

export default FooterModale
