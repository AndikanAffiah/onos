import React, { useState } from 'react';
import Head from 'next/head';

export default function PasswordReset(props) {
    const [state, setState] = useState("");
    const [match, setMatch] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        // const request = fetch(`https://onos-btc.herokuapp.com/api/auth/reset-password/`)
    }

    return (
        <div>
            <Head>
                <link rel="stylesheet" href="css/login.css" type="text/css" />
            </Head>
            <div className="d-flex justify-center align-center w-100 h-100 absolute bg-l-blue">
                <form onSubmit={handleSubmit} className="p-5 bg-white w-50 card">
                    <div>
                        <input 
                            onChange={
                                e => {
                                    e.preventDefault();
                                    setState(e.target.value)
                                    }
                            } 
                            value={state} 
                            className="login-input" 
                            name="password" 
                            placeholder="New Password" 
                            type="password" 
                        />
                    </div>
                    <div>
                        <input 
                        onChange={ e => {
                            console.log(e.target.value);
                            (state.length > 1 && state === e.target.value) ? setMatch(true) : setMatch(false)
                            }
                        } 
                        className="login-input" 
                        placeholder="Confirm Password" 
                        type="password" />
                    </div>
                    <div className="d-flex justify-center">
                        <button className="login-input bg-blue text-white w-50" type="submit">Change</button>
                    </div>
                </form>
            </div>
        </div>
    );
}