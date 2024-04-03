import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes(props) {
    const {Component}  = props;
    const navigate = useNavigate();
    useEffect(()=>{
        const  role = localStorage.getItem('Role')
        const token = localStorage.getItem('token')
        if (token) {
            if (role == 'candidate') {
                navigate('/pageNoteFound')
            }
        }else{
            navigate('/pageNoteFound')
        }
        
    })
  return (
    <>
      <Component />
    </>
  )
}

export default ProtectedRoutes
