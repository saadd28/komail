import { useNavigate } from "react-router-dom";
import LogoImage from "../../assets/img/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="header-area">
        <div className="container container-wide">
          <div className="row align-items-center">
            <div className="col-sm-4 col-lg-2">
              <div className="site-logo text-center text-sm-left">
                <a href="index.html">
                  <img src={LogoImage} alt="Logo" />
                </a>
              </div>
            </div>

            <div className="col-lg-7 d-none d-lg-block">
              <div className="site-navigation">
                <ul className="main-menu nav">
                  <li className="has-submenu">
                    <a
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={(event) => {
                        navigate("/");
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={(event) => {
                        navigate("/about");
                      }}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={(event) => {
                        navigate("/gallery");
                      }}
                    >
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        cursor: "pointer",
                      }}
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

            <div className="col-sm-8 col-lg-3">
              <div className="site-action d-flex justify-content-center justify-content-sm-end align-items-center">
                <div className="responsive-menu d-lg-none">
                  <button className="btn-menu">
                    <i className="fa fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!--== End Header Area ==--> */}
    </>
  );
};

export default Navbar;
