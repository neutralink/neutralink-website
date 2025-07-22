import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { type: 'Ativos', value: 8 },
  { type: 'Inativos', value: 2 }
]
const COLORS = ['#22c55e', '#ef4444']

export default function DeviceDistributionChart() {
  return (
    <div className="bg-neutral-900 rounded-lg p-6 shadow-md h-full">
      <h2 className="text-lg font-semibold text-white mb-4">Distribuição de Dispositivos</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="type"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}