import { useSelector } from "react-redux";
import ExpenseChart from "../components/ExpenseChart";

export default function Analytics() {
  const records = useSelector(s => s.history.records);

  // category totals
  const cat = {};
  records.forEach(r => {
    r.items.forEach(it => {
      cat[it.category] = (cat[it.category] || 0) + it.price * it.qty;
    });
  });
  const catArr = Object.entries(cat).map(([category, amount]) => ({ category, amount }));

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Analytics</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <ExpenseChart />
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold mb-2">Spend by Category</h3>
          {catArr.length === 0 && <p className="text-gray-500">No data</p>}
          {catArr.map(c => (
            <div key={c.category} className="flex justify-between py-1">
              <div>{c.category}</div>
              <div>${c.amount.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 border rounded shadow">
        <h3 className="font-bold mb-2">History</h3>
        {records.length === 0 && <p className="text-gray-500">No purchases yet.</p>}
        {records.map(r => (
          <div key={r.id} className="mb-2 border-b pb-2">
            <div className="flex justify-between"><div>{r.date}</div><div>${r.total.toFixed(2)}</div></div>
            <div className="text-sm text-gray-600">{r.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
