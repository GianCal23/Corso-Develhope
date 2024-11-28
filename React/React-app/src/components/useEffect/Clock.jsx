import { useEffect, useState } from "react";
const Clock = () => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return (
        <div>
            <p>Current time: {date.toLocaleTimeString()}</p>
        </div>
    )
}
export default Clock