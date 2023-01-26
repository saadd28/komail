
import Product1 from "../../../assets/img/product/product-1.png";
import { useNavigate } from "react-router-dom";

const GalleryProductTemplate = ({ data }) => {
  const navigate = useNavigate()
    return (
    <>
      <div className="col-sm-6 col-lg-3" onClick={event =>{
        navigate('/contact')
      }}>
        <div
          className="gallery-item"
          data-mfp-src="assets/img/product/product-1.png"
        >
          <img src={Product1} alt="gallery" />
          <div className="gallery-item__text">
            <h3>{data.name}</h3>
          </div>
        </div> 
      </div>
    </>
  );
};

export default GalleryProductTemplate;
