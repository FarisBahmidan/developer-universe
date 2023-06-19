import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/scss/Home/4Project/Project.module.css'


// imgs
import Member3D from '../../public/Screenshot 2023-05-25 at 16-35-34 Developer portal.png'
import Hunter from '../../public/image.png'
import sendUser from '../../public/Darwin_Lisa 2.png'
// imgs

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
    faArrowDown,
    faThumbsUp,
    faThumbsDown,
    faReply,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const projectAll = [
    {
        projectImg: '/public/Member3D.svg',
        nameeuser: 'hunter',
        titelUser: 'Scipt text ans Devloper Portal Discord Figma UX UI',
        by: 'hunter',
    },
    {
        projectImg: '/public/Member3D.svg',
        nameeuser: 'hunter',
        titelUser: 'Scipt text ans Devloper Portal Discord Figma UX UI',
        by: 'hunter',
    },
    {
        projectImg: '/public/Member3D.svg',
        nameeuser: 'hunter',
        titelUser: 'Scipt text ans Devloper Portal Discord Figma UX UI',
        by: 'hunter',
    },
    {
        projectImg: '/public/Member3D.svg',
        nameeuser: 'hunter',
        titelUser: 'Scipt text ans Devloper Portal Discord Figma UX UI',
        by: 'hunter',
    },
    {
        projectImg: '/public/Member3D.svg',
        nameeuser: 'hunter',
        titelUser: 'Scipt text ans Devloper Portal Discord Figma UX UI',
        by: 'hunter',
    },
]


export default function Project() {

    SwiperCore.use([Autoplay])

    const [projects, setpoPapproject] = useState(false);
    const toggleproject = () => {
        setpoPapproject(!projects);

    };


    return (
        <>

            {/* Start Landing */}
            <div className={`${styles.Project}`}>

                {projects && (
                    <div className={styles.projects}>
                        <div onClick={toggleproject} className={styles.overlay}></div>
                        <div className={styles.project_content}>

                            <div className={styles.container}>
                                <div className={styles.lokProjects}>
                                    <div className={styles.col}>

                                        <Swiper className={styles.swip}
                                            spaceBetween={50}
                                            loop={true}
                                            autoplay={{ delay: 1000 }}
                                            slidesPerView={3}
                                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                                            navigation
                                            >
                                            <SwiperSlide><Image className={styles.projectUser} src={Member3D} alt="user" /></SwiperSlide>
                                            <SwiperSlide><Image className={styles.projectUser} src={Member3D} alt="user" /></SwiperSlide>
                                            <SwiperSlide><Image className={styles.projectUser} src={Member3D} alt="user" /></SwiperSlide>
                                            <SwiperSlide><Image className={styles.projectUser} src={Member3D} alt="user" /></SwiperSlide>
                                        </Swiper>


                                        <div className={styles.details}>
                                            <h1>Hunter</h1>
                                            <p>Scipt text ans Devloper
                                                Portal Discord Figma tijrijbprojgrthjoi pjotrhopijrhop potjthio UX UI</p>
                                            <div className={styles.learning}>
                                                <ul>
                                                    <li>html</li>
                                                    <li>css</li>
                                                    <li>js</li>
                                                    <li>ts</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.click}>
                                        <button className={styles.Download}>Download ZIP</button>
                                    </div>
                                </div>
                                <div className={styles.chat}>

                                    <div className={styles.send}>
                                        <div className={styles.cardsend}>
                                            <div className={styles.title}>
                                                <Image className={styles.sendUser} src={sendUser} alt="user" />
                                                <div className={styles.row}>
                                                    <h1 className={styles.name}>Hunter</h1>
                                                    <h1 className={styles.deat}>05/28/2023 12:09 PM</h1>
                                                </div>
                                            </div>
                                            <p className={styles.sendMasseg}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, facere. Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>

                                    <div className={styles.inputmasge}>
                                        <div className={styles.content}>
                                            <input className={styles.masge} type="text" placeholder="masge" />
                                            <div className={styles.contentArrowRight}>
                                                <FontAwesomeIcon className={styles.masgeIcon} icon={faReply} style={{ zIndex: '100', }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


                <div className={styles.container}>
                    <div className={styles.cards}>

                        {projectAll.map((value, i) => {
                            return (
                                <div key={i} onClick={toggleproject} className={styles.box}>
                                    <Image className={styles.projectimges} src={Member3D} alt="Program" />
                                    <div className={styles.ditelsLista}>
                                        <div className={styles.titel}>
                                            <h1>{value.nameeuser}</h1>
                                            <p>{value.titelUser}</p>
                                        </div>
                                        <div className={styles.contint}>
                                            <div className={styles.likeDisLik}>
                                                <div className={styles.lik}>
                                                    <button> <FontAwesomeIcon className={styles.faThumbsUp} icon={faThumbsUp} /> 10k</button>
                                                </div>
                                                <div className={styles.dis}>
                                                    <button> <FontAwesomeIcon className={styles.faThumbsUp} icon={faThumbsDown} /> 4k</button>
                                                </div>
                                            </div>
                                            <div className={styles.by}>
                                                <h1>by <span> {value.by} </span></h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}


                    </div>
                    <div className={styles.more}>
                        <button>and more <FontAwesomeIcon className={styles.faArrowDown} icon={faArrowDown} /></button>
                    </div>
                </div>
            </div >
            {/* End Landing */}
        </>
    )
}
