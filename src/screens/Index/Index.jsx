import "../../assets/css/leaflet.min.css";
import "../../assets/css/nice-select.min.css";
import "../../assets/css/slick.min.css";
import "../../assets/css/magnific-popup.min.css";
import "../../assets/css/slicknav.min.css";
import "../../assets/css/animate.min.css";
import "../../assets/css/ionicons.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/helper.min.css";

// import '../../assets/js/modernizr-3.6.0.min.js'
// import '../../assets/js/active.js'

import LogoImage from "../../assets/img/logo.png";
import Banner1 from "../../assets/img/banner/banner-1.jpg";
import Banner2 from "../../assets/img/banner/banner-2.jpg";
import Banner3 from "../../assets/img/banner/banner-3.jpg";
import Icon1 from "../../assets/img/icons/icon-1.png";
import Icon2 from "../../assets/img/icons/icon-2.png";
import Icon3 from "../../assets/img/icons/icon-3.png";
import Product1 from "../../assets/img/product/product-1.png";
import Product2 from "../../assets/img/product/product-2.png";
import Product3 from "../../assets/img/product/product-3.png";
import Product4 from "../../assets/img/product/product-4.png";
import Product5 from "../../assets/img/product/product-5.png";
import LogoLight from "../../assets/img/logo-light.png";
import { useNavigate } from "react-router-dom";
import HomepageProductTemplate from "./HomepageProductTemplate/HomepageProductTemplate";
import { useEffect, useState } from "react";
// import Slider1 from '../../assets/img/slider/slider-1.jpg'

