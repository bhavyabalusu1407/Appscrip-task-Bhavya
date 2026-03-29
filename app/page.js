import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
export const dynamic = "force-dynamic";

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 0 }, // disable caching
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return await res.json();
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

      {/* SEO Title */}
      <h1 style={{ display: "none" }}>Product Listing Page</h1>

      <div className={styles.container}>
        
        {/* Sidebar */}
        <aside>
          <Sidebar />
        </aside>

        {/* Products Section */}
        <section className={styles.products}>
          <h2 style={{ display: "none" }}>Products</h2>

          {products.length === 0 ? (
            <p>Loading products...</p>
          ) : (
            products.map((item) => (
              <ProductCard
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            ))
          )}
        </section>

      </div>
    </main>
  );
}