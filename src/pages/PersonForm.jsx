import React from "react";

const PersonForm = () => {
  return (
    
      <div className="container_personform">
        <header className="header_personform">
        <h4>Fill Up Partner's Detail</h4></header>
        <form action="#">
          <div className="form_first">
            <div className="details_personal">
              <span className="title">First Person</span>
              <div className="fields">
                <div className="input-field">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="input-field">
                  <label>Gender</label>
                  <select required>
                    <option disabled selected>
                      Select gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="input-field">
                  <label>Date of Birth</label>
                  <input type="date" placeholder="Enter birth date" required />
                </div>
                <div className="input-field">
                  <label>place of birth</label>
                  <input
                    type="text"
                    placeholder="Enter place of birth"
                    required
                  />
                </div>
              </div>
            </div>
            {/* <div class="details ID">
              <button class="nextBtn">
                  <span class="btnText">Next</span>
                  <i class="uil uil-navigator"></i>
              </button>
          </div> */}
          </div>
          <div className="clear" />
          <div className="form_second">
            <div className="details_personal">
              <div>
                <span className="title">Second Person</span>
                <div className="fields">
                  <div className="input-field">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="input-field">
                    <label>Gender</label>
                    <select required>
                      <option disabled selected>
                        Select gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="input-field">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      placeholder="Enter birth date"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>place of birth</label>
                    <input
                    className="input_place"
                      type="text"
                      placeholder="Enter place of birth"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="horoscop_bottom">
          <h4>Match Horoscope</h4>
        </div>
      </div>
    
  );
};

export default PersonForm;
