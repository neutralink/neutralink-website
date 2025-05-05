'use client'

import { useEffect, useState } from 'react'

export default function RoleSwitcherDev() {
  const [currentRole, setCurrentRole] = useState<string | null>(null)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    setCurrentRole(user?.role || 'Nenhum')
  }, [])

  const handleSwitch = (newRole: string) => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    const updatedUser = { ...user, role: newRole }
    localStorage.setItem('user', JSON.stringify(updatedUser))
    location.reload()
  }

  return (
    <div className="fixed top-2 right-2 z-50 bg-gray-800 text-white px-4 py-2 rounded-xl shadow-lg text-sm space-x-2">
      <span>Role: <strong>{currentRole}</strong></span>
      <button
        onClick={() => handleSwitch('GENERATOR')}
        className="bg-green-500 px-2 py-1 rounded"
      >
        Generator
      </button>
      <button
        onClick={() => handleSwitch('INTEGRATOR')}
        className="bg-blue-500 px-2 py-1 rounded"
      >
        Integrator
      </button>
    </div>
  )
}
