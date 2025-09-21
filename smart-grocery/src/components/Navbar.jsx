import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white p-4 flex justify-between">
      <div className="flex space-x-4">
        <Link to="/" className="font-bold">SmartGrocery</Link>
        <Link to="/" className="hover:underline">Shop</Link>
        <Link to="/analytics" className="hover:underline">Analytics</Link>
      </div>
      <div>
        <span className="text-sm text-slate-300">Demo</span>
      </div>
    </nav>
  );
}
