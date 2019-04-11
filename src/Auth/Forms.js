import React from 'react'
import LogInForm from './LogInForm'
import LogByGoogleForm from './LogByGoogleForm'
import RegistrationForm from './RegistrationForm'

const Forms = (props) => (
    <div>
        <LogInForm />
        <LogByGoogleForm />
        <RegistrationForm />
    </div>
)

export default Forms