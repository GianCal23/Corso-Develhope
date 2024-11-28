const AlertClock = () => {
    function buttonClick() {
        const time = new Date()

        alert(`The current time is ${time.toLocaleTimeString()}`)
    }

    return (
        <div>
            <button onClick={buttonClick}>Cliccami!</button>
        </div>
    )
}

export default AlertClock