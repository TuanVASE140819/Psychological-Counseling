import React from "react";
import { Link } from "react-router-dom";


export default function Chat () {
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
        <div className="filter" data-toggle="modal" data-target="#exampleModalCenter">
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
                  <Link to="/Profile">
                    <h5 className=""> {item.name} </h5>
                  </Link>
                  <p className="text-c">{item.a} </p>
                  <p className="text-c"> {item.address} </p>
                  <p className="text-c"> {item.exp} </p>
                  <h6 className="text-h6"> {item.time} </h6>
                </div>
                <div className="card-r">
                  <Link to="/Profile">
                    <img
                      className="card-icon"
                      alt="tick icon"
                      src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/Chat_with_astrologers/tick_icon.png"
                    />
                  </Link>

                  <div className="card-button">
                    <Link to='/formchat'>
                      <button className="button-chat">
                        {item.active ? "Chat" : "Wait"}
                      </button>
                    </Link>
                    <p className="text-button"> Wait~10 </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      </div>

      <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content ">
            <div className="modal-header ">
              <h5 className="modal-title" id="exampleModalLongTitle">Filter</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              < div class="naccs">
                <div className="row">
                  <div className="gc gc--1-of-3">
                    <div className="menu">
                      <div className="active"><span className="light" /><span>Beer</span></div>
                      <div><span className="light" /><span>Wine</span></div>
                      <div><span className="light" /><span>Lemonade</span></div>
                    </div>
                    <div className="">
                      <div style={{ backgroundColor: 'black', width: '1px', height: '100%' }}>
                      </div>
                    </div>
                  </div>

                  <div className="gc gc--2-of-3 ">

                    <ul className="nacc">
                      <li className="active">
                        <div class="form-check">
                          <form action="#">
                            <p className="p-text">
                              <input type="radio" id="test1" name="radio-group" defaultChecked />
                              <label htmlFor="test1">Apple</label>
                            </p>
                            <p className="p-text">
                              <input type="radio" id="test2" name="radio-group" />
                              <label htmlFor="test2">Peach</label>
                            </p>
                            <p className="p-text">
                              <input type="radio" id="test3" name="radio-group" />
                              <label htmlFor="test3">Orange</label>
                            </p>


                          </form>

                        </div>
                      </li>
                      <li>
                        <div>
                          <p>A vine (Latin vīnea "grapevine", "vineyard", from vīnum "wine") in the narrowest sense is the grapevine (Vitis), but more generally it can refer to any plant with a growth habit of trailing or scandent (that is, climbing) stems, lianas or runners.
                            The word also can refer to such stems or runners themselves, for instance when used in wicker work.[1][2] In the United Kingdom, the term "vine" applies almost exclusively to the grapevine. The term "climber" is used for all climbing plants.[3]</p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <p>Lemonade is any of various sweetened beverages found around the world, all characterized by lemon flavor. Most lemonade varieties can be separated into two distinct types: cloudy and clear; each is known simply as "lemonade" (or a cognate) in countries
                            where dominant.[1] Cloudy lemonade, generally found in North America and India, is a traditionally homemade drink made with lemon juice, water, and sweetener such as cane sugar or honey.[2] Found in the United Kingdom, Ireland, South Africa, Australia,
                            and New Zealand, clear lemonade is a lemon flavoured carbonated soft drink. Not to be confused with Sprite a lemon-lime flavored, soft drink.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            <div className="modal-footer">
              <button type="button" className="filter_btns" >Reset</button>
              <button type="button" className="filter_btns apply_btn">Apply</button>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
}
