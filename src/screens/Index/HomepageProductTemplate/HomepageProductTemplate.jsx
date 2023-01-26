import "./HomepageProductTemplate.css";
import Product1 from "../../../assets/img/product/product-1.png";
import { useNavigate } from "react-router-dom";


const HomepageProductTemplate = ({data}) => {
  const navigate = useNavigate();
  
    return (
    <>
      <div className="product-item" onClick={event => {
        navigate('/gallery')
      }}>
        <img src={Product1} alt="" className="homepage_product_image"/>
        
        <div className="ratting">
            <span>
              <i className="ion-android-star"></i>
            </span>
            <span>
              <i className="ion-android-star"></i>
            </span>
            <span>
              <i className="ion-android-star"></i>
            </span>
            <span>
              <i className="ion-android-star"></i>
            </span>
            <span>
              <i className="ion-android-star-half"></i>
            </span>
          </div>
        <div className="homepage_product_heading">{data.name}</div>
            
        <span className="price">
          <strong>Price:</strong> ${data.price}
        </span>
      </div>
    </>
  );
};

export default HomepageProductTemplate;
