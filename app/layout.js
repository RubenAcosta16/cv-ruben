import './globals.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
// import Navbar from '../components/myNavBar/NavBar'

export const metadata = {
  title: 'Ruben Acosta CV',
  description: 'Cv of Ruben Acosta',
  icons:{
    icon:["/logo.jpg"],
    apple:["/logo.jpg"],
    shortcut:["/logo.jpg"],
  }

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar></Navbar> */}
        <main>
        {children}
        </main>
        </body>
    </html>
  )
}
