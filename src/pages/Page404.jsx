import React from 'react';
import bg404 from '../assets/images/image.png'
import '../assets/styles/404Page.css'

const Page404 = () => {
  const renderStars = (className, count) => {
    return Array.from({ length: count }, (_, i) => (
      <div key={`${className}-${i}`} className={className}></div>
    ));
  };

  const renderBirds = (count) => {
    return Array.from({ length: count }, (_, i) => (
      <div key={`bird-${i}`} className="bird bird-anim">
        <div className="bird-container">
          <div className="wing wing-left">
            <div className="wing-left-top"></div>
          </div>
          <div className="wing wing-right">
            <div className="wing-right-top"></div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div
    style={{backgroundImage: `url(${bg404})`, backgroundSize: "cover", backgroundPosition: "center"}}
    className="container-404">
      <div className="container-star">
        {renderStars('star-1', 30)}
        {renderStars('star-2', 30)}
      </div>
      <div className="container-bird">
        {renderBirds(6)}
      </div>
      <div className="container-title-404">
        <div className="title-404">
          <div className="number-404">4</div>
          <div className="moon">
            <div className="face">
              <div className="mouth"></div>
              <div className="eyes">
                <div className="eye-left"></div>
                <div className="eye-right"></div>
              </div>
            </div>
          </div>
          <div className="number-404">4</div>
        </div>
        <div className="subtitle-404">Oops. Yanlış bir yola girmişsin gibi görünüyor.</div>
        <button className='button-404' onClick={() => window.location.href="/"}>Haydi Eve Dönelim</button>
      </div>
    </div>
  );
};

export default Page404;