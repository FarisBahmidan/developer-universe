import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/scss/Home/4Project/Project.module.css'


// imgs
import Member3D from '../../public/Screenshot 2023-05-25 at 16-35-34 Developer portal.png'
import Hunter from '../../public/image.png'
// imgs

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
    faArrowDown,
    faThumbsUp,
    faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";




export default function Project() {

    return (
        <>
            {/* Start Landing */}
            <div className={`${styles.Project}`}>
                <div className={`${styles.titelProject}`}>
                    <h1>Make you’r <span>Project</span></h1>
                </div>

                <div className={styles.container}>

                    <div className={styles.cards}>
                        <div className={styles.box}>
                            <Image className={styles.projectimges} src={Member3D} alt="Program" />
                            <div className={styles.ditelsLista}>
                                <div className={styles.titel}>
                                    <h1>Hunter</h1>
                                    <p>Scipt text ans Devloper Portal Discord Figma UX UI</p>
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
                                        <h1>by <span>Hunter</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <Image className={styles.projectimges} src={Member3D} alt="Program" />
                            <div className={styles.ditelsLista}>
                                <div className={styles.titel}>
                                    <h1>Hunter</h1>
                                    <p>Scipt text ans Devloper Portal Discord Figma UX UI</p>
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
                                        <h1>by <span>Hunter</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <Image className={styles.projectimges} src={Member3D} alt="Program" />
                            <div className={styles.ditelsLista}>
                                <div className={styles.titel}>
                                    <h1>Hunter</h1>
                                    <p>Scipt text ans Devloper Portal Discord Figma UX UI</p>
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
                                        <h1>by <span>Hunter</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <Image className={styles.projectimges} src={Member3D} alt="Program" />
                            <div className={styles.ditelsLista}>
                                <div className={styles.titel}>
                                    <h1>Hunter</h1>
                                    <p>Scipt text ans Devloper Portal Discord Figma UX UI</p>
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
                                        <h1>by <span>Hunter</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <Image className={styles.projectimges} src={Member3D} alt="Program" />
                            <div className={styles.ditelsLista}>
                                <div className={styles.titel}>
                                    <h1>Hunter</h1>
                                    <p>Scipt text ans Devloper Portal Discord Figma UX UI</p>
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
                                        <h1>by <span>Hunter</span></h1>
                                    </div>
                                </div>
                            </div>
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
