import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { component, heading, layout } from "../styles";

const lngs = {
  de: { nativeName: "Deutsch" },
  en: { nativeName: "Englisch" },
  ru: { nativeName: "Russisch" },
};

const WelcomePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <main>
      <section className={`${layout.flexCenter} min-h-screen gap-[2rem] px-[1rem]`}>
        <h1 className={`${heading.levelOne} headingLevelOne text-center`}>
          {t("welcomePage.greeting")}
        </h1>
        <h2 className={`${heading.levelTwo} headingLevelTwo text-center`}>
          {t("welcomePage.description")}
        </h2>
        <h3 className={`${heading.levelThree} headingLevelThree text-center`}>
          {t("welcomePage.whichLng")}
        </h3>
        <div className="flex gap-[1rem]">
          {Object.keys(lngs).map((lng) => (
            <button
              className={`${component.button} ${component.buttonHover} border-primary hover:bg-primary headingButton ${
                i18n.resolvedLanguage === lng
                  ? `${component.buttonDisable}`
                  : ``
              }`}
              type="submit"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>

        <svg
          width="32"
          height="42"
          viewBox="0 0 32 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce pt-3 backdrop-filter drop-shadow-xl"
        >
          <g id="arrow" filter="url(#filter0_d_101_3)">
            <path d="M17.5 2C17.5 1.17157 16.8284 0.5 16 0.5C15.1716 0.5 14.5 1.17157 14.5 2H17.5ZM14.9393 33.0607C15.5251 33.6464 16.4749 33.6464 17.0607 33.0607L26.6066 23.5147C27.1924 22.9289 27.1924 21.9792 26.6066 21.3934C26.0208 20.8076 25.0711 20.8076 24.4853 21.3934L16 29.8787L7.51472 21.3934C6.92893 20.8076 5.97918 20.8076 5.3934 21.3934C4.80761 21.9792 4.80761 22.9289 5.3934 23.5147L14.9393 33.0607ZM14.5 2L14.5 32H17.5V2H14.5Z" />
          </g>
          <defs>
            <filter
              id="filter0_d_101_3"
              x="0.95406"
              y="0.5"
              width="30.0919"
              height="41"
              filterUnits="userSpaceOnUse"
            >
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_101_3"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <Link
          className={`${component.button} ${component.buttonHover} border-primary hover:bg-secondary hover:text-light hover:border-secondary paragraph`}
          to="/main"
        >
          {t("welcomePage.nextButton")}
        </Link>
      </section>
    </main>
  );
};

export default WelcomePage;
