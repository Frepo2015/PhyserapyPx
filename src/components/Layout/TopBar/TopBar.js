import React from 'react'
import { Icon } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"
import "./TopBar.scss"



export function TopBar() {

  const navigation = useNavigate();

  const goBack = () => {
    Swal.fire({
      title: 'Quieres regresar al menu de inicio?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quiero regresar!'
    }).then((result) => {
      if (result.isConfirmed) {
        navigation("/")
      }
    })
    
};


  return (
   
    <div className='top-bar'>
      <Icon
        name="power"
        className='top-bar__back'
        link
        onClick={goBack}
      />

     

    </div>
  )
}
