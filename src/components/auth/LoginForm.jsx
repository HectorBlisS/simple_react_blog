import React from 'react'

export default function LoginForm() {
    return (
        <section className="login-form">
            <input type="text" placeholder="your email" />
            <input type="password" placeholder="your password" />
            <button>Entrar</button>
        </section>
    )
}