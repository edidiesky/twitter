import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import HomeIndex from '@/components/home/Home'
export default function Home() {
  return (
    <div className="">
      <HomeIndex />
    </div>
  )
}
