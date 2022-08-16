import React from "react";

export default function Chat() {
  const arrrCart = [
    {
      img: "https://picsum.photos/200",
      name: "Sharma",
      a: "Vedic, Tarot",
      address: "English, Hindi",
      exp: "21 Years",
      time: "USA 3.44 / min",
      active: false
    },
    {
      img: "https://picsum.photos/200",
      name: "Tuan",
      a: "Vedic, Tarot",
      address: "English, Hindi",
      exp: "21 Years",
      time: "USA 3.44 / min",
      active: false
    },
    {
      img: "https://picsum.photos/200",
      name: "Dung",
      a: "Vedic, Tarot",
      address: "English, Hindi",
      exp: "21 Years",
      time: "USA 3.44 / min",
      active: true
    },
    {
      img: "https://picsum.photos/200",
      name: "Toan",
      a: "Vedic, Tarot",
      address: "English, Hindi",
      exp: "21 Years",
      time: "USA 3.44 / min",
      active: true
    },
    {
      img: "https://picsum.photos/200",
      name: "fafsafsa",
      a: "Vedic, Tarot",
      address: "English, Hindi",
      exp: "21 Years",
      time: "USA 3.44 / min",
      active: true
    },
    {
      img: "https://picsum.photos/200",
      name: "Toan",
      a: "Vedic, Tarot",
      address: "English, Hindi",
      exp: "21 Years",
      time: "USA 3.44 / min",
      active: true
    },
    {
      img: "https://picsum.photos/200",
      name: "fafsafsa",
      a: "Vedic, Tarot",
      address: "English, Hindi",
      exp: "21 Years",
      time: "USA 3.44 / min",
      active: true
    },
    {
      img: "https://picsum.photos/200",
      name: "Toan",
      a: "Vedic, Tarot",
      address: "English, Hindi",
      exp: "21 Years",
      time: "USA 3.44 / min",
      active: true
    },
    {
      img: "https://picsum.photos/200",
      name: "fafsafsa",
      a: "Vedic, Tarot",
      address: "English, Hindi",
      exp: "21 Years",
      time: "USA 3.44 / min",
      active: true
    },
    {
      img: "https://picsum.photos/200",
      name: "Toan",
      a: "Vedic, Tarot",
      address: "English, Hindi",
      exp: "21 Years",
      time: "USA 3.44 / min",
      active: true
    },
    {
      img: "https://picsum.photos/200",
      name: "fafsafsa",
      a: "Vedic, Tarot",
      address: "English, Hindi",
      exp: "21 Years",
      time: "USA 3.44 / min",
      active: true
    }
  ];
  return (
    <div>
      <div className="chat-header">
        <div className="pay">Available balance: USD 0.00</div>
        <div className="rechange">Rechange</div>
        <div className="filter">
          <i class="fa fa-filter"> </i>
          Filter
        </div>
        <div className="Soft-by">
          <i class="fa fa-sort-amount-asc"></i>
          Soft by
        </div>

        <div class="relative text-gray-600">
          <input
            type="search"
            name="serch"
            placeholder="Search name"
            class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none "
          />
          <img src="https://img.icons8.com/material-outlined/24/000000/search.png" />
          <button
            type="submit"
            class="absolute right-0 top-0 mt-3 mr-4 "
          ></button>
        </div>
      </div>

      <div className="cart">
        {arrrCart.map((item, index) => {
          return (
            <div className="card-background" key={index}>
              <div className="card-body">
                <div className="card-l">
                  <img className="image" src={item.img} />
                  <div className="start">
                    <span className="half"> ★ </span>
                    <span className="half"> ★ </span>
                    <span className="half"> ★ </span>
                    <span className="half"> ★ </span>
                    <span className="half"> ★ </span>
                    <div className="text-order">7883 orders</div>
                  </div>
                </div>
                <div className="card-c">
                  <h5 className=""> {item.name} </h5>
                  <p className="text-c">{item.a} </p>
                  <p className="text-c"> {item.address} </p>
                  <p className="text-c"> {item.exp} </p>
                  <h6 className="text-h6"> {item.time} </h6>
                </div>
                <div className="card-r">
                  <img
                    className="card-icon"
                    alt="tick icon"
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/Chat_with_astrologers/tick_icon.png"
                  />

                  <div className="card-button">
                    <button className="button-chat">
                      {item.active ? "Chat" : "Wait"}
                    </button>
                    <p className="text-button"> Wait~10 </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
