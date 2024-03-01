import { Helmet } from "react-helmet";
import styles from "./Office.module.css";
import cabImg from "../../assets/cabinet-img.webp";

function Office() {
  return (
    <>
      <div>
        <Helmet>
          <title>Le cabinet | Florent Chauvin</title>
          <meta
            name="description"
            content="Adresse du cabinet et présentation de l'équipe pluridisciplinaire."
          />
          <link rel="canonical" href="https://psychologue-florentchauvin.com/le-cabinet" />
          <meta property="og:title" content="Le cabinet | Florent Chauvin" />
          <meta
            property="og:description"
            content="Adresse du cabinet et présentation de l'équipe pluridisciplinaire."
          />
          <meta property="og:url" content="https://psychologue-florentchauvin.com/le-cabinet" />
          <meta property="og:site_name" content="Florent Chauvin" />
          <meta property="og:type" content="website" />
        </Helmet>
      </div>
      <section className="section">
        <h1 className="title">Le cabinet</h1>
        <main className="main">
          <div className={styles.cab}>
            <div className={styles["cab-content"]}>
              <p>
                Je vous accueille le mercredi et le vendredi dans un cabinet
                pluridisciplinaire situé{" "}
                <strong>sur le parvis de la Préfecture</strong> à Cergy. Nous
                sommes situés
                <strong>
                  {" "}
                  dans l&apos;immeuble Les Naïades, au 1er étage{" "}
                </strong>
                (proche de l&apos;escalier menant à la piscine et juste à gauche
                de la GMF). L&apos;équipe est composée de deux ostéopathes, un
                médecin gastro-entérologue spécialisé en addictologie, une
                sophrologue et un psychologue.
              </p>
              <span>
                <strong>Adresse : </strong>Immeuble les Naïades, parvis de la
                Préfecture, 95000 Cergy
              </span>
            </div>
            <div className={styles["cab-img"]}>
              <img src={cabImg} alt="Photo du cabinet" />
            </div>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.6642581183933!2d2.074435876764098!3d49.035992288191466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6f57342951fa7%3A0xfe5297942ae814c1!2sFlorent%20Chauvin%20-%20Psychologue!5e0!3m2!1sen!2sfr!4v1708628274277!5m2!1sen!2sfr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </main>
      </section>
    </>
  );
}

export default Office;
