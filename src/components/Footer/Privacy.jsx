import { useState } from "react";
import styles from "../../styles";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="shadow-lg">
      <div
        className={styles.accordionButton}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{t("footer.privacy")}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className={styles.accordionTextarea}>
          <div className={styles.flexCol2}>
            <h2 className={styles.accordionHeading}>
              {t("Privacy.paragraph1.title")}
            </h2>
            <p>{t("Privacy.paragraph1.description")}</p>
          </div>
          <div className={styles.flexCol2}>
            <h2 className={styles.accordionHeading}>
              {t("Privacy.paragraph2.title")}
            </h2>
            <p>{t("Privacy.paragraph2.description1")}</p>
            <ul className="list-disc m-4">
              <li>{t("Privacy.paragraph2.liste.items1")}</li>
              <li>{t("Privacy.paragraph2.liste.items2")}</li>
              <li>{t("Privacy.paragraph2.liste.items3")}</li>
              <li>{t("Privacy.paragraph2.liste.items4")}</li>
              <li>{t("Privacy.paragraph2.liste.items5")}</li>
              <li>{t("Privacy.paragraph2.liste.items6")}</li>
              <li>{t("Privacy.paragraph2.liste.items7")}</li>
            </ul>
            <p>{t("Privacy.paragraph2.description2")}</p>
          </div>
          <div className={styles.flexCol2}>
            <h2 className={styles.accordionHeading}>
              {t("Privacy.paragraph3.title")}
            </h2>
            <p>{t("Privacy.paragraph3.description1")}</p>
            <ul className="list-disc m-4">
              <li>
                {t("Privacy.paragraph3.liste.items1")}{" "}
                <a
                  href="http://optout.networkadvertising.org/?c=1#!/"
                  target="_blank"
                >
                  http://optout.networkadvertising.org/?c=1#!/
                </a>
              </li>
              <li>
                {t("Privacy.paragraph3.liste.items2")}{" "}
                <a href="http://optout.aboutads.info/?c=2#!/" target="_blank">
                  http://optout.aboutads.info/?c=2#!/
                </a>
              </li>
              <li>
                {t("Privacy.paragraph3.liste.items3")}{" "}
                <a
                  href="http://optout.networkadvertising.org/?c=1#!/"
                  target="_blank"
                >
                  http://optout.networkadvertising.org/?c=1#!/
                </a>
              </li>
            </ul>
            <p>{t("Privacy.paragraph3.description2")}</p>
          </div>
          <div className={styles.flexCol2}>
            <h2 className={styles.accordionHeading}>
              {t("Privacy.paragraph4.title")}
            </h2>
            <p>{t("Privacy.paragraph4.description")}</p>
          </div>
          <div className={styles.flexCol2}>
            <h2 className={styles.accordionHeading}>
              {t("Privacy.paragraph5.title")}
            </h2>
            <p>{t("Privacy.paragraph5.description")}</p>
          </div>
          <div className={styles.flexCol2}>
            <h2 className={styles.accordionHeading}>
              {t("Privacy.paragraph6.title")}
            </h2>
            <p>{t("Privacy.paragraph6.description1")}</p>
            <p>
              {t("Privacy.paragraph6.description2")}{" "}
              <a href="olgagovic@gmx.de" target="_blank">
                olgagovic@gmx.de
              </a>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Privacy;
