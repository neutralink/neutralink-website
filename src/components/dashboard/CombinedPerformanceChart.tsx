import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const data = [
  { month: 'Jan', generated: 90, certified: 60 },
  { month: 'Fev', generated: 110, certified: 85 },
  { month: 'Mar', generated: 105, certified: 95 },
  { month: 'Abr', generated: 98, certified: 70 }
]

export default function CombinedPerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="month" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#333' }} />
        <Bar dataKey="certified" fill="#facc15" />
        <Line dataKey="generated" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
      </ComposedChart>
    </ResponsiveContainer>
  )
}