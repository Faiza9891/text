
import  Form  from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import { useState } from 'react';


function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{

    setAlert({
      msg: message,
  type: type
  })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  
  return (
 
    <div className="App">

    <Navbar title="Explore" about="AboutUs"/>

    <Alert alert={alert}/>
    
    <Form showAlert={showAlert} heading="Enter Your Text Here"/>
   
   
  
    
    </div>
 
  );
}

export default App;
