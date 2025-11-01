import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import styles from "../styles/Favorites.module.css";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load favorites from localStorage (if you want to persist)
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavs);

    // Fetch all products
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const toggleFavorite = (id) => {
    const updated = favorites.includes(id)
      ? favorites.filter((f) => f !== id)
      : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Your Favorites ❤️</h1>
        {favoriteProducts.length > 0 ? (
          <ProductGrid
            products={favoriteProducts}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        ) : (
          <p className={styles.empty}>You haven’t added any favorites yet.</p>
        )}
      </div>
      <Footer />
    </>
  );
}
