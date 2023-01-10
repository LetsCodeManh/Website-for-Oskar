import styles from "../../styles";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="shadow-lg">
      <div
        className={styles.accordionButton}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{t("footer.terms")}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className={styles.accordionTextarea}>
          <div className={styles.flexCol2}>
            <h2 className={styles.accordionHeading}>
              &#167;1 {t("AGB.paragraph1.title")}
            </h2>
            <p>{t("AGB.paragraph1.description")}</p>
          </div>
          <div className={styles.flexCol2}>
            <h2 className={styles.accordionHeading}>
              &#167;2 {t("AGB.paragraph2.title")}
            </h2>
            <p>{t("AGB.paragraph2.description")}</p>
          </div>
          <div className={styles.flexCol2}>
            <h2 className={styles.accordionHeading}>
              &#167;3 {t("AGB.paragraph3.title")}
            </h2>
            <p>{t("AGB.paragraph3.description.text1")}</p>
            <p>{t("AGB.paragraph3.description.text2")}</p>
            <p>{t("AGB.paragraph3.description.text3")}</p>
            <p>{t("AGB.paragraph3.description.text4")}</p>
            <p>{t("AGB.paragraph3.description.text5")}</p>
          </div>
          <div className={styles.flexCol2}>
            <h2 className={styles.accordionHeading}>
              &#167;4 {t("AGB.paragraph4.title")}
            </h2>
            <p>{t("AGB.paragraph4.description")}</p>
          </div>
          <div className={styles.flexCol2}>
            <h2 className={styles.accordionHeading}>
              &#167;5 {t("AGB.paragraph5.title")}
            </h2>
            <p>{t("AGB.paragraph5.description.text1")}</p>
            <p>{t("AGB.paragraph5.description.text2")}</p>
          </div>
          <div className={styles.flexCol2}>
            <h2 className={styles.accordionHeading}>
              &#167;6 {t("AGB.paragraph6.title")}
            </h2>
            <p>{t("AGB.paragraph6.description")}</p>
          </div>
          <div className={styles.flexCol2}>
            <h2 className={styles.accordionHeading}>
              &#167;7 {t("AGB.paragraph7.title")}
            </h2>
            <p>{t("AGB.paragraph7.description")}</p>
          </div>
          <div className={styles.flexCol2}>
            <h2 className={styles.accordionHeading}>
              &#167;8 {t("AGB.paragraph8.title")}
            </h2>
            <p>{t("AGB.paragraph8.description")}</p>
          </div>
          <div className={styles.flexCol2}>
            <h2 className={styles.accordionHeading}>
              &#167;9 {t("AGB.paragraph9.title")}
            </h2>
            <p>{t("AGB.paragraph9.description")}</p>
          </div>
          <div className={styles.flexCol2}>
            <h2 className={styles.accordionHeading}>
              &#167;10 {t("AGB.paragraph10.title")}
            </h2>
            <p>{t("AGB.paragraph10.description")}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Terms;
