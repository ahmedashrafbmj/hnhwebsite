/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import tooltipEffect from "../../common/tooltipEffect";

const WorksStyle1 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      tooltipEffect();
    }, 1000);
  }, []);
  return (
    <section className="works section-padding pb-70">
      <h2 style={{display: 'none'}}>&nbsp;</h2>
      <div className="container">
        <div className="row lg-space">
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href={`/project-details2/project-details2-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Aurcade Players"
                    data-tooltip-sub="Admin and UserSide"
                  >
                    <img src="/img/portfolio/metro/01.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href={`/project-details2/project-details2-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Banker Broker"
                    data-tooltip-sub="Admin Panel"
                  >
                    <img src="/img/portfolio/metro/02.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href={`/project-details2/project-details2-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Abeer"
                    data-tooltip-sub="Admin Panel"
                  >
                    <img src="/img/portfolio/metro/03.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href={`/project-details2/project-details2-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Bright consultation"
                    data-tooltip-sub="Web Application"
                  >
                    <img src="/img/portfolio/metro/04.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href={`/project-details2/project-details2-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Clo"
                    data-tooltip-sub="Mobile Application"
                  >
                    <img src="/img/portfolio/metro/05.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href={`/project-details2/project-details2-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/portfolio/2/4.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href={`/project-details2/project-details2-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/portfolio/1/4.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href={`/project-details2/project-details2-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/portfolio/2/5.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href={`/project-details2/project-details2-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/portfolio/1/5.jpg" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default WorksStyle1;
