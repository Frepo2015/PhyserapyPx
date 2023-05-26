import React from 'react'
import { Image } from "semantic-ui-react"
import { LoginForm } from "../../components/Auth"
import { logoPxAlt } from "../../assets"
import "./Auth.scss";

export function Auth() {
  return (
    <div className='auth'>
      <div className='auth__content'>
        <Image 
         src={logoPxAlt}
         alt={"Physerapy Solutions"}
         className='auth__content-logo'
        />

        <LoginForm />


      </div>
    </div>
  )
}
