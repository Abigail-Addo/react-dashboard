import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {

  let admin = JSON.parse(localStorage.getItem("admin"));

  if (!admin) {
    return <Navigate to="/admin/login" />
  }

  return (

    <Outlet />

  )
}


export default ProtectedRoute;