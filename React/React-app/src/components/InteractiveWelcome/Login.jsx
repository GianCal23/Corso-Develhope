import { useLogin } from "../customHooks/useSubmit/useLogin"

const Login = ({ onLogin }) => {
    const { login, username, password, checkbox } = useLogin(onLogin)
    const buttonDisabled = !username || !password
    return (
        <form onSubmit={login}>
            <input type="text" value={username} onChange={username} />
            <input type="password" value={password} onChange={password} />
            <input type="checkbox" checked={checkbox} onChange={checkbox} />
            <button style={{
                backgroundColor: password.length < 8 ? 'red' : 'green'
            }} type="submit" disabled={buttonDisabled}>Login</button>
        </form>
    )
}
export default Login