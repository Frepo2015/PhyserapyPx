import React, { useState, useEffect } from 'react'
import { Form } from "semantic-ui-react";
import { useFormik } from "formik"
import { useNavigate} from "react-router-dom"; 
import {initialValues, validationSchema } from "./LoginForm.data"
import { Auth } from "../../../api"
import { map } from "lodash"

import "./LoginForm.scss"

const authController = new Auth();

export function LoginForm() {

  const navigate = useNavigate();
  const idPacientes = []
  
  const [pacientes, setPacientes] = useState([])

  useEffect(() => {
    (async () => {
        try {
            const response = await authController.obtainAll()
            setPacientes(response);
        } catch (error) {
            console.error(error)
        }
    })()
}, [])


  map(pacientes, (item) => {
    idPacientes.push(item.id)
  })

function compare(px){
  let element
  console.log(idPacientes.length)
  for (let i = 0; i < idPacientes.length; i++) {
    element =idPacientes[i];
    
    if(element === px){
      return true
    }
    
  }

  return false

}




  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        
        
          console.log(`formValue: ${formValue.px}`)
        const pathTF = compare(formValue.px);
        const id = pathTF ? formValue.px : ''
        console.log(`valor: ${id}`)
        navigate(`/${id}`)
      } catch (error) {
        throw error
      }
    }
  })
  
  return (
    <div className='login-form' onSubmit={formik.handleSubmit}>
      <h1>Busca tus videos</h1>

      <Form >
        <Form.Input
        label='Expediente'
          name="px"
          type="text"
          placeholder="Numero de expediente"
          icon="sticky note outline"
          onChange={formik.handleChange}
            value={formik.values.px}
            error={formik.errors.px}
        />

        <Form.Button type='submit' primary fluid loading={formik.isSubmitting} >
          Iniciar sesion
        </Form.Button>
      </Form>

      
    </div>
  )
}
