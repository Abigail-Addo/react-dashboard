// import { useState } from 'react'
import Routes from './routes'
import './assets/css/App.css'

import { AuthProvider } from './ContextAPI/AuthContext';


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
