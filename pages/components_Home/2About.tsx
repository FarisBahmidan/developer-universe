import Image from 'next/image'
import styles from '../../styles/scss/Home/2AboutUS/about.module.css'


// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
    faArrowsTurnToDots,
    faWifi,
    faBatteryThreeQuarters,
    faSignal,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";




// imgs
import mobayl2 from '../../public/mobayl2.svg';
import Mobail from '../../public/Mobail.svg';
// imgs


export default function About() {
    return (
        <>
            {/* Start Landing */}
            <div className={`${styles.About} bg-black h-[100vh] w-full`}>
                <div className={styles.titel}>
                    <h1>About<span> Developer universe</span></h1>
                </div>
                <div className={styles.contint_about}>
                    <div className={styles.cards}>
                        <div className={styles.bgLol}>
                            <div className={styles.box}>
                                <h1>Welcome</h1>
                                <h4>welcome to our discord server website.</h4>
                                <p>The debit card is designed to spend everywhere and everywhere with simplicity and transparency built in. An RFID transponder embedded in its core enables you to pay with a quick touch-free wave.</p>
                                <div className={styles.logo}>
                                    <Image className={styles.Mobail} src={Mobail} alt="Picture of the author" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.bgLol}>
                            <div className={styles.box}>
                                <h1>Program</h1>
                                <h4>we are professional programmers and</h4>
                                <p>Engineered for clarity and speed to take your everyday spending experience to the next level. Instant transfers, virtual cards and heads up displays helps give you piece of mind about your finances.</p>
                                <div className={styles.logo}>
                                    <Image className={styles.mobayl2} src={mobayl2} alt="Picture of the author" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={styles.container}>

                    <div className={styles.row1}>
                        <div className={styles.card}>
                            <div className={styles.questions}>
                                <h1>Your questions, <span>answered.</span> </h1>
                            </div>

                            <div className={styles.questionsIcon}>
                                <FontAwesomeIcon className={`${styles.faArrowsTurnToDots} ${styles.Iconse}`} icon={faArrowsTurnToDots} style={{ zIndex: '100', }} />
                            </div>

                            <div className={styles.boxback}>

                                <div className={styles.questionsBox}>
                                    <div className={styles.answered}>
                                        <h1>When does minting begin?</h1>
                                        <h1 className={`${styles.Iconse}`}>+</h1>
                                    </div>
                                </div>
                                <div className={styles.questionsBox}>
                                    <div className={styles.answered}>
                                        <h1>What is an NFT?</h1>
                                        <h1 className={`${styles.Iconse}`}>+</h1>
                                    </div>
                                </div>
                                <div className={styles.questionsBox}>
                                    <div className={styles.answered}>
                                        <h1>What makes our NFT special?</h1>
                                        <h1 className={`${styles.Iconse}`}>+</h1>
                                    </div>
                                </div>
                                <div className={styles.questionsBox}>
                                    <div className={styles.answered}>
                                        <h1>Who’s the team behind our NFT?</h1>
                                        <h1 className={`${styles.Iconse}`}>+</h1>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={styles.name}>
                            <div className={styles.nameSearvar}>
                                <h1>Name</h1>
                            </div>
                            <div className={styles.contint}>
                                <div className={styles.devloper}>
                                    <h1>Developer universe</h1>
                                </div>
                                <FontAwesomeIcon className={styles.faArrowsTurnToDots} icon={faArrowsTurnToDots} style={{ zIndex: '100', }} />
                            </div>
                        </div>
                    </div>

                    {/*  */}
                    <div className={styles.row2}>
                        <div className={styles.mobily}>
                            <div className={styles.head}>
                                <div className={styles.deat}>
                                    <h1>9:30</h1>
                                </div>
                                <div className={styles.iconsMobil}>
                                    <FontAwesomeIcon className={styles.mobaylIcons} icon={faSignal} style={{ zIndex: '100', }} />
                                    <FontAwesomeIcon className={styles.mobaylIcons} icon={faWifi} style={{ zIndex: '100' }} />
                                    <FontAwesomeIcon className={styles.mobaylIcons} icon={faBatteryThreeQuarters} style={{ zIndex: '100', }} />
                                </div>
                            </div>

                            <div className={styles.aboutLink}>
                                <div className={styles.titel}>
                                    <h1>About</h1>
                                </div>
                                <div className={styles.bute}>
                                    <button>BENEFITS -{'>'}</button>
                                </div>
                            </div>

                            <div className={styles.contintDitels}>
                                <div className={styles.ditelsBox}>
                                    <h4>welcome to our discord server website.</h4>
                                    <h4>we are professional programmers and we specialize in the web development and mobile apps field.</h4>
                                    <div className={styles.likIcons}>
                                        <FontAwesomeIcon className={`${styles.faArrowsTurnToDots} ${styles.Iconse1}`} icon={faArrowsTurnToDots} style={{ zIndex: '100', }} />
                                    </div>
                                </div>

                                <div className={styles.ditelsBox}>
                                    <h4>we are a platform for educating and teaching people and presenting members projects and their opinions.</h4>
                                    <div className={styles.likIcons}>
                                        <FontAwesomeIcon className={`${styles.faArrowsTurnToDots} ${styles.Iconse}`} icon={faArrowsTurnToDots} style={{ zIndex: '100', }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}

                    <div className={styles.row3}>
                        <div className={styles.cardQA}>
                            <div className={styles.QA}>
                                <h1>Q&A</h1>
                            </div>

                            <div className={styles.questionsIcon}>
                                <FontAwesomeIcon className={`${styles.faArrowsTurnToDots} ${styles.Iconse}`} icon={faArrowsTurnToDots} style={{ zIndex: '100', }} />
                            </div>

                            <div className={styles.boxbackQA}>

                                <div className={styles.questionsBoxQA}>
                                    <div className={styles.answered}>
                                        <h1>what can we do in  websites and mobile</h1>
                                        <FontAwesomeIcon className={`${styles.chevron} `} icon={faChevronRight} style={{ zIndex: '100', }} />
                                    </div>
                                </div>
                                <div className={styles.questionsBoxQA}>
                                    <div className={styles.answered}>
                                        <h1>what courses do we offer?</h1>
                                        <FontAwesomeIcon className={`${styles.chevron} `} icon={faChevronRight} style={{ zIndex: '100', }} />
                                    </div>
                                </div>
                                <div className={styles.questionsBoxQA}>
                                    <div className={styles.answered}>
                                        <h1>graduation projects</h1>
                                        <FontAwesomeIcon className={`${styles.chevron} `} icon={faChevronRight} style={{ zIndex: '100', }} />
                                    </div>
                                </div>
                                <div className={styles.questionsBoxQA}>
                                    <div className={styles.answered}>
                                        <h1>upload your project for people to see</h1>
                                        <FontAwesomeIcon className={`${styles.chevron} `} icon={faChevronRight} style={{ zIndex: '100', }} />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={styles.ticket}>
                            <div className={styles.devloper}>
                                <h1>You need help</h1>
                                <button>open the ticket </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Landing */}
        </>
    )
}
