import React, { useState} from "react"

export const Login = ({handleUser}) => {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [activePassword, setActivePassword] = useState(false);

    const handleLogin = e => {
        setLogin(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
    }
    const handleCheckbox = () => {
        setActivePassword(!activePassword);
    }

    return (
        <>
            <div className="main__admin">
                <div className="container">
                    <div className="login__box">
                        <form onSubmit={handleSubmit}>
                            <label>
                                Login:
                                <input type="login" onChange={handleLogin}/>
                            </label>
                            <label>
                                Password:
                                <input type={activePassword ? "text" : "password"} onChange={handlePassword}/>
                            </label>
                            <label className="checkbox">
                                <input type="checkbox" onChange={handleCheckbox}/>
                                Show password
                            </label>
                            <button onClick={() => handleUser(login, password)}>Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}