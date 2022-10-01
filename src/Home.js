import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addName } from './redux/userSlice';


export const Home = () => {
  const { userData} =useSelector( state => state)
  const dispatch = useDispatch();

    useEffect(() => {
      console.log(userData)
    
  
    }, [userData])
    
  const validaFormulario = (e)=> {
   e.preventDefault();
   dispatch(addName("antonio"));
  }
  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={ validaFormulario }>

      <input type="text" placeholder="escribe tu nombre"/>
      <input type="text" placeholder="escrbe tu email"/>
      <input type="number" placeholder="edad" max={100} min={0}  />
      <button type='onSubmit'>Valida los datos para el store</button>
      </form>
      </div>
  )
}
