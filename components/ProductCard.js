import styles from "../styles/Home.module.css";

export default function ProductCard({ title, price, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
  );
}