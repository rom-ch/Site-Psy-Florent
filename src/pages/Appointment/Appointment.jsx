import { Helmet } from "react-helmet";
import styles from "./Appointment.module.css";

function Appointment() {
  return (
    <>
      <div>
        <Helmet>
          <title>Prendre rendez-vous | Florent Chauvin</title>
          <meta
            name="description"
            content="Les coordonnées afin de pouvoir prendre rendez-vous"
          />
          <link rel="canonical" href="#" />
          <meta
            property="og:title"
            content="Prendre rendez-vous | Florent Chauvin"
          />
          <meta
            property="og:description"
            content="Les coordonnées afin de pouvoir prendre rendez-vous"
          />
          <meta property="og:url" content="#"></meta>
          <meta property="og:site_name" content="Florent Chauvin" />
          <meta property="og:type" content="website" />
        </Helmet>
      </div>
      <section className="section">
        <h1 className="title">Prendre rendez-vous</h1>
        <main className="main">
          <div className={styles[`appointments-links`]}>
            <p>
              Deux possibilités pour <strong>prendre rendez-vous</strong> :
            </p>
            <ul>
              <li>
                Par téléphone : <strong>07.54.38.88.42</strong>
              </li>
              <li>
                Par internet sur{" "}
                <a href="https://www.doctolib.fr/psychologue/paris/florent-chauvin">
                  Doctolib
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.price}>
            <h3>Tarifs</h3>
            <p>60 euros - séance individuelle de 45 minutes</p>
            <p>80 euros - thérapie familiale de 45 minutes</p>
            <p>
              450 euros - bilan psychologique de l&apos;enfant et de
              l&apos;adolescent. Il s&apos;agit d&apos;un prix à titre indicatif
              car pour les bilans concernant, par exemple, les troubles
              spécifiques des apprentissages et du neurodéveloppement, ce prix
              peut évoluer.
            </p>
            <p>
              Une suivi psychologique pouvant se dérouler sur plusieurs mois, le
              prix d&apos;une consultation peut être un objet de discussion afin
              de pouvoir trouver un juste tarif pour permettre à ceux qui le
              souhaitent de bénéficier d&apos;une thérapie.
            </p>
          </div>
        </main>
      </section>
    </>
  );
}

export default Appointment;
