import Head from 'next/head'
import Link from 'next/link'

export default function Signup (props){

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

    return (
        <div>
            <Head>
                <link rel="stylesheet" href="css/login.css" type="text/css"/>
            </Head>
            <div className="d-flex justify-center align-center w-100 h-100 absolute bg-l-blue">
                <div className="card bg-white w-40-90">
                    <div className="d-flex justify-between h-50-px pointer">
                        <div className="d-flex justify-center align-center w-50 br-tl-soft border-bottom-1">Signup</div>
                        <hr/>
                        <div onClick={props.setLoginForm(true)} className="d-flex justify-center align-center w-50 br-tr-soft inactive">Login</div>
                    </div>
                    <hr/>
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
                        <div className="pt-3"><input type="checkbox" name="terms" required/>Accept terms and conditions.</div>
                        <div className="d-flex justify-center">
                            <button className="login-input bg-blue text-white w-50" type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      );
}
