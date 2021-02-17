import { useLayoutEffect, useEffect, useRef, useState } from 'react'

function MouseOverlay (props) {
  const [mousePos, setMousePos] = useState(0, 0)

  useEffect(() => {
    document.addEventListener('mousemove', e => {
      setMousePos({
        x: e.pageX,
        y: e.pageY - window.scrollY
      })
    })
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: mousePos.y,
        left: mousePos.x,
        background: 'radial-gradient(#4c555c55 0, #3C528800 70%)',
        borderRadius: '50%',
        height: '1500px',
        width: '1500px',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: '-1'
      }}
      {...props}
    />
  )
};

export default MouseOverlay
