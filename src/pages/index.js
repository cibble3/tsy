import Image from 'next/image'
import { Inter } from 'next/font/google'
import DashbpardDarkTheme from './darkTheme'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <DashbpardDarkTheme />
  )
}
