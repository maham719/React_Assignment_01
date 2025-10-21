import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Loginpage from '../components/Loginpage'
import Signuppage from '../components/Signuppage'

const Formcontainer = () => {
    const [page, setPage] = useState("login")
  return (
    <div className='col-8 bg-white m-auto mt-5 mb-5 h-100'>
          <div className='btn-container container'>
                <div className="row p-5 g-5 mb-2  ">
                    <Button     variant={page === "signup" ? "dark" : "outline-dark"} className=' col-md-6 rounded-end-0' onClick={() => setPage("signup")}>Signup</Button>
              <Button  variant={page === "login" ? "dark" : "outline-dark"}   className=' col-md-6 rounded-start-0' onClick={() => setPage("login")}>Login</Button>
</div>
        <div className="row pb-4">
            <div className="col-md text-center">
                                 {page === "login" ? (
          <div className='col-md'>
            <h1  className='mb-5'>Login</h1>
            <Loginpage />
          </div>
        ) : (
          <div className='col-md '>
                 <h1 className='mb-2'>Signup</h1>
            <Signuppage />
          </div>
        )}
            </div>
        </div>
                
          </div>
          </div>
  )
}

export default Formcontainer
