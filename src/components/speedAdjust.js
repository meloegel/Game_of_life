import React from 'react'

const speedAdjust = ({ rate, onSpeedChange }) => {
    const handleChange = (e) => onSpeedChange(e.target.value)
    return (
        <input type='range' min='25' max='700' step='50' value={rate} onChange={handleChange} />
    )
}
export default speedAdjust