import styles from "../styles/Home.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h3>Filters</h3>

      <h4>Category</h4>
      <p>All</p>
      <p>Men</p>
      <p>Women</p>
      <p>Electronics</p>

      <h4>Price</h4>
      <p>Under $50</p>
      <p>$50 - $100</p>
      <p>Above $100</p>
    </div>
  );
}