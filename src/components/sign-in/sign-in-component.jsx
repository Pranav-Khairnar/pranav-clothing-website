import {React} from 'react'
import {auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils'
import SignUpForm from '../sign-up-form/sign-up-form-component';


const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);

    }
    
    
  return (
    <div>
        <h1>SignIn</h1>
        <button onClick={logGoogleUser}>
            Google
        </button>
        <SignUpForm />
    </div>
  )
}
export default SignIn;