import { useEffect, useRef } from 'react'

function useInterval(cb, interval) {
    const savedCB = useRef();
    useEffect(() => {
        function tick() {
            savedCB.current()
        }
        if (interval !== null) {
            let x = setInterval(tick, interval);
            return () => clearInterval(x)
        }
    }, [interval])
    useEffect(() => {
        savedCB.current = cb
    }, [cb])
}

export default useInterval;