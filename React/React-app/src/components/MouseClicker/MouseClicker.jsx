const MouseClicker = () => {
    const handleButtonClick = (event) => {
        console.log(event.currentTarget.name);
    }
    return (
        <div>
            <button name="One" onClick={handleButtonClick}>One</button>
            <button name="Two" onClick={handleButtonClick}>
                <img width={30} height={30} src="https://i1.sndcdn.com/artworks-gWgrRFFsqVOqvibH-uPSGGw-t500x500.jpg" />
                Two
            </button>
        </div>
    )
}
export default MouseClicker