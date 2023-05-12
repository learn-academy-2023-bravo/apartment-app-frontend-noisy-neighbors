import signUp from '../assets/signUp.png'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = ({ signup }) => {

  const formRef = useRef()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(formRef.current)

    const data = Object.fromEntries(formData)

    const userInfo = {
      "user":{ email: data.email, password: data.password }
    }
    signup(userInfo)
    navigate("/")
    e.target.reset()
  }


  return (
    <>
      <img className='signupwords'src={signUp} />
      <div className="sign-up">
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
        <div className="sign-up-words">Already registered? <a href="/signup">Login Now!</a> </div>
      </div>
    </>
  )
}







export default SignUp