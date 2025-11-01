import Head from "next/head";
import { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import FilterBar from "../components/FilterBar";
import FilterSidebar from "../components/FilterSidebar";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return { props: { products } };
}

export default function Home({ products }) {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [sortOption, setSortOption] = useState("newest");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Add/remove favorites
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Filtering and sorting logic
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Sort
    switch (sortOption) {
      case "popular":
        result.sort((a, b) => b.rating.count - a.rating.count);
        break;
      case "high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "low":
        result.sort((a, b) => a.price - b.price);
        break;
      default:
        result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [products, sortOption, selectedCategories]);

  return (
    <>
      <Head>
        <title>Product Listing | FakeStore</title>
        <meta
          name="description"
          content="Browse our wide collection of fake store products including fashion, electronics, and more."
        />
      </Head>

      <Header />

      <div className={styles.container}>
        <FilterBar
          totalItems={filteredProducts.length}
          sortOption={sortOption}
          setSortOption={setSortOption}
          toggleFilter={() => setIsFilterVisible(!isFilterVisible)}
          isFilterVisible={isFilterVisible}
        />

        <div className={styles.content}>
          {isFilterVisible && (
            <FilterSidebar
              products={products}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          )}

          <ProductGrid
            products={filteredProducts}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
