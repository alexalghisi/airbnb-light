import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mode, setMode] = useState('login'); // 'login' or 'register'

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (mode === 'login') {
                await signInWithEmailAndPassword(auth, email, password);
                alert('Login successful');
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
                alert('Account created');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>{mode === 'login' ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                /><br /><br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                /><br /><br />
                <button type="submit">{mode === 'login' ? 'Login' : 'Register'}</button>
            </form>
            <p style={{ marginTop: '1rem' }}>
                {mode === 'login' ? 'Need an account?' : 'Already have an account?'}{' '}
                <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
                    {mode === 'login' ? 'Register here' : 'Login here'}
                </button>
            </p>
        </div>
    );
}
