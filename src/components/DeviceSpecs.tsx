export default function DeviceSpecs() {
    const specs = [
      { label: 'Processador', value: 'ESP32 Dual Core 240MHz' },
      { label: 'Conectividade', value: 'Wi-Fi 2.4GHz' },
      { label: 'Entradas', value: 'RS485 (MAX485), Sensor SCT-013, GPIO' },
      { label: 'Protocolos', value: 'Modbus RTU, HTTP (com HMAC-SHA256)' },
      { label: 'Alimentação', value: '5V ou 12V (regulador interno)' },
      { label: 'Firmware', value: 'Atualizável via OTA (Over The Air)' },
      { label: 'Segurança', value: 'Assinatura HMAC, Hash SHA256' },
      { label: 'Memória', value: 'SPIFFS para cache offline local' },
      { label: 'Encapsulamento', value: 'Caixa DTU com LED de status e botão físico' },
    ];
  
    return (
      <section className="bg-neutral-100 text-black py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Especificações Técnicas
          </h2>
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="w-full text-left border border-neutral-300 bg-white">
              <tbody>
                {specs.map((item) => (
                  <tr key={item.label} className="border-b border-neutral-200">
                    <th className="p-4 font-semibold bg-neutral-50 w-1/3">{item.label}</th>
                    <td className="p-4 text-neutral-700">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
  