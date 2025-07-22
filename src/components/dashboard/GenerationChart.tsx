import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const data = [
  { date: 'Seg', generated: 12 },
  { date: 'Ter', generated: 18 },
  { date: 'Qua', generated: 15 },
  { date: 'Qui', generated: 20 },
  { date: 'Sex', generated: 16 },
  { date: 'Sab', generated: 9 },
  { date: 'Dom', generated: 11 }
]

export default function GenerationChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="date" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#333' }} />
        <Line type="monotone" dataKey="generated" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
