import products from "../../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {products.map(p => (
        <div key={p.id} className="border p-4 rounded shadow flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-600">{p.category} • ${p.price.toFixed(2)}</p>
          </div>
          <button
            onClick={() => dispatch(addToCart(p))}
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}
