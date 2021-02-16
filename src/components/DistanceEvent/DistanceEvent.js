import { useEffect, useRef, useState } from 'react'

function DistanceEvent (props) {
    const {children, onMove} = props;
    const startingFrom = props.startingFrom || 500;
    const elRef = useRef(null);
    const [percentage, setPercentage] = useState(100);

    const calculateDistance = (elem, mouseX, mouseY) => {
        const elPos = elem.getBoundingClientRect();
        console.log('elPos', elPos)
        const centerElPos = {
            x: elPos.x + elPos.width / 2,
            y: elPos.y + elPos.height / 2,
        }

        if (elPos) {
            let xs = centerElPos.x - mouseX;
            let ys = centerElPos.y - mouseY;
                
            xs *= xs;
            ys *= ys;
                
            return Math.sqrt( xs + ys );
        }
        
        return null;
    };

    useEffect(() => {
        document.addEventListener('mousemove', e => {
            if (!elRef.current) {
                return null;
            }

            const mX = e.pageX;
            const mY = e.pageY;
            const distance = calculateDistance(elRef.current, mX, mY);
            const calcPercentage = distance >= startingFrom ? 100 : distance / startingFrom * 100;

            setPercentage(calcPercentage);
        })
    }, []);

    useEffect(() => {
        onMove && onMove(percentage, elRef);
    }, [percentage]);

    return (<div ref={elRef} {...props}>{children}</div>)
};

export default DistanceEvent
