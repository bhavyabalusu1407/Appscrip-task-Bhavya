import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";

export const dynamic = "force-dynamic";

// SSR fetch with timeout + fallback
async function getProducts() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5 sec timeout

    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      console.error("API response not OK");
      return [];
    }

    const data = await res.json();

    // Ensure valid array
    if (!Array.isArray(data)) return [];

    return data;
  } catch (error) {
    console.error("SSR Fetch Failed:", error);
    return []; 
  }
}

export default async function Home() {
  let products = [];

  try {
    products = await getProducts();
  } catch (e) {
    console.error("Page Error:", e);
    products = [];
  }

  return (
    <main>
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

          {products.length > 0 ? (
            products.map((item) => (
              <ProductCard
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <div style={{ padding: "20px" }}>
              <p>Products could not be loaded.</p>
              <p>Please try again later.</p>
            </div>
          )}
        </section>

      </div>
    </main>
  );
}