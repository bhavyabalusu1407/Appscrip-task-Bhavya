import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard"
export const dynamic = "force-dynamic";

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();

    if (!Array.isArray(data)) throw new Error("Invalid data");

    return data;
  } catch (error) {
    console.error("SSR API Failed:", error);

    return [
      {
        id: 1,
        title: "Sample Product 1",
        price: 100,
        image: "https://via.placeholder.com/200",
      },
      {
        id: 2,
        title: "Sample Product 2",
        price: 200,
        image: "https://via.placeholder.com/200",
      },
      {
        id: 3,
        title: "Sample Product 3",
        price: 300,
        image: "https://via.placeholder.com/200",
      },
    ];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      {/* Header */}
      <Header />

      {/* SEO */}
      <h1 style={{ display: "none" }}>Product Listing Page</h1>

      <div className={styles.container}>
        
        {/* Sidebar */}
        <aside>
          <Sidebar />
        </aside>

        {/* Products */}
        <section className={styles.products}>
          <h2 style={{ display: "none" }}>Products</h2>

          {products.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </section>

      </div>
    </main>
  );
}