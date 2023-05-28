import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Layout//Footer/footer.module.css";

const inter = Inter({ subsets: ["latin"] });

import Discorde from "../public/Discorde.svg";
import Hunter from "../public/image.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import { faPlay, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <div className={styles.join}>
        <div className={styles.container}>
          <div className={styles.colDisco}>
            <Image
              className={styles.Discorde}
              src={Discorde}
              alt="Picture of the author"
            />
          </div>
          <h1>
            join to <span>Discord</span>
          </h1>
          <button>Join</button>
        </div>
      </div>

      <footer className={styles.Footer}>
        <div className={styles.container}>
          <div className={styles.communication}>
            <form action="">
              <p>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </p>
              <p>
                <textarea
                  name="message"
                  placeholder="message"
                  required
                ></textarea>
              </p>
            </form>
            <div className={styles.sumet}>
              <FontAwesomeIcon
                className={styles.faEnvelopeOpenText}
                icon={faEnvelopeOpenText}
                style={{ zIndex: "100" }}
              />
              <button>
                SIGN ME UP!{" "}
                <FontAwesomeIcon
                  className={styles.faPlay}
                  icon={faPlay}
                  style={{ zIndex: "100" }}
                />{" "}
              </button>
            </div>
          </div>
        </div>

        <div className={styles.containerF}>
          <div className={styles.footContinuer}>
            <div className={styles.link}>
              <h1>Link</h1>
              <ul>
                <li>
                  <a href="#">Home </a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Packages</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className={styles.Others}>
              <h1>Others</h1>
              <ul>
                <li>
                  <a href="#">Home </a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Packages</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className={styles.Social}>
              <h1>Social</h1>
              <p>Follow us on Social Media</p>
              <div className={styles.socialFollow}>
                <div className={styles.teams}>
                  <Image
                    className={styles.Hunter}
                    src={Hunter}
                    alt="Picture of the author"
                  />
                  <h5>Hunter</h5>
                </div>
                <div className={styles.teams}>
                  <Image
                    className={styles.Hunter}
                    src={Hunter}
                    alt="Picture of the author"
                  />
                  <h5>Hunter</h5>
                </div>
                <div className={styles.teams}>
                  <Image
                    className={styles.Hunter}
                    src={Hunter}
                    alt="Picture of the author"
                  />
                  <h5>Hunter</h5>
                </div>
                <div className={styles.teams}>
                  <Image
                    className={styles.Hunter}
                    src={Hunter}
                    alt="Picture of the author"
                  />
                  <h5>Hunter</h5>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.CopyRight}>
            <h1>Developer universe</h1>
            <span>CopyRight © Devloper portal</span>
            <span>Engilsh</span>
          </div>
        </div>
      </footer>
    </>
  );
}
