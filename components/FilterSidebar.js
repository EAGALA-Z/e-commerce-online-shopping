import React from "react";
import styles from "../styles/FilterSidebar.module.css";

const FilterSidebar = ({ products, selectedCategories, setSelectedCategories }) => {
  const categories = [...new Set(products.map((p) => p.category))];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <aside className={styles.sidebar}>
      <h3>Filter by Category</h3>
      {categories.map((category) => (
        <label key={category} className={styles.checkbox}>
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => handleCategoryChange(category)}
          />
          {category}
        </label>
      ))}
    </aside>
  );
};

export default FilterSidebar;
