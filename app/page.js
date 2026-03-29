import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";

// SSR - Fetch products
async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.error("API Error:", error);
    return []; // fallback
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      {/* Header */}
      <Header />

      {/* Page Title for SEO */}
      <h1 style={{ display: "none" }}>Product Listing Page</h1>

      <div className={styles.container}>
        
        {/* Sidebar */}
        <aside>
          <Sidebar />
        </aside>

        {/* Products Section */}
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