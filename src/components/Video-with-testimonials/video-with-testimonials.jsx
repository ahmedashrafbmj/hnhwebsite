/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="block-sec" style={{height:"80vh"}}>
      <div
        className="background bg-img pb-0 parallaxie "
        style={{ backgroundImage: `url(/img/bg-vid.jpg)`,height:"80vh" }}
        data-overlay-dark="5"
      >
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-6">
              <div className="vid-area">
                <span className="text">Watch Video</span>
                <div className="vid-icon">
                  {typeof window !== "undefined" && (
                    <ModalVideo
                    channel="vimeo"
                    isOpen={isOpen}
                    videoId="/img/CompressVideo.mp4"
                    onClose={() => setOpen(false)}
                  />
                  )}
                  <a
                    className="vid"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <i className="fas fa-play"></i>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div> */}
            <div className="col-lg-6 offset-lg-1 mt-4" >
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Our Clients
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    What Client&apos;s Say?
                  </h4>
                </div>
                <Slider
                  {...settings}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="item">
                    <p>
                    Working with several word press themes and templates the last years,
I only can say this is the best in every level. I use it for my company and the reviews that I have already are all excellent.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Alina Lora</h6>
                          <span className="author-details">
                            Former Manager, ITSoft
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                    This is one of the BEST THEMES I have ever worked with. The extra bells and whistles added to it are amazing. Elementor features add
extra flavor. The customer support is very responsive.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Rahon Jho</h6>
                          <span className="author-details">
                          Former Manager, ITSoft
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                    Great theme, one of the best I have worked with in a while. Full
featured and great support for the minor issues I had which were really my not being skilled/experienced enough.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/3.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Donald Frew</h6>
                          <span className="author-details">
                          Former Manager, ITSoft
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoWithTestimonials;
