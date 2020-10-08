import React from "react";
import OwlCarousel from "react-owl-carousel";
const Speakers = () => {
  const speakers = [
    {
      image: "./img/team/team1.jpg",
      name: "د. سمير عاشور",
      capacity: "مدير المعهد",
    },
    {
      image: "./img/team/team1.jpg",
      name: "أ. فطيمة الشيباني مسعود",
      capacity: " مدير مكتب التعليم الإلكتروني",
    },
    {
      image: "./img/team/team1.jpg",
      name: "م. عبد الخالق الهنقاري",
      capacity: " المسجل العام",
    },
  ];
  return (
    <section
      id="speakers"
      className="container text-center my-5"
      style={{ direction: "ltr" }}
    >
      <h1 data-aos="fade-left" className="py-4 text-white">
        Confirmed Speakers
      </h1>
      <div className="card-speakers" data-aos="fade-up">
        <OwlCarousel
          className="owl-thene"
          loop
          autoWidth
          items="4"
          margin={7}
          autoPlay
          dots={true}
        >
          {speakers.map((speaker) => (
            <div className="item">
              <div className="team-info">
                <img src={speaker.image} alt="" />
                <h4 className="item-info-title my-3">{speaker.name}</h4>
                <span className="item-info-desc">{speaker.capacity}</span>
                <div className="team-info-social">
                  <i className="fa fa-facebook"></i>
                  <i className="fa fa-twitter"></i>
                  <i className="fa fa-youtube"></i>
                  <i className="fa fa-linkedin"></i>
                  <i className="fa fa-google-plus"></i>
                  <span className="bg"></span>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Speakers;
