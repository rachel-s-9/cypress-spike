import { useState } from 'react'

export const Counter = ()=>{
    const [count, setCount] = useState(0)

    const handleIncrease=()=>{
        setCount(prev=> prev+1)
    }

    const handleDecrease=()=>{
        setCount(prev => prev-1)
    }
    return(
        <div data-testid="stepper">
            <p>Count is:{count}</p>
            <button onClick={handleIncrease}aria-label="increment">Increase</button>
            <button onClick={handleDecrease} aria-label="decrement">Decrease</button>
        </div>
    )
}
