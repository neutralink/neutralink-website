// src/hooks/useUser.ts
import { useContext } from "react"
import { AuthContext } from "@/contexts/AuthContext"

export function useUser() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um AuthProvider")
  }
  return context
}