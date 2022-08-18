import './Menu.scss'


const Menu = ({open}) => {
  return (
    <div className={`app__menu ${open}`}>
      <ul className="app__menu-links">
        {["kompaniya", "xizmatlar", "portfolio", "vakansiya", "blog"].map(
          (link, i) => (
            <li key={i} className="app__navbar-link">
              <a href="#">{link}</a>
            </li>
          )
        )}
      </ul>

      <div className="app__menu-call">
        <a href="#">
          <span>+998 71</span> 200 70 07
        </a>
      </div>
    </div>
  );
};

export default Menu;
