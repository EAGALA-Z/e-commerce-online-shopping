import React from "react";
import styles from "../styles/FilterBar.module.css";

const FilterBar = ({
  totalItems,
  sortOption,
  setSortOption,
  toggleFilter,
  isFilterVisible,
}) => {
  return (
    <>
      <hr className={styles.divider} />
      <div className={styles.filterBar}>
        {/* Left Side */}
        <div className={styles.leftSection}>
          <p>{totalItems} Items</p>
          <button className={styles.filterButton} onClick={toggleFilter}>
            {isFilterVisible ? "Hide Filter" : "Show Filter"}
          </button>
        </div>

        {/* Right Side */}
        <div className={styles.rightSection}>
          <label htmlFor="sort">Recommended:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="popular">Popular</option>
            <option value="high">Price: High to Low</option>
            <option value="low">Price: Low to High</option>
          </select>
        </div>
      </div>
      <hr className={styles.divider} />
    </>
  );
};

export default FilterBar;
