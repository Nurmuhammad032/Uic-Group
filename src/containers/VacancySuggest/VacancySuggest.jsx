import "./VacancySuggest.scss";
import vacansyData from "../../data/data.json";

const VacancySuggest = () => {
  return (
    <div className="app__vacansy-suggest">
      <div className="container">
        <div className="app__vacansy-wrapper">
          <div className="app__vacansy-info">
            <h1>{`Shu jamoa orasida siz ham bo'lishingiz mumkin :)`}</h1>
            <p>
              Biz bilan birga yuksalmoqchimisiz? Keling, bizga kerakligingizni
              isbotlang! Jamoaning ajralmas bo'lagiga aylaning.
            </p>
          </div>
          <div className="app__vacansy-links">
            <ul>
              {vacansyData.vacansy.data.map((vacansy, i) => (
                <li key={vacansy.id}>
                  <span></span>
                  <a href={`vacansy${vacansy.id}`}>{vacansy.inviteType}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacancySuggest;