const Index = () => {
  const navigate = useNavigate();

  // const [view5products, setview5products] = useState(false);
  // const [view4products, setview4products] = useState(false);
  const [viewproducts, setviewproducts] = useState("");

  useEffect(() => {
    if (window.innerWidth > 1200) {
      setviewproducts("5");
    } else if (window.innerWidth > 992) {
      setviewproducts("4");
    } else if (window.innerWidth > 768) {
      setviewproducts("3");
    } else if (window.innerWidth > 584) {
      setviewproducts("2");
    } else if (window.innerWidth > 0) {
      setviewproducts("1");
    }
  }, []);

  useEffect(() => {
    const handleresize = () => {
      if (window.innerWidth > 1200) {
        setviewproducts("5");
        // setview4products(false);
      } else if (window.innerWidth > 992) {
        // setview5products(false);
        setviewproducts("4");
      } else if (window.innerWidth > 768) {
        // setview5products(false);
        setviewproducts("3");
      } else if (window.innerWidth > 584) {
        setviewproducts("2");
      } else if (window.innerWidth > 0) {
        setviewproducts("1");
      }
    };

    window.addEventListener("resize", handleresize);

    return () => {
      window.removeEventListener("resize", handleresize);
    };
  });
  const data = [
    {
      name: "Steering Wheel",
      price: "1450",
    },
    {
      name: "Steering Wheel",
      price: "1450",
    },
    {
      name: "Steering Wheel",
      price: "1450",
    },
    {
      name: "Steering Wheel",
      price: "1450",
    },
    {
      name: "Steering Wheel",
      price: "1450",
    },
    {
      name: "Steering Wheel",
      price: "1450",
    },
    {
      name: "Steering Wheel",
      price: "1450",
    },
  ];
  return (
    <>
      {/* <!--== Start Slider Area Wrapper ==--> */}
      <div className="slider-area-wrapper">
        <div className="slider-content-active">
          <div
            className="slider-slide-item bg-img home_bg1"
            // data-bg={"../../assets/img/slider/slider-1.jpg"}
          >
            <div className="container container-wide h-100">
              <div className="row align-items-center h-100">
                <div className="col-lg-6">
                  <div className="slide-content">
                    <div className="slide-content-inner">
                      <h3>NEW TECHNOLOGY & BUILD</h3>
                      <h2>WHEELS &amp; TIRES COLLECTIONS</h2>
                      <a
                        className="btn btn-white"
                        onClick={(event) => {
                          navigate("/gallery");
                        }}
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="slider-slide-item bg-img" data-bg="assets/img/slider/slider-2.jpg">
                <div className="container container-wide h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-12">
                            <div className="slide-content">
                                <div className="slide-content-inner">
                                    <h3>NEW TECHNOLOGY & BUILD</h3>
                                    <h2>WHEELS &amp; TIRES <br/> COLLECTIONS</h2>
                                        <a className="btn btn-white" href="shop.html">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
      </div>
      {/* <!--== End Slider Area Wrapper ==--> */}

      {/* <!--== Start Banner Area Wrapper ==--> */}
      <div className="banner-area-wrapper banner-mt">
        <div className="container container-wide">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="banner-item">
                <div className="banner-item__img">
                  <a
                    onClick={(event) => {
                      navigate("/gallery");
                    }}
                  >
                    <img src={Banner1} alt="Banner" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="banner-item">
                <div className="banner-item__img">
                  <a
                    onClick={(event) => {
                      navigate("/gallery");
                    }}
                  >
                    <img src={Banner2} alt="Banner" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="banner-item">
                <div className="banner-item__img">
                  <a
                    onClick={(event) => {
                      navigate("/gallery");
                    }}
                  >
                    <img src={Banner3} alt="Banner" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--== End Banner Area Wrapper ==--> */}

      {/* <!--== Start Call to Action Area ==--> */}
      <div className="call-to-action-area sm-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <div className="call-to-action-item mt-0">
                <div className="call-to-action-item__icon">
                  <img src={Icon1} alt="fast delivery" />
                </div>
                <div className="call-to-action-item__info">
                  <h3>Free Home Delivery</h3>
                  <p>Provide free home delivery for all product over $100</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-4">
              <div className="call-to-action-item">
                <div className="call-to-action-item__icon">
                  <img src={Icon2} alt="quality" />
                </div>
                <div className="call-to-action-item__info">
                  <h3>Quality Products</h3>
                  <p>We ensure our product quality all times</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-4">
              <div className="call-to-action-item">
                <div className="call-to-action-item__icon">
                  <img src={Icon3} alt="return" />
                </div>
                <div className="call-to-action-item__info">
                  <h3>Online Support</h3>
                  <p>To satisfy our customer we try to give support online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--== End Call to Action Area ==--> */}

      {/* <!--== Start Best Seller Products Area ==--> */}
      <div className="best-seller-products-area sm-top">
        <div className="container container-wide">
          <div className="row">
            <div className="col-lg-5 m-auto text-center">
              <div className="section-title">
                <h2 className="h3">Best Seller</h2>
                <p>
                  All best seller product are now available for you and your can
                  buy this product from here any time any where so sop now
                </p>
              </div>
            </div>
          </div>

          {/* add heree */}

          <div className="homepage_products_container">
            {viewproducts === "5"
              ? data
                  .slice(0, 5)
                  .map((data) => <HomepageProductTemplate data={data} />)
              : ""}

            {viewproducts === "4"
              ? data
                  .slice(0, 4)
                  .map((data) => <HomepageProductTemplate data={data} />)
              : ""}

            {viewproducts === "3"
              ? data
                  .slice(0, 3)
                  .map((data) => <HomepageProductTemplate data={data} />)
              : ""}

            {viewproducts === "2"
              ? data
                  .slice(0, 2)
                  .map((data) => <HomepageProductTemplate data={data} />)
              : ""}

            {viewproducts === "1"
              ? data
                  .slice(0, 1)
                  .map((data) => <HomepageProductTemplate data={data} />)
              : ""}
          </div>
        </div>
      </div>
      {/* <!--== End Best Seller Products Area ==--> */}

      {/* <!--== Start Call to action Wrapper ==--> */}
      <div className="call-to-action-area">
        <div
          className="call-to-action-content-area bg-img home_bg2"
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
      {/* <!-- ---------------------------------------------------------------------- --> */}

      {/* <!--== Start Brand Logo Area Wrapper ==--> */}
      <div className="brand-logo-area sm-top sm-bottom"></div>
      {/* <!--== End Brand Logo Area Wrapper ==--> */}
    </>
  );
};

export default Index;
