import { dgsf, Profil } from "../assets";
import { heading, layout } from "../styles";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={`${layout.boxContainer} py-6`}>
      <div className={`${layout.boxCard} flex-col-reverse sm:flex-row sm:h-[350px]`}>
        <img
          src={Profil}
          alt="Two people taking to each other"
          className={`${layout.boxImage} ${layout.boxImageObject}`}
        />
        <div className={`${layout.boxText} overflow-scroll h-[350px]`}>
          <h3 className={`${heading.levelFour} headingLevelFour`}>
            {t("About.title")}
          </h3>
          <h2 className={`${heading.levelOne} headingOne`}>Olga Agovic</h2>
          <h4 className={`${heading.levelOne} headingLevelThree`}>
            {t("About.subtitle")}
          </h4>
          <p className={`${heading.paragraph} headingLevelFive`}>
            {t("About.description")}
          </p>
          <h4 className={`${heading.levelOne} headingLevelThree`}>
            {t("About.DGSF")}
          </h4>
          <a href="https://www.dgsf.org/Members/DGSF--23934">
            <img src={dgsf} alt="DGSF Logo" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
