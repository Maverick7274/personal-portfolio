import React from 'react'
import Viewer from '../PDFViewer/Viewer'

function Resume() {
  return (
    <div>
      <Viewer document={'resume.pdf'} ></Viewer>
    </div>
  )
}

export default Resume