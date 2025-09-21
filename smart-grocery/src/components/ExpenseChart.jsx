import { useSelector } from "react-redux";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function ExpenseChart() {
  const records = useSelector((s) => s.history.records);

  // aggregate by date
  const agg = {};
  records.forEach(r => {
    agg[r.date] = (agg[r.date] || 0) + r.total;
  });
  const data = Object.entries(agg).map(([date, total]) => ({ date, total })).sort((a,b)=> a.date.localeCompare(b.date));

  if (data.length === 0) return <p className="p-4 text-gray-500">No expense history yet.</p>;

  return (
    <div className="p-4 border rounded shadow">
      <h3 className="font-bold mb-2">Expenses by Date</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
