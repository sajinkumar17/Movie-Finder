import ProductList from "../features/products/ProductList";
import Cart from "../features/cart/Cart";

export default function Home() {
  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-bold mb-2">Shop</h1>
        <ProductList />
      </div>
      <aside>
        <Cart />
      </aside>
    </div>
  );
}
