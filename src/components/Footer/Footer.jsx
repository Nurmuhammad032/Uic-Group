import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Link to={"/"} className="footer-brand phone-variant">
          <img
            src="	https://uic.group/img/logo/footer-logo.svg"
            alt="footer-brand-img"
          />
          <div className="brand-text">
            <h1>UIC</h1>
            <span>Group</span>
          </div>
        </Link>
        <ul className="footer-links">
          <li>
            <a href="#">kompaniya</a>
          </li>
          <li>
            <a href="#">xizmatlar</a>
          </li>
          <li>
            <a href="#">portfolio</a>
          </li>
          <li>
            <a href="#">vakansiya</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
        </ul>

        <div className="footer-connect">
          <a
            className="footer-social"
            href="https://www.facebook.com/uicgroup.org"
            target={"_blank"}
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            className="footer-social"
            href="https://twitter.com/UIC_Group"
            target={"_blank"}
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            className="footer-social"
            href="https://www.instagram.com/uic.group"
            target={"_blank"}
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            className="footer-social"
            href="https://t.me/uicgroup"
            target={"_blank"}
          >
            <i className="bi bi-telegram"></i>
          </a>
          <a className="footer-email" href="mailto:info@uic.group">
            <i className="bi bi-at"></i> info@uic.group
          </a>
          <a className="footer-phone" href="tel:+998712007007">
            <i className="bi bi-telephone-fill"></i> +998 71 200 70 07
          </a>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">UIC Group © 2022</span>
          <Link to={"/"} className="footer-brand">
            <img
              src="	https://uic.group/img/logo/footer-logo.svg"
              alt="footer-brand-img"
            />
            <div className="brand-text">
              <h1>UIC</h1>
              <span>Group</span>
            </div>
          </Link>
          <div className="footer-map">
            <a href="https://yandex.com/maps/-/CCU4ELbzSD" target={"_blank"}>
              Toshkent sh, Mirobod t, Aybeka 26
              <span>xaritada</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
