import Image from 'next/image'
import styles from '../../styles/Layout/Login/login.module.css'



// imges
import backLogin from '../../public/backLogin.jpeg'
import logo from '../../public/LogoSearvar.svg'
// imges

// import the icons you need
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faEyeSlash,
    
} from "@fortawesome/free-solid-svg-icons";
// import the icons you need



import React, { useRef, useState, useEffect } from 'react';
import { useYofiAnimation, sleep } from "../../hocks/useAnimation"



export default function Login() {

    const [LoginStyle, setLoginStyle] = useState({ display: "none" });
    const [WelcomeStyle, setWelcomeStyle] = useState({ display: "block" }); // block

    const goAnimationWelcome = [
        {
            style: {
                filter: "blur(25px)"
            },
            sleep: 1500
        },
        {
            style: {
                display: "none",
            },
        },
    ]

    const comeAnimationWelcome = [
        {
            style: {
                filter: "blur(15px)"
            },
        },
        {
            style: {
                display: "block" // block
            },
            sleep: 500
        },
        {
            style: {
                filter: "unset"
            },
            sleep: 1000
        },
    ]

    const [webSiteDate, setSiteDate] = useState("00:00")
    const [webDay, setWebDay] = useState("00:00")

    useEffect(() => {
        setInterval(() => {
            const dateNow = new Date()
            const houresNow = `${dateNow.getHours()}`.length == 1 ? `0${dateNow.getHours()}` : dateNow.getHours()
            const minNow = `${dateNow.getMinutes()}`.length == 1 ? `0${dateNow.getMinutes()}` : dateNow.getMinutes()
            setSiteDate(`${houresNow}:${minNow}`)
            setWebDay(dateNow.toDateString().split(" ").reverse().join(" "))
        }, 500)


        const hiAnimation = async () => {
            await sleep(5000)
            await useYofiAnimation(WelcomeStyle, setWelcomeStyle, goAnimationWelcome)
            await useYofiAnimation(LoginStyle, setLoginStyle, comeAnimationWelcome)
        }
        hiAnimation()
    }, [])

    return (
        <>
            {/* Start login */}
            <div style={LoginStyle} className={styles.login}>
                <div className={styles.overflow}></div>
                <Image className={styles.imgs1} src={backLogin} alt="Picture of the author" />

                <div className={styles.concurLog}>
                    <div className={styles.container}>
                        <div className={styles.det}>
                            <h1>{webSiteDate}</h1>
                            <h4>{webDay}</h4>
                        </div>

                        <div className={styles.logo}>
                            <Image className={styles.imgs2} src={logo} alt="Picture of the author" />
                            <h2>Developer portal</h2>
                        </div>
                        <div className={styles.inputconect}>
                            <div className={styles.content} >
                                <div className={styles.contentEyeSlash}>
                                    <FontAwesomeIcon className={styles.eyeSlash} icon={faEyeSlash} style={{ zIndex: '100', }} />
                                </div>
                                <input className={styles.passwd} type="password" placeholder="PASSWORD" />
                                <div className={styles.contentArrowRight}>
                                    <FontAwesomeIcon className={styles.arrowRight} icon={faArrowRight} style={{ zIndex: '100', }} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Start login */}
        </>
    )
}
