import { useNavigate } from "react-router-dom";
import A1 from "../../assets/img/banner/a-1.jpg";
import A2 from "../../assets/img/banner/a-2.jpg";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <!--== Start Page Header Area ==--> */}
      <div
        className="page-header-wrap bg-img about_bg1"
        
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="page-header-content">
                <div className="page-header-content-inner">
                  <h1>About</h1>

                  <ul className="breadcrumb">
                    <li>
                      <a
                        onClick={(event) => {
                          navigate("/");
                        }}
                      >
                        Home
                      </a>
                    </li>
                    <li className="current">
                      <a
                        onClick={(event) => {
                          navigate("/about");
                        }}
                      >
                        About
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--== End Page Header Area ==--> */}

      {/* <!--== Start Page Content Wrapper ==--> */}
      <div className="page-content-wrapper sm-top">
        <div className="about-page-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-1 order-md-0">
                <div className="about-content">
                  <h2 className="h3 mb-sm-20">About Lukas</h2>
                  <p>
                    This is a list of automotive parts mostly for vehicles using
                    internal combustion engines which are manufactured
                    components of automobiles.
                  </p>
                  <p>
                    This category is for components and parts that make up
                    automobile (car) bodies including accessories.
                  </p>
                  <p>
                    On motorbikes their main function is to shield the rider
                    from wind, though not as completely as in a car, whereas on
                    sports and racing motorcycles the main function is reducing
                    drag when the rider
                  </p>
                </div>
              </div>

              <div className="col-lg-6 order-0">
                <div className="about-thumb mb-sm-30">
                  <img src={A1} alt="About" />
                </div>
              </div>
            </div>

            <div className="row align-items-center sm-top">
              <div className="col-lg-6">
                <div className="about-thumb video-play mb-sm-30">
                  <img src={A2} alt="About" />
                  <a
                    href="https://www.youtube.com/watch?=17&v=S-UcVwzrAqo"
                    className="btn-video-popup"
                  >
                    <i className="ion-play"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-content">
                  <h2 className="h3">Our mission</h2>
                  <p>
                    This is a list of automotive parts mostly for vehicles using
                    internal combustion engines which are manufactured
                    components of automobiles.
                  </p>
                  <p>
                    This category is for components and parts that make up
                    automobile (car) bodies including accessories.
                  </p>
                  <p>
                    On motorbikes their main function is to shield the rider
                    from wind, though not as completely as in a car, whereas on
                    sports and racing motorcycles the main function is reducing
                    drag when the rider
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--== End Page Content Wrapper ==--> */}

      {/* <!--== Start Call to action Wrapper ==--> */}
      <div className="call-to-action-area sm-top">
        <div
          className="call-to-action-content-area home-2 bg-img about_bg2"
          // data-bg="assets/img/bg/bg-1.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="call-to-action-txt">
                  <h2>
                    ALL KINDS OF PARTS THAT YOU <br /> NEED CAN FIND HERE
                  </h2>
                  <a
                    onClick={(event) => {
                      navigate("/gallery");
                    }}
                    className="btn btn-brand"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--== End Call to action Wrapper ==--> */}

      {/* <!--== Start Need Help area ==--> */}
      <div
        className="need-help-area bg-img sm-top about_bg3"
        // data-bg="assets/img/bg/bg-2.jpg"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 text-center text-sm-left">
              <div className="need-help-content mb-sm-20">
                <h3>Need Help ?</h3>
                <p>Call our support 24/7 at 01234-567-890</p>
              </div>
            </div>

            <div className="col-sm-5 text-center text-sm-right">
              <a
                className="btn btn-black"
                onClick={(event) => {
                  navigate("/contact");
                }}
              >
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!--== End Need Help area ==--> */}
    </>
  );
};

export default About;
