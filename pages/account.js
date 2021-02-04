import React, {useState} from 'react';
import Head from 'next/head';
// import Link from 'next/link';
// import Login from './login.js';
// import Signup from './signup.js';

export default function Account (props){
    const [loginForm, setLoginForm] = useState(false)

    const attemptLogin = e => {
        e.preventDefault();
    
        const {email, password} = e.target;
        const data = {
            "email": email.value,
            "password": password.value
        }
        
        fetch(`https://onos-btc.herokuapp.com/api/auth/login`,
          {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
          }
        )
        .then(response => 
          {
            if(response.status === 400){
              alert("please verify your mail");
            }else{
              console.log(response.json())
              alert("logged in successfully")
              // console.log(response);
              // props.setDetails(response.user)
            }
          }
          )
        // .then(response => {const a = response.body.getReader(); console.log(a); return})
        // .then()
    
    }

    const attemptSignUp = e => {
        e.preventDefault();
    
        const {firstName, lastName, email, password, terms} = e.target;        

        const data = {
            "firstName": firstName.value,
            "lastName": lastName.value,
            "email": email.value,
            "password": password.value,
            "terms": terms.checked,
        }
        console.log(data)
        
        const request = fetch(`https://onos-btc.herokuapp.com/api/register`,
          {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
          }
        );
        request.then(response => {
            if(response.status === 400){
                alert("Account could not be created")
            }else if(response.status === 200){
                alert("account created successfully")
            }
        });
    }

    const handleClick = e => {
        let children = e.target.parentNode.children;
        // for(let i=0; i<children.length;i++){
        //     children
        // }
        if(children[0].classList.contains("inactive")){
            children[0].classList.remove("inactive");
            children[2].classList.add("inactive");
            setLoginForm(false)
        }else{
            children[2].classList.remove("inactive");
            children[0].classList.add("inactive");
            setLoginForm(true)
        }


    }

    return (
        <div>
            <Head>
                <link rel="stylesheet" href="css/login.css" type="text/css"/>
            </Head>
            <div className="d-flex justify-center align-center w-100 h-100 absolute bg-l-blue">
              <div className="card bg-white w-40-90">
                <div className="d-flex justify-between h-50-px pointer">
                    <div onClick={handleClick} className="d-flex justify-center align-center w-50 br-tl-soft">Signup</div>
                    <hr/>
                    <div onClick={handleClick} className="d-flex justify-center align-center w-50 br-tr-soft inactive">Login</div>
                </div>
                {loginForm === true ? (
                    <form onSubmit={attemptLogin} className="p-5 bg-white">
                        <div>
                        <input className="login-input" name="email" placeholder="email" type="email" required/>
                        </div>
                        <div>
                        <input className="login-input" name="password" placeholder="password" type="password" required/>
                        </div>
                        <div className="d-flex justify-center">
                        <button className="login-input bg-blue text-white w-50" type="submit">Login</button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={attemptSignUp} className="p-5 bg-white">
                        <div className="d-flex">
                            <div className="mr-3">
                                <input className="login-input" placeholder="First Name" name="firstName" type="text" required/>
                            </div>
                            <div className="ml-3">
                                <input className="login-input" placeholder="Last Name" name="lastName" type="text" required/>
                            </div>
                        </div>
                        <div>
                            <input className="login-input" placeholder="email" name="email" type="email" required/>
                        </div>
                        <div>
                            <input className="login-input" placeholder="password" name="password" type="password" required/>
                        </div>
                        <div className="pt-3"><input type="checkbox" name="terms" />Accept terms and conditions.</div>
                        <div className="d-flex justify-center">
                            <button className="login-input bg-blue text-white w-50" type="submit">Sign Up</button>
                        </div>
                </form>
                )}
              </div>
            </div>
        </div>
    );
    
}