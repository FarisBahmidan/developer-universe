import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/scss/Home/1Landing/1Landing.module.css'


// imgs
import Program from '../../public/Program.png'
import laigt from '../../public/laigt.svg'
import Liner from '../../public/Liner.svg'
import bg from '../../public/bg.svg'
import Logo from '../../public/LogoSearvar.svg'
// imgs


export default function Landing() {

    return (
        <>
            {/* Start Landing */}
            <div className={`${styles.Landing}`}>
                <Image className={styles.back} src={Program} alt="Program" />
                {/* <Image className={styles.linier} src={Liner} alt="Program" /> */}
                {/* <Image className='absolute -top-20 opacity-10 blur-sm -z-20' src={laigt} alt="Program" /> */}

                <div className={`${styles.container}`}>
                    <div className={`${styles.welcom}`}>
                        <div className={styles.about}>
                            <h1 className={`${styles.titel} font-bold`}>Welcome to <span className={styles.DeveloperLin}>developer universe</span></h1>
                            <div className={styles.totel}>
                                <span className={`${styles.text} ${styles.first_text}`}>the <span className={styles.colo}>developer universe</span> is a simple  discord server </span>
                                <div className='flex gap-3'>
                                    <span className={`${styles.text} ${styles.spatiol} flex`}>specialized in</span> <span className={`${styles.text} ${styles.sec_text} text-white`}>  front end</span>
                                </div>
                                <h1 className={styles.ditels}>and we will be  more then happy to help you in these majors</h1>
                            </div>
                        </div>
                        <div className={`${styles.cliks} flex gap-7`}>
                            <button className={styles.join}>JOIN</button>
                            <h1>sdsf</h1>
                            <button className={styles.chat}>join the chat</button>
                        </div>
                    </div>
                    <div className={styles.logo}>
                        <Image className={styles.servar} src={Logo} alt="Program" />
                    </div>
                </div>
            </div>
            {/* End Landing */}
        </>
    )
}
