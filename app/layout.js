import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Garrett Hutson',
  description: 'Garrett Hutson is a software engineer and designer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
      {children}
      </body>
    </html>
  )
}
