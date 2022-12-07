import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import Olymp from "../images/olymp1.png";
import Football from "../images/ploshadks.png";
import Class from "../images/doska.png";
import Canteen from "../images/canteen.png";

const HomePage = () => {
  return (
    <div className="d-flex container flex-column justify-content-center">
      <ImageCarousel />
      <div
        className="mt-5 d-flex container flex-column align-items-center"
        style={{
          border: "2px lightgrey solid",
          height: "400px",
          backgroundColor: "white",
        }}>
        <h2
          className="pt-3"
          style={{ color: "grey", fontFamily: "fantasy", fontWeight: "bold" }}>
          Olymp
        </h2>
        <div className="d-flex pt-3 container flex-row align-items-center">
          <img src={Olymp} width="500" alt="" />
          <p
            style={{
              fontSize: "22px",
              textAlign: "center",
              color: "grey",
              fontWeight: "lighter",
              marginLeft: "20px",
            }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure id
            iste maxime et. Voluptatum beatae illum, repellat esse debitis
            laborum expedita suscipit at nobis, deleniti sequi? Blanditiis esse
            ullam obcaecati veritatis dolores! Explicabo nulla rerum debitis
            tempora asperiores aliquam accusantium at ipsa labore hic vitae
            optio perspiciatis necessitatibus officia fuga. Quam, nostrum ipsam.
          </p>
        </div>
      </div>

      <div
        className="my-5 d-flex container flex-column align-items-center"
        style={{
          border: "2px lightgrey solid",
          height: "400px",
          backgroundColor: "white",
        }}>
        <h2
          className="pt-3"
          style={{ color: "grey", fontFamily: "fantasy", fontWeight: "bold" }}>
          Fields
        </h2>
        <div className="d-flex pt-3 container flex-row align-items-center">
          <p
            style={{
              fontSize: "22px",
              textAlign: "center",
              color: "grey",
              fontWeight: "lighter",
              marginRight: "20px",
            }}>
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

      <div
        className="my-5 d-flex container flex-column align-items-center"
        style={{
          border: "2px lightgrey solid",
          height: "400px",
          backgroundColor: "white",
        }}>
        <h2
          className="pt-3"
          style={{ color: "grey", fontFamily: "fantasy", fontWeight: "bold" }}>
          Labs
        </h2>
        <div className="d-flex pt-3 container flex-row align-items-center">
          <img src={Class} width="500" alt="" />
          <p
            style={{
              fontSize: "22px",
              textAlign: "center",
              color: "grey",
              fontWeight: "lighter",
              marginLeft: "20px",
            }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure id
            iste maxime et. Voluptatum beatae illum, repellat esse debitis
            laborum expedita suscipit at nobis, deleniti sequi? Blanditiis esse
            ullam obcaecati veritatis dolores! Explicabo nulla rerum debitis
            tempora asperiores aliquam accusantium at ipsa labore hic vitae
            optio perspiciatis necessitatibus officia fuga. Quam, nostrum ipsam.
          </p>
        </div>
      </div>

      <div
        className="my-5 d-flex container flex-column align-items-center"
        style={{
          border: "2px lightgrey solid",
          height: "400px",
          backgroundColor: "white",
        }}>
        <h2
          className="pt-3"
          style={{ color: "grey", fontFamily: "fantasy", fontWeight: "bold" }}>
          Canteen
        </h2>
        <div className="d-flex pt-3 container flex-row align-items-center">
          <p
            style={{
              fontSize: "22px",
              textAlign: "center",
              color: "grey",
              fontWeight: "lighter",
              marginRight: "20px",
            }}>
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
    </div>
  );
};

export default HomePage;
