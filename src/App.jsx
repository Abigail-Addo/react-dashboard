// import { useState } from 'react'
import Routes from './routes'
import './assets/css/App.css'

import { AuthProvider } from './Context/AuthContext';


function App() {

  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  )
}

export default App
