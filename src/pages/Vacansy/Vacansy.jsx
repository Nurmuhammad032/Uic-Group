import "./Vacansy.scss";
import { useParams } from "react-router-dom";
import vacansyData from "../../data/data.json";
// import landingParallax from "../../containers/Landing/ParallaxComponent";

const Vacansy = () => {
  const { id } = useParams();

  // document.removeEventListener("scroll", landingParallax);

  const findId = vacansyData.vacansy.data.find((job) => job.id == id);

  return (
    <section className="app__vacansyPage">
      <div className="container">
        <div className="app__vacansyPage-header">
          <h1>{findId.inviteType}</h1>
          <div className="app__vacansy-date">
            <div>
              <span>
                <i className="bi bi-calendar-date"></i>
              </span>
              <p>{findId.date}</p>
            </div>
            <div>
              <span>
                <i className="bi bi-clock"></i>
              </span>
              <p>{findId.hour}</p>
            </div>
          </div>
        </div>

        <div className="app__vacansy-requirements">
          <h1 className="app__vacansy-heading">Talablar</h1>
          <ul>
            {findId.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
        <div className="app__vacansy-tasks">
          <h1 className="app__vacansy-heading">Vazifalar</h1>
          <ul>
            {findId.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
        <div className="app__vacansy-info">
          <h1 className="app__vacansy-heading">Shartlar</h1>
          <p>
            - Doimiy rivojlanish <br />
            - Professional va o'z qadriyatlariga ega jamoa <br />
            - Shaxsiy rivojlanish qo'llab-quvvatlash <br />
            - Yaxshi oylik ish haqi <br />
            - Markazdan office <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vacansy;
