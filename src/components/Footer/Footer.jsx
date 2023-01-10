import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { layout } from "../../styles";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={`${layout.flexCenter} paragraph bg-primary py-5 gap-3 sm:flex-row sm:justify-between sm:px-5`}>
      <p>2022 &copy; Olga Agovic</p>
      <ul className={`flex gap-3`}>
        <li>
          <Link to="/others">{t("footer.terms")}</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/others">{t("footer.impressum")}</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/others">{t("footer.privacy")}</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
