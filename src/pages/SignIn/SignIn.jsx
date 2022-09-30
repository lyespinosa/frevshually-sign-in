import SignInForm from '../../components/organisms/SignInForm/SignInForm'
import DefaultLayout from '../../components/templates/DefaultLayout'
import './style.css'

function SignIn() {
  return (
    <>
        <DefaultLayout>
            <SignInForm/>
        </DefaultLayout>
    </>
  )
}

export default SignIn