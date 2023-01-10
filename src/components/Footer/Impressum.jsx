import { useState } from "react";
import styles from "../../styles";
import { useTranslation } from "react-i18next";

const Impressum = () => {
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="shadow-lg">
      <div
        className={styles.accordionButton}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{t("footer.impressum")}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className={styles.accordionTextarea}>
          <div>
            <p>{t("Impressum.paragraph1.description")}</p>
          </div>
          <div className={styles.flexCol2}>
            <h2 className={styles.accordionHeading}>{t("Impressum.paragraph2.title")}</h2>
            <p>Olga Agovic</p>
            <p>Unterm Hagen 11, 37079 Göttingen</p>
            <p>+49 1590 4833705</p>
            <p>olgagovic@gmx.de</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Impressum;
