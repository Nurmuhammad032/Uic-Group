import "./Navbar.scss";
import { useState, useEffect } from "react";
import BrandSvg from "./BrandSvg";
import Menu from "./Menu/Menu";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [navChange, setNavChange] = useState(false);

  document.addEventListener('scroll', () => {
    if(window.scrollY > 140){
      setNavChange(true)
    } else {
      setNavChange(false)
    }
  })

  useEffect(() =>{
    if(openMenu){
      document.querySelector('body').style.overflow = 'hidden';
    }else {
      document.querySelector('body').style.overflow = 'auto';
    }
  }, [openMenu])

  return (
    <nav className="app__navbar" style={{
      backgroundColor: `${navChange ? 'rgba(30,30,32,.95)' : 'transparent'}`,
    }}>
      <div className="container">
        <div className="app__navbar-wrapper" style={{
          height: `${navChange ? '9rem' : '12rem'}`
        }}>
          <div
            className="app__navbar-hamburger"
            onClick={() => setOpenMenu((prev) => !prev)}
            style={{
              backgroundColor: `${openMenu ? '' : 'hsla(0, 0%, 100%, 0.16)'}`
            }}
          >
            <span className={`hamburger-item ${openMenu ? 'change-hamburger' : ''}`}></span>
            <span className={`hamburger-item ${openMenu ? 'change-hamburger' : ''}`}></span>
            <span className={`hamburger-item ${openMenu ? 'change-hamburger' : ''}`}></span>
          </div>
          <div className="app__navbar-brand">
            <a href="#">
              <BrandSvg />
            </a>
          </div>
          <div
            className="app__navbar-links"
            style={{
              transform: `${hover ? "translateX(-23rem)" : "translateX(0)"}`,
              opacity: `${hover ? "0" : "1"}`,
            }}
          >
            <ul>
              {["kompaniya", "xizmatlar", "portfolio", "vakansiya", "blog"].map(
                (link, i) => (
                  <li key={i} className="app__navbar-link">
                    <a href="#">{link}</a>
                  </li>
                )
              )}
            </ul>
            <div>
              <a href="#" className="app__navbar-call">
                <span>+998 71</span> 200 70 07
              </a>
            </div>
          </div>
          <div>
            <div
              className="app__navbar-languages"
              onMouseOver={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                width: `${hover ? "23rem" : "7rem"}`,
              }}
            >
              <div className="global-link">
                <i className="bi bi-globe"></i>
              </div>
              <div className="hidden-languages">
                {hover && <p className="choose-language">Tilni tanlang: </p>}
                <p>Uz</p>
                <>
                  <p className={hover ? "view-lan" : "hidden-lan"}>ru</p>
                  <p className={hover ? "view-lan" : "hidden-lan"}>en</p>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Menu open={openMenu ? "" : "closeMenu"} />
    </nav>
  );
};

export default Navbar;
