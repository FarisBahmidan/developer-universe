









import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/scss/Home/3Member/3Member.module.css'


// imgs
import Member3D from '../../public/Member3D.svg'
import Hunter from '../../public/image.png'
// imgs

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";




export default function Member() {

    return (
        <>
            {/* Start Landing */}
            <div className={`${styles.Member}`}>
                <div className={styles.container}>
                    <div className={styles.cards}>
                        <div className={styles.box}>
                            <div className={styles.titelMember}>
                                <div className={styles.logoMember}>
                                    <Image className={styles.Hunter} src={Hunter} alt="Program" />
                                </div>
                                <div className={styles.name}>
                                    <h3 className={styles.Devloper}>Devloper</h3>
                                    <h1>Anas</h1>
                                </div>
                            </div>
                            <p className={styles.titelDevloper}>script text Anas devloper  portal discord figma  ux ui</p>
                        </div>

                    </div>
                    <div className={styles.more}>
                        <button>and more <FontAwesomeIcon className={styles.faArrowDown} icon={faArrowDown} /></button>
                    </div>
                </div>
            </div>
            {/* End Landing */}
        </>
    )
}
