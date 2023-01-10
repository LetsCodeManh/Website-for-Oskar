import { heading, layout } from "../../styles";
import { Group} from "../../assets";
import { useTranslation } from "react-i18next";

const Company = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={`${layout.boxCard} sm:flex-row sm:h-[275px]`}>
        <img
          src={Group}
          alt="Two people taking to each other"
          className={`${layout.boxImage} ${layout.boxImageObject}`}
        />
        <div
          className={`${layout.boxText} overflow-scroll h-[275px]`}
        >
          <h3 className={`${heading.levelFour} headingLevelFour`}>
            {t("Offer.Angebot")}
          </h3>
          <h2 className={`${heading.levelOne} headingOne`}>
            {t("Offer.UnternehmenAngebot.Unternehmerberatung")}
          </h2>
          <p className={`${heading.paragraph} headingLevelFive`}>
            {t("Offer.UnternehmenAngebot.Description1")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Company;
