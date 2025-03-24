import { ChevronRight, ChevronLeft, Dot } from 'react-bootstrap-icons';
import { useEffect, useRef, useState } from 'react';
import './Slider.css';


function Slider() {
  const [index, setIndex] = useState(0);
  const SliderBox = useRef(null);

  const sliders = [
      {
        background: "/slider/slider1.webp",
        title: "Efsanenin Doğuşu: Hazır mısın?",
        description: "Kılıcını kuşan, büyülerini hazırla! Bu dünyada efsaneler sadece cesurlar için yazılır.",
        link: "#"
      },
      {
        background: "/slider/slider2.webp",
        title: "Yeni Sezon, Yeni Macera!",
        description: "Yepyeni hikayeler, güçlü rakipler ve sınırsız eğlence seni bekliyor. Hemen keşfet!",
        link: "#"
      },
      {
        background: "/slider/slider3.webp",
        title: "Oyun Dünyasında Zirveye Çık!",
        description: "Rakiplerini geride bırak, en iyi ekipmanları topla ve zaferin tadını çıkar!",
        link: "#"
      }
    
    
  ];

  useEffect(() => {
    if(SliderBox.current){
      SliderBox.current.style.transform = `translateX(-${index * 100}vw)`;
      const interval = setInterval(() => {
        sliders.length > index + 1 ? setIndex(index + 1) : setIndex(0)
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [index, sliders.length, SliderBox]);

  return (
    <div className="home_sliderMain">
      <div className="controls">
        <ChevronLeft className='sliderControl' onClick={() => index > 0 ? setIndex(index - 1) : setIndex(sliders.length - 1)} />
        <ChevronRight className='sliderControl' onClick={() => sliders.length > index + 1 ? setIndex(index + 1) : setIndex(0)} />
      </div>
      <div className="sliderBox" ref={SliderBox}>
        <span className='vignette'></span>
        {sliders.map((slider, key) => (
          <div key={key} className='slider'>
            <img src={slider.background} alt="slider background" className='sliderBg' />
            <div className="container sliderContent">
              <h1>{slider.title}</h1>
              <p>{slider.description}</p>
              <button class="button">Detaylar</button>
            </div>
          </div>
        ))}
      </div>
      <div className='dots'>
        {sliders.map((slider, key) => (
          <Dot className='sliderDot' key={key} onClick={() => setIndex(key)} style={{ color: index === key ? "rgba(249, 183, 103, 1)" : "rgba(252, 230, 108, 1)" }} />
        ))}
      </div>
    </div>
  )
}

export default Slider