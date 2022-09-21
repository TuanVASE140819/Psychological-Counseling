import React from "react";

function HomeLive() {
    return (
       <main>
  <section id="room__list">
    <h3 id="room__listTitle">Live Now: <span id="rooms__count">0</span></h3>
    <div className="room__container">
      <div className="room__item">
        <div className="room__content">
          <p className="room__meta">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945-3.146-5.942-.834-9.119 2.488-9.119 3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825h-15.994c0-2.196-.176-3.407 2.115-3.936zm-10.116 3.936h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619z" /></svg>
            <span>135 Participants</span>
          </p>
          <h4 className="room__title">Gary &amp; Dennis Ivy Review your  Portfolios </h4>
          <div className="room__box">
            <div className="room__author">
              <strong className="message__author">Dennis Ivy</strong>
            </div>
            <a className="room__action" href="room-video">Join Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

    );
    }

    export default HomeLive;
