import React, { useRef, useEffect } from 'react'

function Viewer(props) {

    const containerRef = React.useRef(null);

    useEffect(() => {
      const container = containerRef.current;
      let instance, PSPDFKit;

      (async function (){
        PSPDFKit = await import("pspdfkit");
        instance = await PSPDFKit.load({
          container,
          document: props.document,
          baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
        });
      
      })();

        return () => PSPDFKit && PSPDFKit.unload(container);

    }, []);



  return (
    <div ref={containerRef} className="w-full h-screen">
        
    </div>
  )
}

export default Viewer