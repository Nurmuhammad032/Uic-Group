import "./Portfolio.scss";
import { PortfolioComponent } from "../../components";
import porfolioData from "../../data/data.json";

const data = [];

// this data for landing page, portfolio must be max 10 data
for (let i = 0; i < porfolioData.portfolio.data.length; i++) {
  if (i < 10) {
    data.push(porfolioData.portfolio.data[i]);
  } else {
    break;
  }
}

const Portfolio = () => {
  return (
    <section className="app__portfolio">
      <div className="container">
        <div className="app__portfolio-header">
          <h1>Portfolio</h1>
          <ul>
            <li>
              <a href="#">mobil ilovalar</a>
            </li>
            <li>
              <a href="#">veb-saytlar</a>
            </li>
            <li>
              <a href="#">brending</a>
            </li>
          </ul>
        </div>
        <PortfolioComponent data={data} />
      </div>
    </section>
  );
};

export default Portfolio;
