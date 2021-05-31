import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'
//my imports
import Layout from '../components/layout'
import Nav from '../components/nav/nav'

export default function Home() {
  const router = useRouter()
  
  return (
    <div>
        <Head>
          <title>Posibil3D</title>
          <meta name="description" content="3D Shop" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
    </div>
  )
}
