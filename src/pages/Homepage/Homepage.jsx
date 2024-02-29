import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./Homepage.module.css";
import weppsyLogo from "../../assets/weppsy-logo.png";
import psyLogo from "../../assets/psy-logo.svg";
import doctolibLogo from "../../assets/doctolib-logo.webp";
import Form from "../../components/Form/Form";

function Homepage() {
  return (
    <>
      <div>
        <Helmet>
          <title>Florent Chauvin : Psychologue clinicien, Cergy</title>
          <meta
            name="description"
            content="Florent Chauvin est un psychologue clinicien et psychothérapeute qui exerce à Cergy(95). Il reçoit des enfants, des adolescents (réalisation de bilans psychologiques) et des adultes."
          />
          <link rel="canonical" href="#" />
          <meta
            property="og:title"
            content="Florent Chauvin : Psychologue clinicien, Cergy"
          />
          <meta
            property="og:description"
            content="Florent Chauvin est un psychologue clinicien et psychothérapeute qui exerce à Cergy(95). Il reçoit des enfants, des adolescents (réalisation de bilans psychologiques) et des adultes. "
          />
          <meta property="og:url" content="#"></meta>
          <meta property="og:site_name" content="Florent Chauvin" />
          <meta property="og:type" content="website" />
        </Helmet>
      </div>
      <section className="section">
        <h1 className="title">Bienvenue</h1>
        <main className="main">
          <p className={styles.introduction}>
            Bienvenue sur mon site internet. Je suis psychologue clinicien et
            psychothérapeute auprès des enfants, des adolescents et des adultes.
            Sur ce site vous trouverez dans les différentes sections les
            informations importantes relatives à la consultation psychologique
            ainsi que l&apos;emplacement du cabinet et la tarifs de
            consultation.
          </p>
          <ul className={styles.nav}>
            <li>
              <Link to={"/qui-suis-je"}>Qui suis-je ?</Link>
            </li>
            <li>
              <Link to={"/le-cabinet"}>Le cabinet</Link>
            </li>
            <li>
              <Link to={"/ma-pratique"}>Ma pratique</Link>
            </li>
            <li>
              <Link to={"/prendre-rendez-vous"}>Prendre rendez-vous</Link>
            </li>
          </ul>
          <div className={styles.website}>
            <p>Vous pouvez également me retrouver sur les sites suivants :</p>
            <ul>
              <li>
                <a
                  href="https://weppsy.com/psychologue/florent-chauvin/2562"
                  target="_blank"
                >
                  <span className={styles["link-img"]}>
                    <img src={weppsyLogo} alt="Logo Weppsy" />
                  </span>
                  <span className={styles["link-name"]}>Weppsy</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.psychologue.net/cabinets/florent-chauvin"
                  target="_blank"
                >
                  <span className={styles["link-img"]}>
                    <img src={psyLogo} alt="Logo Weppsy" />
                  </span>
                  <span className={styles["link-name"]}>Psychologue.net</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.doctolib.fr/psychologue/paris/florent-chauvin"
                  target="_blank"
                >
                  <span className={styles["link-img"]}>
                    <img src={doctolibLogo} alt="Logo Weppsy" />
                  </span>
                  <span className={styles["link-name"]}>Doctolib</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["form-container"]}>
            <Form />
          </div>
        </main>
      </section>
    </>
  );
}

export default Homepage;
