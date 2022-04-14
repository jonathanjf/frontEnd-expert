import type { NextPage } from 'next'
import {Header, Footer}  from '@/components';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Footer />
    </div>
  )
}

export default Home
