import styles from "./styles.module.css";
import {
  FiChevronDown,
  FiSearch,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";

export default function Heading() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>SHOP.CO</div>

        <nav className={styles.nav}>
          <div className={styles.dropdown}>
            <span className={styles.menuItem}>
              Shop <FiChevronDown size={12} />
            </span>
            <div className={styles.dropdownContent}>
              <a href="#">Category 1</a>
              <a href="#">Category 2</a>
            </div>
          </div>
          <a href="#" className={styles.menuItem}>
            On Sale
          </a>
          <a href="#" className={styles.menuItem}>
            New Arrivals
          </a>
          <a href="#" className={styles.menuItem}>
            Brands
          </a>
        </nav>

        <div className={styles.actions}>
          <div className={styles.searchWrapper}>
            <FiSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search for products..."
              className={styles.searchInput}
            />
          </div>
          <button className={styles.iconButton}>
            <FiShoppingCart size={20} />
          </button>
          <button className={styles.iconButton}>
            <FiUser size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
