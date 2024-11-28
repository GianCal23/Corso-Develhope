import { useState } from "react";

export function useCounter(startingValue = 0) {
    const [counter, setCount] = useState(startingValue)

    const incrementCounter = () => {
        setCount((c) => c + 1)
    }
    const decreasesCounter = () => {
        setCount((c) => c - 1)
    }
    const resetCounter = () => {
        setCount(startingValue)
    }

    return {
        counter: counter,
        onIncrement: incrementCounter,
        onDecrement: decreasesCounter,
        onReset: resetCounter
    }
}