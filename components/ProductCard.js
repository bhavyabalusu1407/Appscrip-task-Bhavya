export default function ProductCard({ title, price, image }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px" }}>
      <img
        src={image}
        alt={title}
        width="200"
        height="200"
        style={{ objectFit: "contain" }}
      />
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
  );
}