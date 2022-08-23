import { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [stopInput, setStopInput] = useState(false);
  const [number, setNumber] = useState(undefined);
  const handleOnChange = (e) => {
    // console.log(e.target.value.length);
    setNumber(e.target.value);
    // if (e.target.value.length === 9) {
    //   setStopInput(true);
    // } else {
    //   setStopInput(false);
    // }
  };

  return (
    <section className="app__contact">
      <div className="container">
        <div className="app__contact-header">
          <p>hey...</p>
          <span>Sizni o'ylantirib qo'ygan muammo bormi?</span>
        </div>
        <div className="app__contact-desc">
          <h1 className="background-desc">
            Muammo <span>Muammo</span>
          </h1>
        </div>

        <form>
          <div className="form-input">
            <label htmlFor="text">FISH</label>
            <input type="text" id="text" placeholder="Ismingizni kiriting" />
          </div>
          <div className="form-input">
            <label htmlFor="text">Telefon raqamingiz</label>
            <div>
              <span>+998</span>
              <input
                onChange={handleOnChange}
                onKeyPress={() => false}
                type="text"
                id="text"
                value={number}
                placeholder="71 200 70 07"
              />
            </div>
          </div>
          <div>
            <button type="submit">Muammoni yeching!</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
