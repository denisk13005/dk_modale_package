import React, { useState } from "react"
import { storiesOf } from "@storybook/react"

import { Modal } from "../components/Modal"

const stories = storiesOf("App Test", module)

stories.add("App", () => {
  //for open the modal
  const [modalIsOpen, setModalIsOpen] = useState(true)
  const backgroundModalContainerStyle = { backgroundColor: "lightBlue" }
  const modalContainerStyle = { backgroundColor: "pink" }
  const modalMessage = "All Is All Right"
  const closeBtnStyle = { backgroundColor: "green" }
  const headerStyle = { backgroundColor: "yellow" }
  const headerMsg = "This is header message"
  const footerStyle = { backgroundColor: "brown" }
  const footerMsg = "This is a footer message"

  return (
    <Modal
      status={modalIsOpen}
      modalMessage={modalMessage}
      backgroundModalContainerStyle={backgroundModalContainerStyle}
      modalContainerStyle={modalContainerStyle}
      closeBtnStyle={closeBtnStyle}
      headerStyle={headerStyle}
      headerMsg={headerMsg}
      footerStyle={footerStyle}
      footerMsg={footerMsg}
    />
  )
})
