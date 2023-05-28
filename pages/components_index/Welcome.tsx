import Image from 'next/image'
import styles from '../../styles/Layout/Welcome/welcome.module.css'

// imges
import mewl from '../../public/myamges.png'
// imges

import React, { useRef, useState, useEffect } from 'react';
import { useYofiAnimation, sleep } from "../../hocks/useAnimation"


export default function Welcome() {

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

            {/* Start textWelcome */}
            <div style={WelcomeStyle} className={styles.welcome}>
                <div className={styles.overflow}></div>
                <Image className={styles.imgs1} src={mewl} alt="Picture of the author" />
                <div className={styles.textWelcome}>
                    <h1>welcome</h1>
                </div>
            </div>
            {/* End textWelcome */}

        </>
    )
}
