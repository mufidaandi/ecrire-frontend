import { useState } from "react"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"
import '../styles/UserAuth.css'

const UserAuth = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForms = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <> 
    <div className="main-container">
      <div className="half">
        <div className="container">
          <div className="logo">
            <img src="/écrire logo.png" alt="ecrire logo" />
          </div>
        </div>
      </div>
      <div className="half left">
        <div className="form-container">
          { showLoginForm ? <LoginForm toggle={toggleForms} /> 
          : <RegisterForm toggle={toggleForms} /> 
          }
          
        </div>
      </div>
    </div>
    
    </>
  )
}

export default UserAuth