// src/types/user.ts

// Enum com os perfis disponíveis na plataforma NeutraLink
export type UserRole =
  | 'GENERATOR'   // Gera créditos com IoT/inversores
  | 'BUYER'       // Pessoa física que compra créditos
  | 'COMPANY'     // Empresa que compra créditos e precisa de relatórios ESG
  | 'INTEGRATOR'; // Integrador que instala dispositivos IoT para terceiros