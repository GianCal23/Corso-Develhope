import { useState } from "react"

export function useLogin(onLogin) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        onLogin({ username, password, rememberMe })
    }
    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleRememberMe = (event) => {
        setRememberMe(event.target.checked)
    }

    return {
        login: handleSubmit,
        username: handleUsername,
        password: handlePassword,
        checkbox: handleRememberMe
    }
}