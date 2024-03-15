import React, { useState } from 'react'

function Sample(props) {
    const [x, setX] = useState(0)
    const increament = () => {
        setX(x+1)
    }
    return (
        <div>
            <h1>{props.first} {props.second} sample file x={x}</h1>
            <button onClick={increament}>Click here</button>
        </div>
    )
}

export default Sample
