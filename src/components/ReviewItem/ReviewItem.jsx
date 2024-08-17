import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  console.log(product.id);
  return (
    <div className="review-item">
      <img src={product.img} alt="" />
      <div className="review-item-details">
        <h5>{product.name}</h5>
        <p>
          Price:$ <span className="orange-text">{product.price}</span>
        </p>
        <p>
          Quantity: <span className="orange-text">{product.quantity}</span>
        </p>
      </div>
      <button
        className="dlt-btn"
        onClick={() => handleRemoveFromCart(product.id)}
      >
        <FontAwesomeIcon className="dlt-icon" icon={faTrashCan} />
      </button>
    </div>
  );
};

export default ReviewItem;
