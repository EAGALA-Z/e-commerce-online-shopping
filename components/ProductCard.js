import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product, isFavorite, toggleFavorite }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <button
          className={styles.favoriteButton}
          onClick={() => toggleFavorite(product.id)}
        >
          {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
        </button>
      </div>
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
      <button className={styles.addButton}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
