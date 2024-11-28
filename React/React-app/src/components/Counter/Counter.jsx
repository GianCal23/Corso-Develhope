import { useCounter } from "../customHooks/useCounter/useCounter"


const Counter = ({ startingValue = 0 }) => {
    const { counter, onIncrement, onDecrement, onReset } = useCounter(startingValue)

    return (
        <div style={{
            fontSize: "100px",
            color: "red",
        }}>
            <h2>Counter: {counter}</h2>
            <button onClick={onIncrement}>Incrementa</button>
            <button onClick={onDecrement}>Decrementa</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}
export default Counter

