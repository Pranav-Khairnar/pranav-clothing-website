import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input-component';
import './sign-in-form-style.scss'
import Button from '../button/button-component';



const defaultFormFields = {
    email : '',
    password :'',

}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    //console.log(formFields);
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields,
            [name] : value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

       
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch(error){
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Wrong Password');
                    break;
                case 'auth/user-not-found' :
                    alert('No user exists with entered email');
                default:
                    console.log('An error encountered', error);
                    break;
            }
        }
    }

    return(
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                

                
                <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email}/>

                
                <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password}/>

                
                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}> Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;