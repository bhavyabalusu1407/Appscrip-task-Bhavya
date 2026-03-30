import Image from "next/image";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ title, price, image }) {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
      />
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
  );
}