import signIn from '../assets/signIn.png'

const SignIn = () => {

  const handleSubmit = () => {
    console.log('something')
  }

  return (
    <>
      <img className='signinwords'src={signIn} />
      <div className="sign-in">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-row">
          <label>Email:</label> <input type="email" name='email' placeholder="email" />
          </div>
          <br />
          <div className="form-row">
          <label>Password:</label> <input type="password" name='password' placeholder="password" />
          </div>
          <br />
          <input className="submit-button" type='submit' value="Login" />
        </form>
        <br />
        <div className="sign-in-words">Not registered yet? <a href="/signup">Signup Now!</a> </div>
      </div>
    </>
  )
}








export default SignIn