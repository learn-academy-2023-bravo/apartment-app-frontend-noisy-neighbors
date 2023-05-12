import signUp from '../assets/signUp.png'

const SignUp = () => {

  const handleSubmit = () => {
    console.log('something')
  }


  return (
    <>
      <img className='signupwords'src={signUp} />
      <div className="sign-up">
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
        <div className="sign-up-words">Already registered? <a href="/signup">Login Now!</a> </div>
      </div>
    </>
  )
}







export default SignUp