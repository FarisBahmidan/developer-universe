import Image from 'next/image'
import styles from '@/styles/Layout//Header/header.module.css'

// imges
import Hunter from '../public/image.png'
// imges


export default function Headers() {
  return (
    <>

      <header className={styles.headres}>
        <div className={styles.container}>
          <Image className={styles.Hunter} alt="Picture of the author" src={Hunter} />
          <nav>
            <ul>
              <li><a className={styles.active} href='#Home'>Home </a></li>
              <li><a href='#About'>About us</a></li>
              <li><a href='#Member'>Member</a></li>
              <li><a href='#Project'>Project</a></li>
              <li><a href='#Contact'>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
