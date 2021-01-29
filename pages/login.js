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
            <form onSubmit={attemptLogin} className="p-5 bg-white w-50 card" >
                <div>
                <input className="login-input" name="email" placeholder="email" type="email"/>
                </div>
                <div>
                <input className="login-input" name="password" placeholder="password" type="password"/>
                </div>
                <div className="d-flex justify-center">
                <button className="login-input bg-blue text-white w-50" type="submit">Login</button>
                </div>
                <div className="d-flex justify-end pt-3">
                    <Link href="/signup">
                        <a className="menu-btn">SignUp instead</a>
                     </Link>
                </div>
            </form>
            </div>
        </div>
      );
}