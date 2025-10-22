import Formpage from './pages/Formpage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
    <>
     <Formpage/>
           <ToastContainer position="top-center" autoClose={3000} theme='dark'/>
    </>
  )
}

export default App
