import React from "react";
import NavBarApp from "./components/NavBarApp";
import CarouselApp from "./components/CarouselApp";

const App = () => {
  const carouselImg = [
    {
      src: "1.jpg",
      alt: "Imagen 1",
    },
    {
      src: "2.jpg",
      alt: "Imagen 2",
    },
    {
      src: "3.jpg",
      alt: "Imagen 3",
    },
  ];

  const rollingImg = [
    {
      src: "https://web.rollingcodeschool.com/_next/image?url=%2Fimages%2Fsite1.webp&w=828&q=75",
      alt: "rolling 1",
    },
    {
      src: "https://web.rollingcodeschool.com/_next/image?url=%2Fimages%2Fsite2.webp&w=828&q=75",
      atl: "Rolling 2",
    },
  ];

  return (
    <>
      <NavBarApp />
      <CarouselApp carouselImg={carouselImg} id={"carousel1"} />

      <div className="container">
        <div className="row">
          <div className="col">
            <h1>RollingCode Conf</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
