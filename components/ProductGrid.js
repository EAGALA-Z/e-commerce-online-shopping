import React from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/ProductGrid.module.css";

const ProductGrid = ({ products, favorites, toggleFavorite }) => {
  return (
    <main className={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </main>
  );
};

export default ProductGrid;
