import React from "react";

const CardSliderProfile = () => {
  return (
    <div>
      <div className="container-card-slider-profile">
        <input type="radio" name="dot" id="one" />
        <input type="radio" name="dot" id="two" />
        <div>
          <div className="title-card-slider-profile">OUR ASTROLOGERS</div>
          <div className="subtitle-card-slider-profile">
            5000+ Best Astrologers from India for Online Consultation
          </div>
        </div>

        <div className="main-card">
          <div className="cards">
            <div className="card">
              <div className="content">
                <div className="img">
                  {/*- <img src="images/img1.jpg" alt="">*/}
                </div>
                <div className="details">
                  <div className="name">Lê Hoành Khánh Duy</div>
                  <div className="job">Tarot</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="img">
                  {/*- <img src="images/img2.jpg" alt="">-*/}
                </div>
                <div className="details">
                  <div className="name">Nguyễn Tấn Phát</div>
                  <div className="job">Tarot</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="img">
                  {/* <img src="images/img3.jpg" alt="">--*/}
                </div>
                <div className="details">
                  <div className="name">Hồ Quốc Khải</div>
                  <div className="job">VasThu</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="content">
                <div className="img">
                  {/*-<img src="images/img4.jpg" alt="">-*/}
                </div>
                <div className="details">
                  <div className="name">Hứa Minh Luân</div>
                  <div className="job">Vedic</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="img">
                  {/*<img src="images/img5.jpg" alt="">--*/}
                </div>
                <div className="details">
                  <div className="name">Nguyễn Bá Tâm</div>
                  <div className="job">Tarot Reading</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="img">
                  {/*<img src="images/img6.jpeg" alt="">-*/}
                </div>
                <div className="details">
                  <div className="name">Võ Minh Tiến</div>
                  <div className="job">Oracle</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-slider">
          <label htmlFor="one" className=" active one" />
          <label htmlFor="two" className="two" />
        </div>
      </div>
    </div>
  );
};

export default CardSliderProfile;
