import React from "react";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";

const About = () => {
  return (
    <div>
      <ImageCarousel />
      <div className="container d-flex mt-5 align-items-center flex-column">
        <h2 style={{ border: "2px darkred solid" }}>
          INTERNATIONAL ALA-TOO UNIVERSITY
        </h2>
        <h5>GATEWAY TO THE WORLD</h5>
        <div className="mt-5 d-flex align-items-center">
          <img
            src="https://data.kaktus.media/image/big/2018-06-19_11-43-06_504204.jpg"
            alt=""
            width="550"
          />
          <p
            className="col-6 ms-5 "
            style={{ fontSize: "20px", lineHeight: "40px" }}>
            Международный университет Ала-Тоо (МУА) создан в 1996 году, который
            расположен в городе Бишкек, Кыргызской Республики. МУА является
            юридическим лицом, осуществляет свою деятельность в соответствии с
            законодательством Кыргызской Республики. <br /> <br /> Органами
            управления университета являются: <br /> - высший орган -
            Учредитель; <br /> - исполнительный орган - Ректор - Санжарбек
            Эрдолатов; <br /> - коллегиальный орган - ученый совет университета.
          </p>
        </div>
        <div className="d-flex my-5 align-items-center">
          <p
            className="col-6 ms-5 "
            style={{ fontSize: "20px", lineHeight: "40px", color: "darkred" }}>
            Наш университет состоит из пяти блоков, где имеются аудитории и
            лаборатории, оснащенные интернетом и современными интерактивными
            досками. Наш «Городок» является образовательным центром с
            библиотекой, конференц-залом, 3 стадионами, 1 теннисным кордом, 1
            спортивным залом, 6 компьютерными классами, 1 интернет клубом, 1
            научно-исследовательским центром, 2 кантинами, 1 медицинским
            центром. В МУА имеются 4 факультета, 3 института и 16 кафедр.
          </p>
          <img
            width="600"
            src="https://admissionroute.com/sites/default/files/inline-images/Ala%20-%20too%20International%20University%20main%20Campus.jpg"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
