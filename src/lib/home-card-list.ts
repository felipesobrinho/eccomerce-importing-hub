type SubMenu = {
    title: string;
    description: string;
};

type Card = {
    title: string;
    description?: string;
    submenu?: SubMenu[];
};

type HomeCardList = {
    cards: Card[];
};

export function getHomeCardList(): HomeCardList {
    return {
        cards: [
            {
                title: 'Quem Somos',
                description: "No Importing Hub, somos uma equipe dedicada a simplificar o processo de importação para empresas e indivíduos. Com anos de experiência no setor, nossa missão é oferecer soluções personalizadas que atendam às suas necessidades específicas e ajudem você a alcançar o sucesso no comércio internacional. Nossa abordagem é centrada no cliente, e nosso time é composto por especialistas apaixonados por facilitar o processo de importação.",
            },
            {
                title: 'O que Fazemos',
                description: "Oferecemos uma ampla gama de serviços especializados para atender todas as suas necessidades de importação. Nossos serviços incluem: Consultoria de Importação: Orientação especializada para ajudar você a entender e navegar pelas complexidades do comércio internacional. Gerenciamento de Logística: Coordenação eficiente do transporte e armazenamento de suas mercadorias. Desembaraço Aduaneiro: Suporte completo para garantir que suas importações cumpram todas as regulamentações e requisitos legais. Soluções Personalizadas: Desenvolvimento de estratégias sob medida para otimizar o processo de importação e atender às suas necessidades específicas. Nosso objetivo é tornar o processo de importação o mais fluido e livre de estresse possível para nossos clientes.",
            },
            {
                title: 'Por que Fazemos',
                description: "Acreditamos que o comércio internacional deve ser acessível e descomplicado para todos. Nosso compromisso é transformar o processo de importação em uma experiência simples e eficiente. Fazemos o que fazemos porque: Acessibilidade: Queremos que empresas de todos os tamanhos possam aproveitar as oportunidades globais sem enfrentar barreiras complexas. Experiência: Utilizamos nossa vasta experiência para fornecer soluções eficazes e reduzir os desafios do comércio internacional. Inovação: Buscamos constantemente novas formas de melhorar nossos serviços e oferecer o melhor suporte possível aos nossos clientes. Nosso propósito é ajudar você a alcançar seus objetivos de importação com confiança e eficiência.",
            },
            {
                title: 'F.A.Q.',
                submenu: [
                    {
                        title: "1. Qual é o seu diferencial?",
                        description: "Nossa equipe é formada por especialistas com vasta experiência no setor de importação. Oferecemos atendimento personalizado e soluções adaptadas às necessidades de cada cliente, garantindo que você receba o suporte mais adequado e eficiente possível."
                    },
                    {
                        title: "2. Como posso iniciar uma parceria com vocês?",
                        description: "Para iniciar uma parceria com o Importing Hub, entre em contato conosco através do nosso formulário de contato no site ou ligue para nosso número de atendimento. Nossa equipe está pronta para discutir suas necessidades e começar a trabalhar com você para alcançar seus objetivos de importação."
                    },
                    {
                        title: "3. Quais são os custos envolvidos nos seus serviços?",
                        description: "Os custos variam dependendo dos serviços que você necessita e da complexidade do seu projeto de importação. Entre em contato conosco para uma consulta gratuita, onde poderemos fornecer uma estimativa detalhada com base nas suas necessidades específicas."
                    },
                    {
                        title: "4. Vocês oferecem suporte para empresas de todos os tamanhos?",
                        description: "Sim, atendemos empresas de todos os tamanhos, desde pequenas startups até grandes corporações. Nossa missão é fornecer soluções adequadas a qualquer escala de operação."
                    }
                ]
            },
        ],
    };
}
