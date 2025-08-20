import '@/styles/reset.css'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import { AuthProvider } from '@/context/AuthContext'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <html lang='es'>
      <body>
        <AuthProvider>
          <Navbar/>
          <main >{children}</main>
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  )
}

export default layout
