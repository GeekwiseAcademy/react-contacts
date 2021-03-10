import LoginForm from "./LoginForm"

const LoginPage = (props) => {
    return (
        <div>
            <LoginForm />
            <div>
                <p>Don't have an account? <a href="/register">Register</a>.</p>
            </div>
        </div>
    )
}

export default LoginPage;