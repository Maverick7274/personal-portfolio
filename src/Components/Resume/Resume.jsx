import React from 'react'
import Viewer from '../PDFViewer/Viewer'
import Header from '../Header/Header';

function Resume() {
  return (
    <div>
      <Header />
      <Viewer document={'resume.pdf'} ></Viewer>
    </div>
  )
}

export default Resume