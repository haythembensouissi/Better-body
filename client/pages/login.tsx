
function login (){
    return(

<div className="container">

<div className="login-signup-cards">

  <div className="login-card">

    <div className="login-card-items">

      <h1 className="login-tag">Log In</h1>

      <form className="form-items">

        <input className="email-item" type="email" placeholder="E-Mail" />

        <div className="password-item">

          <input type="password" placeholder="Password" />

          <div className="forgot-password-item">

            <a href="#">Forgot password?</a>

          </div>

        </div>

        <button className="button-item" type="button">Log In</button>

        <div className="create-account-item">

     <a href="/signup">Don't have an account? <span>Sign Up</span></a>

        </div>

      </form>

    </div>

  </div>



</div>

</div>
    )
}
export default login