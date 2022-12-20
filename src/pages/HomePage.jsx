import React from "react";
import Olymp from "../images/olymp1.png";
import Football from "../images/ploshadks.png";
import Class from "../images/doska.png";
import Canteen from "../images/canteen.png";
import Footer from "../components/Footer";
import "../styles/buttonsHome.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="d-flex">
        <div className="d-grid">
          <article className="ms-4 d-flex flex-column justify-content-center gap-2">
            <h1>
              BOOKING SITE <br />
            </h1>
            <h3> of Ala-Too University</h3>
            <p className="col-9 homepage__book">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolorem, quaerat iure ratione maxime iusto amet provident quod
              totam. Quos eius quibusdam eos minus esse, quam at enim qui quod
              velit.
            </p>

            <a
              style={{ width: "fit-content" }}
              onClick={() => navigate("/places")}
              className="animated-button1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Book
            </a>
          </article>
        </div>
        <img
          src="https://user-images.githubusercontent.com/10260230/93533501-53aa0d80-f943-11ea-90d1-e6e70eca2e29.gif"
          height="600"
          alt="image"
        />
      </div>

      <div className="mb-5 d-flex container flex-column align-items-center homepage__places">
        <h2 className="pt-3 homepage__h2">Olymp</h2>
        <div className="d-flex pt-3 container flex-row align-items-center">
          <img src={Olymp} width="500" alt="" />
          <p className="col-6 m-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure id
            iste maxime et. Voluptatum beatae illum, repellat esse debitis
            laborum expedita suscipit at nobis, deleniti sequi? Blanditiis esse
            ullam obcaecati veritatis dolores! Explicabo nulla rerum debitis
            tempora asperiores aliquam accusantium at ipsa labore hic vitae
            optio perspiciatis necessitatibus officia fuga. Quam, nostrum ipsam.
          </p>
        </div>
      </div>

      <div className="my-5 d-flex container flex-column align-items-center homepage__places">
        <h2 className="pt-3 homepage__h2">Fields</h2>
        <div className="d-flex pt-3 container flex-row align-items-center">
          <p className="col-6 m-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure id
            iste maxime et. Voluptatum beatae illum, repellat esse debitis
            laborum expedita suscipit at nobis, deleniti sequi? Blanditiis esse
            ullam obcaecati veritatis dolores! Explicabo nulla rerum debitis
            tempora asperiores aliquam accusantium at ipsa labore hic vitae
            optio perspiciatis necessitatibus officia fuga. Quam, nostrum ipsam.
          </p>
          <img src={Football} width="500" alt="" />
        </div>
      </div>

      <div className="my-5 d-flex container flex-column align-items-center homepage__places">
        <h2 className="pt-3 homepage__h2">Labs</h2>
        <div className="d-flex pt-3 container flex-row align-items-center">
          <img src={Class} width="500" alt="" />
          <p className="col-6 m-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure id
            iste maxime et. Voluptatum beatae illum, repellat esse debitis
            laborum expedita suscipit at nobis, deleniti sequi? Blanditiis esse
            ullam obcaecati veritatis dolores! Explicabo nulla rerum debitis
            tempora asperiores aliquam accusantium at ipsa labore hic vitae
            optio perspiciatis necessitatibus officia fuga. Quam, nostrum ipsam.
          </p>
        </div>
      </div>

      <div className="my-5 d-flex container flex-column align-items-center homepage__places">
        <h2 className="pt-3 homepage__h2">Canteen</h2>
        <div className="d-flex container flex-row align-items-center justify-content-between">
          <p className="col-6 m-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure id
            iste maxime et. Voluptatum beatae illum, repellat esse debitis
            laborum expedita suscipit at nobis, deleniti sequi? Blanditiis esse
            ullam obcaecati veritatis dolores! Explicabo nulla rerum debitis
            tempora asperiores aliquam accusantium at ipsa labore hic vitae
            optio perspiciatis necessitatibus officia fuga. Quam, nostrum ipsam.
          </p>
          <img src={Canteen} width="500" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
