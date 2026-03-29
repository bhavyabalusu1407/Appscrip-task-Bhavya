import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";

//  Force SSR
export const dynamic = "force-dynamic";

// SSR fetch
async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed");

    return await res.json();
  } catch (error) {
    console.error("SSR Fetch Error:", error);
    return null; // important
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <Header />

      <h1 style={{ display: "none" }}>Product Listing Page</h1>

      <div className={styles.container}>
        <aside>
          <Sidebar />
        </aside>

        <section className={styles.products}>
          <h2 style={{ display: "none" }}>Products</h2>

          {products && products.length > 0 ? (
            products.map((item) => (
              <ProductCard
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <ClientProducts />
          )}
        </section>
      </div>
    </main>
  );
}