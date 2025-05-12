// components/dashboard/marketplace/types.ts

export type CreditStatus =
  | 'PRE_CERTIFIED'
  | 'CERTIFIED'
  | 'SOLD'
  | 'BOUGHT'

export type DeviceType =
  | 'neutraconect'
  | 'neutramethane'
  | 'eolica'
  | 'outro'

export type Credit = {
  id: string
  amount: number               // quantidade em NTL
  price: number                // valor em R$ por NTL
  type: CreditStatus
  deviceType: DeviceType
  generator: string            // nome da usina ou gerador
  location: string             // cidade/estado
  source?: 'SOLAR' | 'BIOGAS' | 'EOLICA'
  date: string                 // data de geração
  certificateId?: string       // se certificado
  txHash?: string              // se tokenizado
  buyer?: string               // se vendido
  isMine?: boolean             // se pertence ao usuário logado

  serialNumber?: string         // número de série do dispositivo
  productionCity?: string       // cidade de produção
  createdAt?: string            // data de criação do crédito

  flagUrl?: string             // URL da bandeira do país
  cityImageUrl?: string        // URL da imagem da cidade
}