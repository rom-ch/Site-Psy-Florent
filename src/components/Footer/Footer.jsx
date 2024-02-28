import styles from "./Footer.module.css";
import doctolibLogo from "../../assets/doctolib-logo.webp";
import psyNetLogo from "../../assets/psy-logo.svg";
import weppsyLogo from "../../assets/weppsy-logo.png";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { HiExternalLink } from "react-icons/hi";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.name}>
        <h3>Florent Chauvin</h3>
        <span>Psychologue Clinicien</span>
      </div>
      <div className={styles.socials}>
        <a
          href="https://www.doctolib.fr/psychologue/paris/florent-chauvin"
          target="_blank"
        >
          <img src={doctolibLogo} alt="Logo Doctolib" />
        </a>
        <a
          href="https://www.psychologue.net/cabinets/florent-chauvin"
          target="_blank"
        >
          <img src={psyNetLogo} alt="Logo Psychologue.net" />
        </a>
        <a
          href="https://weppsy.com/psychologue/florent-chauvin/2562"
          target="_blank"
        >
          <img src={weppsyLogo} alt="Logo Weppsy" />
        </a>
      </div>
      <div className={styles.contact}>
        <h4>Contacts :</h4>
        <div className={`${styles.wrapper} ${styles.address}`}>
          <p>Immeuble Les Naïades</p>
          <p>Parvis de la préfecture</p>
          <p>95000 Cergy</p>
        </div>
        <div className={`${styles.wrapper} ${styles.phone}`}>
          <span>
            <FaPhone />
          </span>
          <p>07.54.38.88.42</p>
        </div>
        <div className={`${styles.wrapper} ${styles.mail}`}>
          <span>
            <IoMail />
          </span>
          <a href="mailto:psy.florent.chauvin@hotmail.com">
            psy.florent.chauvin@hotmail.com
          </a>
        </div>
        <div className={`${styles.wrapper} ${styles.doctolib}`}>
          <span>
            <HiExternalLink />
          </span>
          <a
            href="https://www.doctolib.fr/psychologue/paris/florent-chauvin"
            target="_blank"
          >
            Doctolib
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
