import React,{useState} from 'react'
import AddNewClient from './Components/AddNewClient'
import Header from './Components/Header'
import Main from './Components/Main'
// import './fontawesome.css';


function App() {
  const [showForm , setShowForm] = useState(false);

  return (
    <div>
      <Header />
      { showForm ? <AddNewClient  setShowForm= {setShowForm}/> :<Main setShowForm={setShowForm} /> }

    </div>
  )
}

export default App