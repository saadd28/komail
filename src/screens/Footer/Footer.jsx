import LogoImage from "../../assets/img/logo.png";
import LogoLight from "../../assets/img/logo-light.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <!--== Start Footer Area Wrapper ==--> */}
      <footer className="footer-area">
        <div className="footer-widget-area">
          <div className="container container-wide">
            <div className="row mtn-40">
              <div className="col-lg-3">
                <div className="widget-item">
                  <div className="about-widget">
                    <a
                      onClick={(event) => {
                        navigate("/");
                      }}
                    >
                      <img src={LogoLight} alt="Logo" />
                    </a>
                    <p>
                      Lukas is the best parts shop for your car accessories.
                      What kind of parts do you need you can get here soluta
                      nobis
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-2">
                <div className="widget-item"></div>
              </div>

              <div className="col-sm-6 col-lg-2">
                <div className="widget-item"></div>
              </div>

              <div className="col-sm-6 col-lg-2">
                <div className="widget-item">
                  <h4 className="widget-title">Quicklink</h4>
                  <div className="widget-body">
                    <ul className="widget-list">
                    <li>
                        <a
                          onClick={(event) => {
                            navigate("/");
                          }}
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(event) => {
                            navigate("/about");
                          }}
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(event) => {
                            navigate("/gallery");
                          }}
                        >
                          Gallery
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(event) => {
                            navigate("/contact");
                          }}
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="widget-item">
                  <h4 className="widget-title">Store Information</h4>
                  <div className="widget-body">
                    <div>
                      2005 Stokes Isle Apartment. 896, Washington 10010, USA{" "}
                      <br />
                      https://example.com <br />
                      (+68) 120034509
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="copyright-content">
                  <p>Copyright © 2019 Lukas. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!--== End Footer Area Wrapper ==--> */}

      {/* <!-- Scroll Top Button --> */}
      <button className="btn-scroll-top">
        <i className="ion-chevron-up"></i>
      </button>

      {/* <!--== Start Responsive Menu Wrapper ==--> */}
      <aside className="off-canvas-wrapper off-canvas-menu">
        <div className="off-canvas-overlay"></div>
        <div className="off-canvas-inner">
          {/* <!-- Start Off Canvas Content --> */}
          <div className="off-canvas-content">
            <div className="off-canvas-header">
              <div className="logo">
                <a href="index.html">
                  <img src={LogoImage} alt="Logo" />
                </a>
              </div>
              <div className="close-btn">
                <button className="btn-close">
                  <i className="ion-android-close"></i>
                </button>
              </div>
            </div>

            {/* <!-- Content Auto Generate Form Main Menu Here --> */}
            <div className="res-mobile-menu mobile-menu"></div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Footer;
