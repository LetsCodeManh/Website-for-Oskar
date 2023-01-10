import { useState } from "react";
import { component, layout } from "../../styles";
import { useTranslation } from "react-i18next";

import Company from "./Company";
import Private from "./Private";

const Offer = () => {
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();

  return (
    <section id="offer" className={`${layout.boxContainer}`}>
      <div className="flex gap-4 justify-center mb-6 mx-6 sm:mx-auto">
        <button
          className={`${component.button} ${
            component.buttonHover
          } border-primary ${
            !isActive === true ? `${component.buttonDisable}` : ``
          } w-1/2`}
          type="submit"
          onClick={() => setIsActive(!isActive)}
          disabled={!isActive === true}
        >
          {t("Offer.Einzelpersonen")}
        </button>
        <button
          className={`${component.button} ${
            component.buttonHover
          } border-primary ${
            !isActive === false ? `${component.buttonDisable}` : ``
          } w-1/2`}
          type="submit"
          onClick={() => setIsActive(!isActive)}
          disabled={!isActive === false}
        >
          {t("Offer.Unternehmen")}
        </button>
      </div>

      {!isActive ? <Private /> : <Company />}
    </section>
  );
};

export default Offer;
