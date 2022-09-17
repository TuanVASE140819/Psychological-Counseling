import React from "react";


function DailyAstrol() {
    
  return (
    

    
    <div className="page-daily-container">
      <div className="page-content-wrapper">
        <div className="page-daily">
          <div className="col-lg-3 col-xs-12 col-sm-12" />
          <div className="col-lg-6 col-xs-12 col-sm-12">
            <div className="portlet light box-shadow-depth-1 bordered">
              <div className="portlet-title">
                <div className="caption">
                  <span className="caption-subject bold uppercase font-blue" style={{fontSize:"30px"}}>
                    Tạo Bản Đồ Sao   
                  </span>
                  <span className="caption-helper">
                    
                  </span>
                </div>
              </div>
              <div className="portlet-body ">
                <form
                  className="form-horizontal astrology-form"
                  id="WesternHoroscopeForm"
                  role="form"
                  method="post"
                  action="western/horoscope-calculations.php"
                >
                  <div className="form-group " id="formErrorContiner">
                    <div className="col-md-12">
                      <label
                        id="WhoroscopeFormError"
                        className="font-red control-label display-none "
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <label htmlFor="wr-name" className="control-label">
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="wr-name"
                        placeholder="Họ và tên"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-4">
                      <label htmlFor="wr-date" className="control-label">
                        Ngày sinh
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="wr-date"
                        placeholder="DD"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="wr-month" className="control-label">
                        Tháng sinh
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="wr-month"
                        placeholder="MM"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="wr-year" className="control-label">
                        Năm sinh
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="wr-year"
                        placeholder="YYYY"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-4">
                      <label htmlFor="wr-hour" className="control-label">
                        Giờ sinh
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="wr-hour"
                        placeholder="HH"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="wr-minute" className="control-label">
                        Phút sinh
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="wr-minute"
                        placeholder="MM"
                      />
                    </div>
                    <div className="col-md-4">
                      {" "}
                      <label htmlFor className="control-label">
                        Formate
                      </label>{" "}
                      <input
                        type="number"
                        className="form-control"
                        id
                        placeholder="24 Hours"
                        disabled
                      />{" "}
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <label htmlFor="wr-place" className="control-label">
                        Nơi sinh
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="wr-place"
                        defaultValue="Quận 9, Tp. Hồ Chí Minh, Việt Nam"
                        placeholder="Place"
                      />
                      <input
                        type="hidden"
                        name="wr-lat"
                        defaultValue="19.0760"
                        placeholder="Your place of birth"
                        id="wr-lat"
                      />
                      <input
                        type="hidden"
                        name="wr-lon"
                        defaultValue="72.8777"
                        placeholder="Your place of birth"
                        id="wr-lon"
                      />
                      <input
                        type="hidden"
                        name="wr-tzone"
                        defaultValue="5.5"
                        placeholder="Your place of birth"
                        id="wr-tzone"
                      />
                    </div>
                  </div>
                  <div className="form-group margin-top-20">
                    <div className="col-md-12">
                      <button
                        type="submit"
                        id="generateWHoroscope"
                        className="btn btn-danger mt-ladda-btn ladda-button btn-circle"
                        data-style="expand-right"
                      >
                        <span className="ladda-label">
                          <i className="icon-arrow-right" /> Get Details
                        </span>
                        <span className="ladda-spinner" />
                        <div className="ladda-progress" style={{ width: 0 }} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 col-sm-12" />
        </div>
      </div>
    </div>
  );
}

export default DailyAstrol;
