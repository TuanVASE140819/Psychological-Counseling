import React from "react";

export default function Chat () {

    const arrrCart = [
        { img: 'https://picsum.photos/200', name: 'Sharma', a: 'Vedic, Tarot', address: 'English, Hindi', exp: '21 Years', time: 'USA 3.44 / min' },
        { img: 'https://picsum.photos/200', name: 'Thinh', a: 'Vedic, Tarot', address: 'English, Hindi', exp: '21 Years', time: 'USA 3.44 / min' },
        { img: 'https://picsum.photos/200', name: 'Dung', a: 'Vedic, Tarot', address: 'English, Hindi', exp: '21 Years', time: 'USA 3.44 / min' },
        { img: 'https://picsum.photos/200', name: 'Toan', a: 'Vedic, Tarot', address: 'English, Hindi', exp: '21 Years', time: 'USA 3.44 / min' },
        { img: 'https://picsum.photos/200', name: 'fafsafsa', a: 'Vedic, Tarot', address: 'English, Hindi', exp: '21 Years', time: 'USA 3.44 / min' },
        { img: 'https://picsum.photos/200', name: 'dsfds', a: 'Vedic, Tarot', address: 'English, Hindi', exp: '21 Years', time: 'USA 3.44 / min' },
        { img: 'https://picsum.photos/200', name: 'vdsds', a: 'Vedic, Tarot', address: 'English, Hindi', exp: '21 Years', time: 'USA 3.44 / min' },
    ]
    return (

        <div className="cart" >
            {arrrCart.map((item, index) => {
                return <div className="card-background" key={index} >
                    <div className="card-body" >
                        <div className="card-l" >
                            <img className="image" src={item.img} />
                            <div className="start" >
                                <span className="half" > ★ </span>
                                <span className="half" > ★ </span>
                                <span className="half" > ★ </span>
                                <span className="half" > ★ </span>
                                <span className="half" > ★ </span>
                                <div className='text-order'>7883 orders</div>
                            </div>
                        </div>
                        <div className="card-c" >
                            <h5 className="" > {item.name} </h5>
                            <p className="text-c" >{item.a} </p>
                            <p className="text-c" > {item.address} </p>
                            <p className="text-c" > {item.exp} </p>
                            <h6 className="text-h6" > {item.time} </h6>
                        </div>
                        <div className="card-r">
                            <img className="card-icon" alt="tick icon" src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/Chat_with_astrologers/tick_icon.png" />

                            <div className="card-button">
                                <button className="button-chat"> Chat </button>
                                <p className="text-button"> Wait~10 </p >
                            </div>
                        </div>
                    </div>
                </div>

            })}
        </div>



    );
}