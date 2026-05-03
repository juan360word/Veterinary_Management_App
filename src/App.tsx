
// Imports
import {ToastContainer,Bounce} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import { Titulo } from './Components/Titulo'

function App() {


  return (
    <>
      <Titulo/>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
      /> 
    </>
    
  )
}

export default App
