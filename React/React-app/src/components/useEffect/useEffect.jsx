import { useEffect, useState } from "react";
const Counter = ({ initialValue = 0 }) => {
    const [counter, setCounter] = useState(initialValue)
    useEffect(() => {
        console.log(`Il valore del counter è di ${counter}`);
        return () => {
            console.log(`Il valore del counter era ${counter}`);
        }
    }, [counter])
    const incrementCounter = () => {
        setCounter((c) => c + 1)
    }
    const decreasesCounter = () => {
        setCounter((count) => count - 1)
    }
    const resetCounter = () => {
        setCounter(initialValue)
    }
    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={incrementCounter}>Click</button>
            <button onClick={decreasesCounter}>Click</button>
            <button onClick={resetCounter}>Click</button>
        </div>
    )
}
export default Counter