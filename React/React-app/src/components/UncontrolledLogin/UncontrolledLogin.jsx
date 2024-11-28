
const UncontrolledLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const password = form.password.value;
        const remember = form.remember.checked;

        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Remember Me:", remember);
    }

    const loginWithFormData = (event) => {
        event.preventDefault();

        const form = event.target.form;
        const formData = new FormData(form);

        const username = formData.get("username");
        const password = formData.get("password");
        const remember = formData.get("remember") === "on";


        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Remember Me:", remember);
    };
    return (
        <form onSubmit={handleLogin}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
            </div>
            <div>
                <label htmlFor="remember">Remember Me:</label>
                <input type="checkbox" id="remember" name="remember" />
            </div>
            <div>
                <button type="submit">Login</button>
                <button type="button" onClick={loginWithFormData}>
                    Login with FormData
                </button>
            </div>
        </form>
    );
}
export default UncontrolledLogin