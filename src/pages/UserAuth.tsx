import LoginForm from "../components/LoginForm"
// import RegisterForm from "../components/RegisterForm"
import '../styles/UserAuth.css'

const UserAuth = () => {
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
          <LoginForm></LoginForm>
          {/* <RegisterForm /> */}
        </div>
      </div>
    </div>
    
    </>
  )
}

export default UserAuth