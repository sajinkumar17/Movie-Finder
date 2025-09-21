import { useSelector, useDispatch } from "react-redux";
import { changeQty, removeFromCart, clearCart } from "./cartSlice";
import { addRecord } from "../history/historySlice";
import { useState } from "react";

export default function Cart() {
  const { items, total } = useSelector((s) => s.cart);
  const dispatch = useDispatch();
  const [note, setNote] = useState("");

  const checkout = () => {
    if (items.length === 0) return;
    const record = {
      id: Date.now(),
      date: new Date().toISOString().slice(0,10),
      items: items.map(i => ({ ...i })),
      total,
      note
    };
    dispatch(addRecord(record));
    dispatch(clearCart());
    setNote("");
    alert("Checkout saved to history.");
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="font-bold mb-2">Cart</h2>
      {items.length === 0 && <p className="text-gray-500">Cart is empty</p>}
      {items.map(it => (
        <div key={it.id} className="flex justify-between items-center mb-2">
          <div>
            <div className="font-semibold">{it.name}</div>
            <div className="text-sm text-gray-500">{it.category}</div>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              min="0"
              value={it.qty}
              onChange={(e) => dispatch(changeQty({ id: it.id, qty: Number(e.target.value) }))}
              className="w-16 border p-1 rounded"
            />
            <div>${(it.price * it.qty).toFixed(2)}</div>
            <button onClick={() => dispatch(removeFromCart(it.id))} className="text-red-500">Remove</button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <div className="font-bold">Total: ${total.toFixed(2)}</div>
        <textarea value={note} onChange={(e)=>setNote(e.target.value)} placeholder="Optional note" className="w-full border p-2 mt-2 rounded"></textarea>
        <div className="flex space-x-2 mt-2">
          <button onClick={checkout} className="bg-green-600 text-white px-4 py-2 rounded">Checkout</button>
          <button onClick={() => dispatch(clearCart())} className="bg-gray-300 px-4 py-2 rounded">Clear</button>
        </div>
      </div>
    </div>
  );
}
