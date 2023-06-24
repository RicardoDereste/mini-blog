import { useEffect, useState } from "react"
import styles from "./Register.module.css"
import { useAuthentication } from "../../hooks/userAuthentication"

const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const { createUser, error: authError, loading } = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {
            displayName,
            email,
            password
        }

        if (password !== ConfirmPassword) {
            setError("Passwords must be the same!")
            return
        }

        await createUser(user)
    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <div className={styles.register}>
            <h1>Register to post</h1>
            <p>Create your account and share your stories</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Name:</span>
                    <input type="text" name="displayName" required placeholder="Username" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" required placeholder="User email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Password:</span>
                    <input type="password" name="password" required placeholder="Create your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    <span>Password Confirmation:</span>
                    <input type="password" name="ConfirmPassword" required placeholder="Confirm your password" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                {!loading && <button className="btn">Register</button>}
                {loading && <button className="btn" disabled>Wait...</button>}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}

export default Register