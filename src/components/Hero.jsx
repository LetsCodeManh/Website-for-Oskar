import HeroSlider, { Overlay, Slide } from "hero-slider";
import Wrapper from "./HeroSlider/Wrapper";
import Title from "./HeroSlider/Title";
import Subtitle from "./HeroSlider/Subtitle";
import { background, choice, stars } from "../assets";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroSlider
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Slide
        label="Quote von Tony Robbins"
        background={{
          backgroundImageSrc: choice,
        }}
      >
        <Overlay>
          <Wrapper>
            <Title>{t("Hero.Speech1")}</Title>
            <Subtitle>
              - Tony Robbins
            </Subtitle>
          </Wrapper>
        </Overlay>
      </Slide>

      <Slide
        label="Quote von Heinz von Förster"
        background={{
          backgroundImageSrc: stars,
        }}
      >
        <Overlay>
          <Wrapper>
            <Title>{t("Hero.Speech2")}</Title>
            <Subtitle>
              - Heinz von Förster
            </Subtitle>
          </Wrapper>
        </Overlay>
      </Slide>

      <Slide
        label="Quote von Dalai Lama"
        background={{
          backgroundImageSrc: background,
        }}
      >
        <Overlay>
          <Wrapper>
            <Title>{t("Hero.Speech3")}</Title>
            <Subtitle>
              - Dalai Lama
            </Subtitle>
          </Wrapper>
        </Overlay>
      </Slide>
    </HeroSlider>
  );
};

export default Hero;
