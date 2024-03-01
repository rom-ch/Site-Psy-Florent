import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./Presentation.module.css";
import profileImg from "../../assets/profile-img.webp";

function Presentation() {
  return (
    <>
      <div>
        <Helmet>
          <title>Qui suis-je ? | Florent Chauvin</title>
          <meta
            name="description"
            content="Présentation de mon parcours en tant que psychologue."
          />
          <link rel="canonical" href="https://psychologue-florentchauvin.com/qui-suis-je" />
          <meta property="og:title" content="Qui suis-je ? | Florent Chauvin" />
          <meta
            property="og:description"
            content="Présentation de mon parcours en tant que psychologue."
          />
          <meta property="og:url" content="https://psychologue-florentchauvin.com/qui-suis-je" />
          <meta property="og:site_name" content="Florent Chauvin" />
          <meta property="og:type" content="website" />
        </Helmet>
      </div>
      <section className="section">
        <h1 className="title">Qui suis-je ?</h1>
        <main className="main">
          <div className={styles["first-paragraph"]}>
            <div className={styles["first-paragraph-img"]}>
              <img src={profileImg} alt="Photo de profil" />
            </div>
            <div className={styles["first-paragraph-content"]}>
              <p>
                Je suis psychologue clinicien et psychothérapeute spécialisé en
                psychopathologie. J&apos;ai obtenu mon diplôme en 2014 à
                l&apos;école des Psychologues Praticiens de Paris. Ce métier est
                pour moi une vocation, plaçant l&apos;écoute et la relation avec
                les patients au centre de ma pratique pour réussir à les guider
                du mieux que je peux. Je pratique actuellement le mercredi et le
                vendredi dans un cabinet libéral situé à Cergy Préfecture. Par
                ailleurs, je travaille, à Argenteuil, dans un SESSAD accueillant
                des enfants déficients intellectuels et autistes, que
                j&apos;accompagne dans leur vie, notamment avec leur famille et
                à l&apos;école.
              </p>
            </div>
          </div>
          <div className={styles.paragraph}>
            <p>
              J&apos;utilise une approche{" "}
              <a
                href="https://eco-psychologie.com/genese-ecopsychologie/la-psychologie-humaniste/"
                target="_blank"
              >
                humaniste
              </a>
              ,{" "}
              <a
                href="https://sites.google.com/view/association-afpe/actions-de-formation"
                target="_blank"
              >
                existentielle
              </a>{" "}
              (Carl Rogers, Irvin Yalom) qui se base sur le développement de la
              personne ainsi que sur les interactions dans le milieu familial et
              social. L&apos;évolution de la vie se faisant par les expériences,
              j&apos;essaye de faire prendre conscience, dans l&apos;ici et le
              maintenant, des répercussions que certaines expériences peuvent
              avoir sur nous. Cette dynamique se base sur une vision positive de
              l&apos;humain, un objectif de développement et
              d&apos;épanouissement personnels pour celles et ceux qui peuvent
              sentir des blocages dans leur vie. Par le dialogue, je souhaite
              découvrir l&apos;univers de la personne que je rencontre et, dans
              la mesure du possible, comprendre sa problématique, lui permettre
              de prendre du recul sur ce qu&apos;elle vit et lui donner des
              pistes pour continuer dans la découverte d&apos;elle-même.
              Utilisant également une{" "}
              <a
                href="https://psychotherapie.pagesjaunes.fr/astuce/voir/599141/psychologie-integrative"
                target="_blank"
              >
                approche intégrative
              </a>
              , c&apos;est-à-dire ne basant pas ma pratique uniquement sur un
              seul courant de pensée, je peux utiliser des éléments de la{" "}
              <a
                href="https://www.psychanalyse.be/ressource/quest-ce-que-la-psychanalyse/"
                target="_blank"
              >
                théorie psychanalytique
              </a>{" "}
              ainsi que des{" "}
              <a
                href="https://www.aftcc.org/les-therapies-comportementales-et-cognitives"
                target="_blank"
              >
                Thérapies Comportementales et Cognitives
              </a>{" "}
              (TCC). Cela dépend des sensibilités de la personne et de ce que je
              perçois d&apos;elle pendant la thérapie. L&apos;objectif étant de
              pouvoir la comprendre le plus globalement possible. Les différents
              courants de la psychologie étant nombreux, je peux également vous
              recevoir si vous ne savez pas vers quel type de psychologue vous
              orienter. Nous travaillerons ensemble sur la raison de votre venue
              et je pourrai vous conseiller sur le type de thérapie qui vous
              conviendrait le mieux.
            </p>
            <p>
              Pour les enfants et jeunes adolescents, j&apos;utilise des
              médiations tels que les jeux, les dessins, la pâte à modeler afin
              de les aider à exprimer des pensées ou des émotions. Je réalise
              également des bilans psychologiques pour afin de les aider à mieux
              se comprendre ou objectiver une difficulté dans le fonctionnement
              intellectuel ou affectif. Vous trouverez plus d&apos;information
              sur la page <Link to={"/ma-pratique"}>Ma pratique</Link> si vous
              souhaitez connaître l&apos;intérêt des bilans psychologiques.
            </p>
            <p>
              Les séances durent en général 45 minutes. Il n&apos;y pas de
              fréquence prédéterminée : cela se décidera entre vous et moi en
              fonction des besoins recensés et de votre budget. Il en va de même
              concernant la durée d&apos;une thérapie : le nombre de séances
              n&apos;est jamais fixe pour traiter un problème mais nous le
              ressentirons ensemble lorsque le moment sera venu d&apos;arrêter.
            </p>
          </div>
        </main>
      </section>
    </>
  );
}

export default Presentation;
