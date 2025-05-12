function CardConversaoNTL({
    ntl,
    precoPorNTL,
    tipo,
  }: {
    ntl: string
    precoPorNTL: number
    tipo: 'Certificado' | 'Pré-certificado'
  }) {
    const valorTotal = (parseFloat(ntl) * precoPorNTL).toFixed(2)
  
    return (
      <div className="bg-gray-900 p-4 rounded-xl space-y-1">
        <p className="text-sm text-gray-400">Valor estimado em R$</p>
        <h2 className="text-2xl font-bold text-green-400">R$ {valorTotal}</h2>
        <p className="text-xs text-gray-500">
          Baseado em {ntl} NTL ({tipo}) a R$ {precoPorNTL.toFixed(2)} por unidade
        </p>
      </div>
    )
  }
  