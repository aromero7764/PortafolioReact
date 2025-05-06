import React, { useEffect } from "react";
import "./carrousel.css";
import {
  SiSvelte,
  SiRedux,
  SiBulma,
  SiPostgresql,
  SiMysql,
  SiJavascript,
} from "react-icons/si";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaCss3Alt,
  FaFigma,
} from "react-icons/fa";

const Carrousel: React.FC = () => {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const marqueeContent = document.querySelector("ul.marquee-content");

    if (!marqueeContent) return;

    root.style.setProperty(
      "--marquee-elements",
      marqueeContent.children.length.toString()
    );

    for (let i = 0; i < parseInt(marqueeElementsDisplayed); i++) {
      const child = marqueeContent.children[i];
      if (child) {
        marqueeContent.appendChild(child.cloneNode(true));
      }
    }
  }, []);

  return (
    <div className="carrousel">
      <div className="containercorousel rgb">
        <div className="marquee">
          <ul className="marquee-content">
            <li>
              <AiFillGithub />
            </li>
            <li>
              <AiFillHtml5 />
            </li>
            <li>
              <FaCss3Alt />
            </li>
            <li>
              <SiJavascript />
            </li>
            <li>
              <FaReact />
            </li>
            <li>
              <SiRedux />
            </li>
            <li>
              <SiSvelte />
            </li>
            <li>
              <FaPhp />
            </li>
            <li>
              <FaNodeJs />
            </li>
            <li>
              <SiBulma />
            </li>
            <li>
              <FaBootstrap />
            </li>
            <li>
              <SiPostgresql />
            </li>
            <li>
              <SiMysql />
            </li>
            <li>
              <FaFigma />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
