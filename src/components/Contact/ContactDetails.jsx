import { heading, layout } from "../../styles";
import { useTranslation } from "react-i18next";

const ContactDetails = () => {
  const { t } = useTranslation();

  return (
    <div className={`${layout.box} py-[2rem]`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.303340387461!2d9.890967415378535!3d51.56267241448203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bb2adf929334c5%3A0xdac3c352ba45ea05!2sUnterm%20Hagen%2011%2C%2037079%20G%C3%B6ttingen!5e0!3m2!1sde!2sde!4v1670688454322!5m2!1sde!2sde"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className={`${layout.boxImage}`}
      ></iframe>
      <div className={`${layout.boxText}`}>
        <h3 className={`${heading.levelFour} headingLevelFour`}>
          {t("Contact.title1")}
        </h3>
        <h2 className={`${heading.levelOne} headingOne`}>
          {t("Contact.title3")}
        </h2>
        <div>
          <h4 className={`${heading.levelTwo} headingLevelFive`}>
            {t("Contact.user")}
          </h4>
          <p className={`${heading.paragraph} headingLevelThree`}>
            Olga Agovic
          </p>
        </div>
        <div>
          <h4 className={`${heading.levelTwo} headingLevelFive`}>
            {t("Contact.address")}
          </h4>
          <p className={`${heading.paragraph} headingLevelThree`}>
            Unterm Hagen 11 , 37079 Göttingen
          </p>
        </div>
        <div>
          <h4 className={`${heading.levelTwo} headingLevelFive`}>
            {t("Contact.phone")}
          </h4>
          <p className={`${heading.paragraph} headingLevelThree`}>
            +49 15904833705
          </p>
        </div>
        <div>
          <h4 className={`${heading.levelTwo} headingLevelFive`}>
            {t("Contact.email")}
          </h4>
          <p className={`${heading.paragraph} headingLevelThree`}>
            olgagovic@gmx.de
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
