import Head from 'next/head'
import Link from 'next/link'

export default function Login (props){

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

    return (
        <div>
            <Head>
                <link rel="stylesheet" href="css/login.css" type="text/css"/>
            </Head>
            <div className="d-flex justify-center align-center w-100 h-100 absolute bg-l-blue">
              <div className="card bg-white w-40-90">
                <div className="d-flex justify-between h-50-px pointer">
                    <div onClick={props.setLoginForm(false)} className="d-flex justify-center align-center w-50 br-tl-soft inactive">Signup</div>
                    <hr/>
                    <div className="d-flex justify-center align-center w-50 br-tr-soft">Login</div>
                </div>
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
              </div>
            </div>
        </div>
      );
}