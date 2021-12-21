import React from "react";
import Feature from "../../components/feature/Feature";
import "./footer.css";

const socials = [
  {
    id: 1,
    icons:
      "https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.15752-9/p1080x2048/254567701_1024954964903800_4636520575432416809_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeHqvLsG9-0LpuiXIC8wYADXx11ycjBXS3THXXJyMFdLdNVMMmeaCEWEiPYWvBEY18JQiB3MrEi5N6kYxowDTEOx&_nc_ohc=UAzBFHMkwwgAX-4KC42&_nc_ht=scontent.fmnl8-2.fna&oh=03_AVI2Kfvn6_s27A0Qvq05GjT-TYar4-eRSCDWmtv2uADkDQ&oe=61E823D0",
  },
  {
    id: 2,
    icons:
      "https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.15752-9/p1080x2048/253970947_1012793139577745_5760829681143293908_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeGIwNWMaknweQXaY8EXeJwx1pAoSqjyWdDWkChKqPJZ0AkkLVq_PpZQO1lWwLMDmIwH3DKWWG4HUrfW6M0v7Q3Z&_nc_ohc=g_LQ5Z3FMv8AX-p7GCd&tn=WcPqIVSw7JnyzqgA&_nc_ht=scontent.fmnl8-2.fna&oh=03_AVKCnac2sGhkMgk3fxPCjZdn8UhnkmdJL_MwnyEi4IrYzw&oe=61E5F7F0",
  },
  {
    id: 3,
    icons:
      "https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.15752-9/p1080x2048/265895527_291210522954669_8935201809345740422_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEO9Z1bCbpXtB736Qs_f40DxBGnh7Xsw5vEEaeHtezDm3hy7YgWa3SB-87SWx_iFh8jWqcrebJLDSShv6LYWF-F&_nc_ohc=lE8U5t7vTlUAX-pPKmC&_nc_ht=scontent.fmnl8-2.fna&oh=03_AVK1Vmi-GMjNHpFy0ovrkhCjJaenFlzSajo4uEQbviXTHw&oe=61E66761",
  },
  {
    id: 4,
    icons:
      "https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.15752-9/p1080x2048/263996800_3013784422169768_6945701353778480525_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFBv3DBk-9XoGQV_G9XGXLsXz2bghXHQnNfPZuCFcdCc2ijb6fMr_OODjAH7iz-CIQua_-o2y7F_EjP9GGQ-lzK&_nc_ohc=TS0nYV44wbUAX9Tglfx&_nc_ht=scontent.fmnl8-2.fna&oh=03_AVL4H03WH58h2I0RX8D3Aqgcd-uGCJohFOMd4QBKx8_nkQ&oe=61E6512B",
  },
  {
    id: 5,
    icons:
      "https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.15752-9/p1080x2048/260822138_307421037920154_4506805479174240021_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFV0rrDvgdg4kRsuzzyALLA-BQW9eHDQ3L4FBb14cNDcrQWebGMZ1CPqEgvqCrUSTDXBCfz4yfuG9NVEAJFBRak&_nc_ohc=wWhskof0XxkAX9VJejD&_nc_ht=scontent.fmnl8-2.fna&oh=03_AVK-LQ7JGPA6CdAuFo0ZEJfJky_5zeeApf-ORU5TM9DiQg&oe=61E72EA9",
  },
];
const skills = [
  {
    id: 1,
    skill: "HTML",
  },
  {
    id: 2,
    skill: "CSS",
  },
  {
    id: 3,
    skill: "JavaScript",
  },
  {
    id: 4,
    skill: "React JS",
  },
  {
    id: 5,
    skill: "Mockup Design",
  },
  {
    id: 6,
    skill: "Prototyping",
  },
  {
    id: 7,
    skill: "UI/UX",
  },
];
const strength = [
  {
    id: 1,
    stren: "Creativity",
  },
  {
    id: 2,
    stren: "Communication",
  },
  {
    id: 3,
    stren: "Reliable",
  },
  {
    id: 4,
    stren: "Teamwork",
  },
  {
    id: 5,
    stren: "Problem Solver",
  },
];
{
  /* <div className="line-gradient footer div-top" /> */
}
const Footer = () => {
  return (
    <div className="mon__footer">
      <div className="footer-bar" />
      <div className="mon__footer-containter">
        <div className="mon__footer-container__text">
          <h1 className="gradient__text">
            Lets Build an Interactive Website Together using ReactJS
          </h1>
          <a href="btn">Download CV</a>
        </div>
        <div className="mon__footer-container__content">
          <div className="mon__footer-container__content-box">
            <div className="footer__title-bar" />
            <h1 className="gradient__text text-center">Socials</h1>
            {socials.map((items) => (
              <a href="">
                <img className="icons" src={items.icons} alt="" />
              </a>
            ))}
          </div>
          <div className="mon__footer-container__content-box">
            <div className="footer__title-bar" />
            <h1 className="gradient__text text-center">Skills</h1>
            {skills.map((items) => (
              <p>{items.skill}</p>
            ))}
          </div>
          <div className="mon__footer-container__content-box">
            <div className="footer__title-bar" />
            <h1 className="gradient__text text-center">Strength</h1>
            {strength.map((item) => (
              <p>{item.stren}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bar" />
    </div>
  );
};

export default Footer;
