import { CircleUserRoundIcon, ShoppingCartIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Heading() {
  return (
    <header className={styles.heading}>
      <div className={styles.content}>
        <p>SHOP.CO</p>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <a href="">
            <li>Shop</li>
          </a>
          <a href="">
            <li>On Sale</li>
          </a>
          <a href="">
            <li>New Arrivals</li>
          </a>
          <a href="">
            <li>Brands</li>
          </a>
        </ul>
      </nav>

      <input type="search" name="search" id="searchInput" />
      <div className={styles.icons}>
        <a href="#">
          <ShoppingCartIcon />
        </a>
        <a href="#">
          <CircleUserRoundIcon />
        </a>
      </div>
    </header>
  );
}
