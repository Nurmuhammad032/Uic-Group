import "./Contact.scss";
import { InputComponent, InputNumber } from "../../components";

const Contact = () => {
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
        <div className="form-wrapper">
          <form>
            <div className="form-input">
              <InputComponent>
                <label htmlFor="text">FISH</label>
                <input
                  type="text"
                  id="text"
                  placeholder="Ismingizni kiriting"
                />
              </InputComponent>
            </div>
            <div className="form-input">
              <InputComponent>
                <InputNumber />
              </InputComponent>
            </div>
            <div>
              <button type="submit">Muammoni yeching!</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
