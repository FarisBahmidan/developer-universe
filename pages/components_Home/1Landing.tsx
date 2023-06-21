import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/scss/Home/1Landing/1Landing.module.css'


// imgs
import Program from '../../public/Program.png'
import laigt from '../../public/laigt.svg'
import Liner from '../../public/Liner.svg'
import bg from '../../public/bg.svg'
import Logo from '../../public/LogoSearvar.svg'
import { useEffect, useState } from 'react'
import { useSleep } from '@/hocks/useAnimation'
// imgs

class Writer {
    private wordConvirtor = ""
    public isDone = false;
    constructor(public word:string) {

    }
    public async writeWord(){
        for(let i = 0; i < this.word.length; i++){
            await useSleep(500)
            this.wordConvirtor += this.word[i]
        }
        return this.wordConvirtor
    }
    public async removeWord(){
        for(let i = 0; i < this.word.length; i++){
            await useSleep(500)
            this.wordConvirtor = this.word.slice(0, -1);
        }
        if(this.wordConvirtor == ""){
            this.isDone = true
        }
        return this.wordConvirtor
    }
}

export default function Landing() {
    const listWords = [
        "lala",
        "lolo",
        "lele"
    ]
    const [words, setWords]  = useState("")
    var i = 0;
    var j = 0;
    var isDelete = false
    var wordConvirtor = ""
    useEffect(() => {
        setInterval(() => {
            if(i == listWords.length){
                i = 0;
            }
            if(wordConvirtor  == listWords[i]){
                isDelete = true
            }
            if(isDelete){
                wordConvirtor = wordConvirtor.slice(0, -1);
            } else {
                wordConvirtor += listWords[i][j]
            }
            j++
            if(wordConvirtor == ""){
                i++
                j = 0
                isDelete = false
            }
            setWords(wordConvirtor)
            
        }, 100)
    }, [])
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
                                    <span className={`${styles.text} ${styles.spatiol} flex`}>specialized in</span> <span className={`${styles.text} text-white`}>{words}</span>
                                </div>
                                <h1 className={styles.ditels}>and we will be  more then happy to help you in these majors</h1>
                            </div>
                        </div>
                        <div className={`${styles.cliks} flex gap-7`}>
                            <button className={styles.join}>JOIN</button>
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
