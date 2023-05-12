import signIn from '../assets/signIn.png'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ login }) => {

  const formRef = useRef()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // store the form entries in a variable
    const formData = new FormData(formRef.current)
    // create and object from the entries
    const data = Object.fromEntries(formData)
    // store user's info in format that can be used with jwt.
    const userInfo = {
      "user": { email: data.email, password: data.password }
    }
    login(userInfo)
    navigate("/")
    e.target.reset()
  }

  return (
    <>
      <img className='signinwords' src={signIn} />
      <div className="sign-in">
        <form ref={formRef} onSubmit={handleSubmit} className="form">
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