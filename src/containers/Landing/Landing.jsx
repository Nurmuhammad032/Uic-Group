import "./Landing.scss";
import { useEffect, useState } from "react";
import { images } from "../../constants";
import { landingParallax } from "./ParallaxComponent";
import { motion } from "framer-motion";
import { SubmitBtn } from "../../components";

const Landing = () => {
  document.addEventListener("scroll", landingParallax);
  const [showModal, setShowModal] = useState(false);

  useEffect(() =>{
    if(showModal){
      document.querySelector('body').style.overflow = 'hidden';
    }else {
      document.querySelector('body').style.overflow = 'auto';
    }
  }, [showModal])

  return (
    <div className="app__landing">
      <div className="landing-bg main-bg">
        <img src={images.mainBg} alt="landing bg-img" />
      </div>
      <div className="container">
        <div className="landing-bg brand-bg">
          <img
            className="brand-img"
            src={images.brandBg}
            alt="landing bg-img"
          />
        </div>
      </div>
      <div className="landing-bg-wrapper">

      <div className="landing-bg mountain-bg">
        <img
          className="mountain-img"
          src={images.mountainBg}
          alt="landing bg-img"
        />
      </div>
      </div>

      <div className="app__landing-wrapper">
        <div className="container">
          <div className="landing-wrapper">
            <div className="app__landing-info">
              <div className="app__landing-desc">
                <h1>
                  Raqamli yechimlarni <br />
                  taklif qilamiz
                </h1>
                <p>Har qanday murakkablidagi</p>
              </div>
            

<SubmitBtn link={'/'} />


            </div>
          </div>
        </div>
      </div>

      <div className="play-video video-parralax" onClick={() => setShowModal(true)}>
       <span>
       </span>
        <i className="bi bi-play-fill"></i>
      </div>
     {showModal && (
       <>
       < motion.div whileInView={{opacity: [0,1]}} className="modal-bg" onClick={() => setShowModal(false)}></motion.div>
       <motion.div whileInView={{opacity: [0,1], transition: {delay: 0.5}}} className="app__landing-video">
         <span onClick={() => setShowModal(false)}><i className="bi bi-x-lg"></i></span>
         <div className="landing-video">
           <iframe src="https://www.youtube.com/embed/1vx_W6o_t68" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
         </div>
       </motion.div>
       </>
     )}
    </div>
  );
};

export default Landing;
