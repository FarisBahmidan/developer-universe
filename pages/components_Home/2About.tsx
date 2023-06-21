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
import { CSSProperties, useState } from 'react';
// imgs

const qusList = [
    {
        q:"what can we do in  websites and mobile",
        a:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        q:"what courses do we offer?",
        a:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        q:"graduation projects",
        a:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        q:"upload your project for people to see",
        a:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
]

const qs2List = [
    {
        q:"When does minting begin?",
        a:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        q:"What is an NFT?",
        a:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        q:"What makes our NFT special?",
        a:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        q:"Who’s the team behind our NFT?",
        a:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
]

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
                                {qs2List.map((value, i) => {
                                    return <Qs2 qs={value.q} ans={value.a} key={i}/>
                                })}
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
                                {qusList.map((value, i) => {
                                    return <Qs qs={value.q} ans={value.a} key={i}/>
                                })}
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
interface QsInterFace {qs:string, ans:string}
function Controler(){
    const showStyles = {
        margin: "max(1vw, 1rem) 0",
        padding: "max(1vw, 1rem)",
        height: "fit-content"
    }
    const hideStyles = {
        margin: "0",
        padding: "0 max(1vw, 1rem)",
        height: "0"
    }
    const [arrowStyle, setArrowStyle] = useState<CSSProperties>({rotate:"0deg"})
    const [ansStyles, setAnsStyles] = useState(hideStyles)
    const [plusStyle, setPlusStyle] = useState<CSSProperties>({opacity:"1"})
    const changeStyle = () => {
        console.log(arrowStyle)
        if(ansStyles.height != "0"){
            setPlusStyle({opacity:"1"})
            setArrowStyle({rotate:"0deg"})
            setAnsStyles(hideStyles)
            return
        }
        setArrowStyle({rotate:"90deg"})
        setPlusStyle({opacity:"0"})
        setAnsStyles(showStyles)
    }
    return {
        ansStyles,
        arrowStyle,
        plusStyle,
        changeStyle
    }
}
function Qs({qs, ans}:QsInterFace){
    const {ansStyles , arrowStyle, changeStyle} = Controler()
    return  <>
        <div onClick={changeStyle} className={styles.questionsBoxQA}>
            <div className={styles.answered}>
                <h1>{qs}</h1>
                <FontAwesomeIcon className={`${styles.chevron} `} icon={faChevronRight} style={{ zIndex: '100', transition:"0.3s" , ...arrowStyle}} />
            </div>
            <div style={ansStyles} className={styles.ans}>
                <p>{ans}</p>
            </div>
        </div>
    </>
}

function Qs2({qs, ans}:QsInterFace){
    const {ansStyles ,plusStyle , changeStyle} = Controler()
    return <>
    <div onClick={changeStyle} className={styles.questionsBox}>
        <div className={styles.answered}>
            <h1>{qs}</h1>
            <h1 style={{transition:"0.3s", ...plusStyle}} className={`${styles.Iconse}`}>+</h1>
        </div>
        <div className={styles.ans} style={ansStyles}>
            <p>{ans}</p>
        </div>
    </div>
    </>
}