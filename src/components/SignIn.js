

const SignIn = () => {

  const handleSubmit = () => {
    console.log('something')
  }


  return (
    <>
      <h3 className="page_heading">Log In</h3>
      <div>
        <form onSubmit={handleSubmit} className="form">
          Email: <input type="email" name='email' placeholder="email" />
          <br />
          Password: <input type="password" name='password' placeholder="password" />
          <br />
          <input type='submit' value="Login" />
        </form>
        <br />
        <div>Not registered yet, <a href="/signup">Signup</a> </div>
      </div>
    </>
  )
}








export default SignIn