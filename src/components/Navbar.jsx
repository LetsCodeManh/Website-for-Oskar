import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { logo } from "../assets";
import { heading } from "../styles";
import { useState } from "react";

// Progress Bar
function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Scrolling
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.querySelector(".header__hamburger").style.top = "16px";
  } else {
    let clientHeight = document.getElementById("navbar").offsetHeight;
    let hamburgerHeight = document.querySelector(".header__hamburger").offsetHeight;
    // let clientHeight = document.getElementById("navbar").clientHeight;
    document.getElementById("navbar").style.top = "-" + clientHeight + "px";
    document.querySelector(".header__hamburger").style.top = "-" + hamburgerHeight + "px"
  }
  prevScrollpos = currentScrollPos;

  myFunction();
};

const Navbar = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="w-full flex bg-light fixed justify-between items-center px-6 py-3 z-[99] border-b-2 border-dark transition-all h-[80px]"
      id="navbar"
    >
      <div class="progress-container">
        <div class="progress-bar" id="myBar"></div>
      </div>

      <Link to="/">
        <img src={logo} alt="Logo" className="h-[42px] aspect-square" />
      </Link>

      <ul
        className={`hidden sm:flex sm:gap-6 sm:justify-center sm:items-center ${heading.levelThree} paragraph`}
      >
        <li>
          <a href="#about">{t("About.title")}</a>
        </li>
        <li>
          <a href="#offer">{t("Offer.Angebot")}</a>
        </li>
        <li>
          <a href="#contact">{t("Contact.title1")}</a>
        </li>
      </ul>

      

      <ul className={`flex flex-col gap-6 h-screen w-screen fixed z-[100] text-light bg-neutral text-lg header__navigation ${isActive ? "is-active" : ""}`}>
        <li>
          <a href="#about">Über Mich</a>
        </li>
        <li>
          <a href="#offer">Angebote</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>

      <button
        className={`header__hamburger sm:hidden ${isActive ? "is-active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <svg
          fill="none"
          className="hamburger"
          viewBox="-10 -10 120 120"
          width="50"
        >
          <path
            className="line"
            stroke-width="10"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
          ></path>
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
