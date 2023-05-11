


const SignUp = () => {

  const handleSubmit = () => {
    console.log('sign up')

  }
  return (
    <>
      <h3 className="page_heading"></h3>
      <div className="sign-up">
        <form onSubmit={handleSubmit}>
          Email: <input type="email" name='email' placeholder="email" />
          <br />
          Password: <input type="password" name='password' placeholder="password" />
          <br />
          <input type='submit' value="Submit" />
        </form>
        <br />
        <div>Already registered, <a href="/signin" >Login</a> here.</div>
      </div>
    </>
  )
}








export default SignUp