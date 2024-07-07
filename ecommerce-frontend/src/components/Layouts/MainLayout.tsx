import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default MainLayout