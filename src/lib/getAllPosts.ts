


export interface Post {
  coverImage: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
}

export const getAllPosts = (): Post[] => {
  return [
    {
      coverImage: "/images/certificacao-ntlx.jpg",
      title: "Certificação NTLX: como funciona?",
      slug: "certificacao-ntlx",
      date: "2025-05-01",
      category: "Certificação",
      excerpt: "Entenda o processo de certificação dos créditos de carbono na plataforma NeutraLink."
    },
    {
      coverImage: "/images/creditos-esg.jpg",
      title: "Créditos ESG para empresas",
      slug: "creditos-esg-empresas",
      date: "2025-05-03",
      category: "ESG",
      excerpt: "Veja como empresas podem utilizar créditos de carbono para cumprir metas ESG."
    },
    {
      coverImage: "/images/tokenizacao-carbono-iot.jpg",
      title: "Tokenização de carbono com IoT",
      slug: "tokenizacao-carbono-iot",
      date: "2025-05-10",
      category: "Tecnologia",
      excerpt: "Como a NeutraLink usa dispositivos IoT para transformar energia solar em créditos."
    }
  ];
};