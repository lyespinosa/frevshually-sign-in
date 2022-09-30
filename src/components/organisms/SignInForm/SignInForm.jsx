import Input from '../../atoms/Input/Input'
import Radio from '../../atoms/Radio/Radio'
import Title from '../../atoms/Title/Title'
import Label from '../../molecules/Label/Label'
import './style.css'

function SignInForm() {
  return (
    <div className="form-container">
      <div className="from">
          <Title level={"h2"} text={"Register New User"}/>
          <form action="" id='form'>
            <Label text={"Name"} type={"text"} id={"name"} placeholder={"Write your name"}/>
            <Label text={"Last Name"} type={"text"} id={"lastaName"} placeholder={"Write your last name"}/>
            <Label text={"E-mail"} type={"email"} id={"email"} placeholder={"Write your e-mail"}/>
            <Label text={"Password"} type={"password"} id={"password"} placeholder={"Write a password"}/>
            <Label text={"Confirm password"} type={"password"} id={"cPassword"} placeholder={"Confirm password"}/>
            <Label text={"Birthday"} type={"date"} id={"birthday"} placeholder={"Write your birthday"}/>
            <p>Gender
              <Radio text={"female"} id={"female"} name={"gender"} value={"female"}/>
              <Radio text={"male"} id={"male"} name={"gender"} value={"male"}/>
              <Radio text={"other"} id={"other"} name={"gender"} value={"other"}/>
            </p>
            <Label text={"User Name"} type={"text"} id={"userName"} placeholder={"Write a username"}/>
            <Input id="button" type={"submit"} onclick={console.log("vamoo")} value={"Create"} />
            
          </form>
        </div>
    </div>
  )
}

export default SignInForm