import React, {useState} from 'react'
import InputType from './InputType'

const Form = ({submitButton, formTitle}) => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  return (
    <>
      <form action="">
        <h1 className='text-center'>{formTitle}</h1>
        <hr />
        <InputType 
          labelText={'Your Email'}
          labelFor={'forEmail'}
          name={'email'}
          inputType={'email'}
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
        />
        <InputType 
          labelText={'Your Password'}
          labelFor={'forPassword'}
          name={'password'}
          inputType={'password'}
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
        />
        <div className="d-flex">
          <button className='btn btn-primary' type='submit'>
            {submitButton}
          </button>
        </div>
      </form>
    </>
  )
}

export default Form