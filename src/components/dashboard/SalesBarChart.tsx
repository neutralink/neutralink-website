import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const data = [
  { week: 'Semana 1', sold: 30 },
  { week: 'Semana 2', sold: 45 },
  { week: 'Semana 3', sold: 25 },
  { week: 'Semana 4', sold: 50 }
]

export default function SalesBarChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="week" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#333' }} />
        <Bar dataKey="sold" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  )
}