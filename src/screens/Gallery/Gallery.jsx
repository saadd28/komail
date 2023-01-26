import Product1 from "../../assets/img/product/product-1.png";
import Product2 from "../../assets/img/product/product-2.png";
import Product3 from "../../assets/img/product/product-3.png";
import Product4 from "../../assets/img/product/product-4.png";
import Product5 from "../../assets/img/product/product-5.png";
import Product6 from "../../assets/img/product/product-6.png";
import Product7 from "../../assets/img/product/product-7.png";
import Product8 from "../../assets/img/product/product-8.png";
import Product9 from "../../assets/img/product/product-9.png";
import Product10 from "../../assets/img/product/product-10.png";
import Product11 from "../../assets/img/product/product-11.png";
import Product12 from "../../assets/img/product/product-12.png";
import { useNavigate } from "react-router-dom";
import GalleryProductTemplate from "./GalleryProductTemplate/GalleryProductTemplate";

const Gallery = () => {
  const navigate = useNavigate();

  let data = [
    { name: "Steering Wheel" },
    { name: "Steering Wheel" },
    { name: "Steering Wheel" },
    { name: "Steering Wheel" },
    { name: "Steering Wheel" },
    { name: "Steering Wheel" },
    { name: "Steering Wheel" },
    { name: "Steering Wheel" },
    { name: "Steering Wheel" },
    { name: "Steering Wheel" },
    { name: "Steering Wheel" },
    { name: "Steering Wheel" },
  ];
  return (
    <>
      {/* <!--== Start Page Header Area ==--> */}
      <div
        className="page-header-wrap bg-img gallery_bg1"
        data-bg="assets/img/bg/page-header-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="page-header-content">
                <div className="page-header-content-inner">
                  <h1>Gallery</h1>

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
                          navigate("/gallery");
                        }}
                      >
                        Gallery
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
      <div className="page-content-wrapper sp-y">
        <div className="gallery-page-content">
          <div className="container container-wide">
            <div className="row mtn-30 image-gallery">
              {data.map((data) => (
                <GalleryProductTemplate data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <!--== End Page Content Wrapper ==--> */}
    </>
  );
};

export default Gallery;
