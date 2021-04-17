import React, { useState, useEffect } from 'react'
import SignIn from '../components/Signin';
import SignUp from '../components/SignUp';
import { auth } from '../utils/firebase';
import { useHistory } from 'react-router-dom';
import "./auth.scss"

function Auth() {
    const history = useHistory();
    const [authType, setAuthType] = useState('signIn');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) history.push('/feed')
        })
    }, [])

    return (
        <div className='auth'>
            {authType === 'signIn' ?
                <div className='container'>
                    <SignUp />
                    <p>New here? <span onClick={() => setAuthType('signUp')}>Create account.</span></p>
                </div>
                :
                <div className='container'>
                    <SignIn />
                    <p>Have an account? <span onClick={() => setAuthType('signIn')}>Sign In.</span></p>
                </div>
            }
        </div>
    )
}

export default Auth