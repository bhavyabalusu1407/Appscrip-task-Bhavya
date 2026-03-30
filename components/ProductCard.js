export default function ProductCard({ title, price, image }) {
  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <img
        src={image}
        alt={title}
        style={{
          width: "150px",
          height: "150px",
          objectFit: "contain",
        }}
      />
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
  );
}