

import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import '../pages/formpage.css'
import Formcontainer from '../components/Formcontainer';
const Formpage = () => {
  let [page,setPage]=useState("login")
 
  return (
  <div className='mainContainer'>
      <div className='container  '>
        <div className='row '>
          <Formcontainer/>
        </div>
      </div>
    </div>
  )
}



export default Formpage
