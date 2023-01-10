import styles, { heading } from "../../styles";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3 m-6 p-6 gap-3 shadow-md lg:w-[1000px] lg:mx-auto rounded-[1rem]">
      <h3 className={`${heading.levelFour} headingLevelFour`}>{t("Contact.title1")}</h3>
      <h2 className={`${heading.levelOne} headingOne`}>{t("Contact.title2")}</h2>
      <div className="flex justify-between font-poppins headingLevelFive mb-3">
        <p>{t("Contact.paragraph1")}</p>
        <p>
          <span className={styles.formLabelImportant}>*</span>{" "}
          {t("Contact.paragraph2")}
        </p>
      </div>
      <form className="flex flex-col gap-3">
        <div className={styles.formContainer}>
          <input
            type="text"
            id="name"
            placeholder=" "
            className={styles.formInput}
          />
          <label for="name" className={styles.formLabel}>
            {t("Contact.name")}{" "}
            <span className={styles.formLabelImportant}>*</span>
          </label>
        </div>

        <div className={styles.formContainer}>
          <input
            type="text"
            id="email"
            placeholder=" "
            className={styles.formInput}
          />
          <label for="email" className={styles.formLabel}>
            {t("Contact.email")}{" "}
            <span className={styles.formLabelImportant}>*</span>
          </label>
        </div>

        <div className={styles.formContainer}>
          <input
            type="tel"
            id="telefon"
            placeholder=" "
            className={styles.formInput}
          />
          <label for="telefon" className={styles.formLabel}>
            {t("Contact.phone")}{" "}
            <span className={styles.formLabelImportant}>*</span>
          </label>
        </div>

        <div className={styles.formContainer}>
          <textarea
            id="message"
            rows="5"
            placeholder=" "
            className={styles.formInput}
          />
          <label for="message" className={styles.formLabel}>
            {t("Contact.statement")}{" "}
            <span className={styles.formLabelImportant}>*</span>
          </label>
        </div>

        <button type="submit" className={styles.formButton}>
          {t("Contact.sent")}
        </button>
        <p className={`headingLevelFive`}>
          {t("Contact.declaration")}
          <span className={styles.formLabelImportant}>*</span>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
