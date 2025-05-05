'use client'

import { useState } from 'react'

export default function SettingToggle({ label }: { label: string }) {
  const [enabled, setEnabled] = useState(true)

  return (
    <div className="flex justify-between items-center px-4 py-4">
      <span>{label}</span>
      <button
        className={`w-10 h-6 rounded-full relative transition-all duration-300 ${
          enabled ? 'bg-green-500' : 'bg-neutral-600'
        }`}
        onClick={() => setEnabled(!enabled)}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 ${
            enabled ? 'translate-x-4' : ''
          }`}
        />
      </button>
    </div>
  )
}
