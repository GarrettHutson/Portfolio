import './globals.css'
import { Inter } from 'next/font/google'
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
        bg-black"
        >

        {children}
<Footer />
      </body>
    </html>
  )
}
