import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts'
  
  const data = [
    { name: '01 Jul', NTL: 10 },
    { name: '02 Jul', NTL: 20 },
    { name: '03 Jul', NTL: 15 },
    { name: '04 Jul', NTL: 25 },
    { name: '05 Jul', NTL: 30 },
    { name: '06 Jul', NTL: 28 },
    { name: '07 Jul', NTL: 34 },
  ]
  
  export default function DashboardChart() {
    return (
      <div className="bg-gray-900 p-6 rounded-xl">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#333' }} />
            <Line type="monotone" dataKey="NTL" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }