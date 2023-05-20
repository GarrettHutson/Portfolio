import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Garrett Hutson',
  description: 'Garrett Hutson is a software engineer and designer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body

        className=" 
         bg-gradient-to-r
        from-red-700
         to-orange-500
         background-animate ">
 <Nav />
        {children}
<Footer />
      </body>
    </html>
  )
}
