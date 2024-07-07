import React from 'react'
import { Outlet } from 'react-router-dom'

const SimpleLayout : React.FC = () => {
  return (
    <main>
        <Outlet />
    </main>
  )
}

export default SimpleLayout