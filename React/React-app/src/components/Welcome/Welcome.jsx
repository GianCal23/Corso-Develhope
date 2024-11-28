import Message from "../Hello/Message";
import Age from "./Age";

const Welcome = ({ name, age }) => {
    return (
        <div className="welcome">
            <p>Welcome, {name}!</p>
            {age > 18 && <Age age={age} />}
            {age && <Age age={age} />}
            {age > 18 && age < 65 && <Age age={age} />}
            {age > 18 && name === "John" && <Age age={age} />}
            {age > 18 && <Age age={age} />}
            <Message age={age} />
        </div>)
}
export default Welcome