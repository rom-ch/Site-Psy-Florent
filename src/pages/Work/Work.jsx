import { Helmet } from "react-helmet";
import styles from "./Work.module.css";
import enfantImg from "../../assets/enfant-img.webp";
import adoImg from "../../assets/ado-img.webp";
import adulteImg from "../../assets/adulte-img.webp";

function Work() {
  return (
    <>
      <div>
        <Helmet>
          <title>Ma pratique | Florent Chauvin</title>
          <meta
            name="description"
            content="Informations sur le public que je reçois et ma manière de travailler."
          />
          <link rel="canonical" href="https://psychologue-florentchauvin.com/ma-pratique" />
          <meta property="og:title" content="Ma pratique | Florent Chauvin" />
          <meta
            property="og:description"
            content="Informations sur le public que je reçois et ma manière de travailler."
          />
          <meta property="og:url" content="https://psychologue-florentchauvin.com/ma-pratique" />
          <meta property="og:site_name" content="Florent Chauvin" />
          <meta property="og:type" content="website" />
        </Helmet>
      </div>
      <section className="section">
        <h1 className="title">Ma pratique</h1>
        <main className="main">
          <p className={styles.subtitle}>
            Vous trouverez dans cette section les différents motifs de
            consultation possibles. J&apos;explique également, succinctement, ma
            manière de travailler en fonction du public que je reçois.
          </p>
          <div className={styles.wrapper}>
            <div className={styles.age}>
              <div className={styles["age-img"]}>
                <img src={enfantImg} alt="Un enfant" />
              </div>
              <div className={styles["age-content"]}>
                <h3>Enfants</h3>
                <p>
                  Que l&apos;enfant ait des difficultés dans
                  l&apos;alimentation, la propreté, les apprentissages ou le
                  sommeil, ces soucis disent quelque chose qu&apos;il ne peut
                  pas forcément exprimer. Ce sont les parents, l&apos;école (ou
                  autre lieu de vie) qui, en général, font remonter le problème.
                  Je reçois toujours l&apos;enfant avec les parents durant le
                  premier entretien car ils seront acteurs également dans le
                  processus de compréhension de ce qui ne va pas. Par la suite,
                  nous échangeons régulièrement ensemble et parfois sans
                  l&apos;enfant en fonction de ce que j&apos;observe de
                  l&apos;enfant et de sa problématique. Lors des séances avec
                  les enfants, j&apos;utilise les jeux, le dessin et la parole
                  pour qu&apos;ils arrivent à exprimer ce qu&apos;ils
                  ressentent. Je reçois également des enfants avec les parents
                  (ou l&apos;un des deux) lorsqu&apos;il faut travailler sur la
                  dynamique familiale ou conseiller sur des notions éducatives.
                </p>
              </div>
            </div>
            <div className={styles.age}>
              <div className={styles["age-img"]}>
                <img src={adoImg} alt="Un adolescent" />
              </div>
              <div className={styles["age-content"]}>
                <h3>Adolescents</h3>
                <p>
                  La période de l&apos;adolescence peut s&apos;avérer compliquée
                  pour de nombreux jeunes. Cette période d&apos;évolution vers
                  l&apos;âge adulte peut être le lieu de démotivation scolaire,
                  de dépression, de consommation de substances, et de
                  désocialisation. Le remaniement qui s&apos;opère au niveau des
                  modèles parentaux peut également amener des problèmes dans les
                  relations familiales, avec les parents ou la fratrie.
                  J&apos;apprécie les séances avec les adolescents car, lorsque
                  la relation arrive à se créer, le travail qu&apos;ils
                  souhaitent faire sur eux-mêmes devient très intéressant. Dans
                  la majorité des cas, les parents se sentent démunis face à
                  leur enfant. La possibilité de les intégrer dans le processus
                  thérapeutique dépendra de la volonté de l&apos;adolescent et
                  de la problématique observée.
                </p>
              </div>
            </div>
            <div className={styles.age}>
              <div className={styles["age-img"]}>
                <img src={adulteImg} alt="Un adulte" />
              </div>
              <div className={styles["age-content"]}>
                <h3>Adultes</h3>
                <p>
                  Les adultes qui viennent en consultation ressentent souvent
                  une vulnérabilité à un certain moment de leur vie. Cette
                  fragilité peut avoir une cause interne pouvant survenir après
                  un évènement difficile, une période de remise en question ou
                  une cause externe comme les relations aux autres. La thérapie,
                  principalement basée sur la parole, consiste en une
                  introspection à la recherche de son moi profond. Le
                  psychologue permet au patient de prendre du recul et
                  d&apos;envisager les choses différemment, en liant
                  l&apos;expérience difficile au parcours de vie de la personne.
                  Pour certains, cette connexion peut se faire rapidement mais
                  le travail se déroule en général sur plusieurs mois.
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Work;
