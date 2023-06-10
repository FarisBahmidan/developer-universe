import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/scss/Home/sectionAll/sectionProp.module.css'


// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
    faSearch,
} from "@fortawesome/free-solid-svg-icons";

import rorororooo from '../../../public/rorororooo.png';


import Member from '../3Member';
import Project from '../4Project';
export default function SectionProp() {
    return (
        <>

            <div className={`${styles.sectionProp}`}>
                <Image className={styles.rorororooo} src={rorororooo} alt="Picture of the author" />
                <div className={styles.contint}>
                    <div className={`${styles.titelMember}`}>
                        <h1>Member</h1>
                        <span>meber of Developer universe</span>
                    </div>


                    <div className={styles.listInput}>

                        <div className={styles.list}>
                            <div className={styles.contintlist}>
                                <div className={styles.list_item}>
                                    <button>Member</button>
                                </div>
                                <div className={styles.list_item}>
                                    <button>Repositories</button>
                                </div>
                            </div>
                        </div>


                        <div className={styles.inputconect}>
                            <div className={styles.content}>
                                <div className={styles.contentSearch}>
                                    <select>
                                        <option value="0">All</option>
                                        <option value="1">Audi</option>
                                        <option value="2">BMf,bfibiobkk ijpujthuiW</option>
                                        <option value="3">Toyota</option>
                                        <option value="4">Volvo</option>
                                    </select>
                                </div>
                                <input className={styles.search} type="text" placeholder="Search" />
                                <div className={styles.contentArrowRight}>
                                    <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} style={{ zIndex: '100', }} />
                                </div>
                            </div>
                        </div>
                    </div>




                    <Member />
                    <Project />
                </div>
            </div>
        </>
    )
}
