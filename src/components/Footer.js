import React from "react";
import "../styles/footer.scss";
import Link from "./Link";
import FooterHeader from "./FooterHeader";
const year = new Date().getFullYear();
// console.log(year)

const links_value = [
  {
    id: "01",
    link: "#",
    text: "Home",
  },
  {
    id: "02",
    link: "#",
    text: "Portfolio",
  },
  {
    id: "03",
    link: "#",
    text: "Contacts",
  },
];

const contacts_value =[
    {
        id:'01',
        link:'mailto:solomonchamamme@gmail.com?Subject=Message To Developer',
        text:'Send Email'
    },
    {
        id:'02',
        link:'tel:+233267592944',
        text: 'Call Now'
    }
]

function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="footer-info__description">
          <FooterHeader heading="Cha_mamme"></FooterHeader>
          <p>
            In the dynamic landscape of software engineering, excellence is
            often embodied by individuals who master diverse technologies and
            frameworks. Meet our proficient software engineer, a seasoned
            professional adept in crafting robust solutions with a focus on
            React and Python.
          </p>
        </div>
        <div className="footer-info__links">
          <FooterHeader heading="Useful Links"></FooterHeader>
          <ul>
            {links_value.map((value) => {
              return <Link key={value.id} value={value}></Link>;
            })}
          </ul>
        </div>
        <div className="footer-info__contacts">
          <FooterHeader heading="Contacts"></FooterHeader>
          <ul>
          {contacts_value.map((value) => {
              return <Link key={value.id} value={value}></Link>;
            })}
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; {year}. All rights reserved. Powered by Solomon Chamamme
      </div>
    </div>
  );
}

export default Footer;
