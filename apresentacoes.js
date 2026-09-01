                              /* ============================================================
   ARQUIVO 2 de 2: apresentacoes.js
   Este arquivo fica na RAIZ do repositório, ao lado do index.html.
   Ele é a fonte de dados do painel: toda aula cadastrada aqui
   aparece no dashboard em QUALQUER dispositivo.

   ESTRUTURA DO REPOSITÓRIO:
     index.html          → o dashboard
     apresentacoes.js    → este arquivo (cadastro das aulas)
     aulas/              → pasta com o arquivo HTML de cada aula

   COMO CADASTRAR UMA NOVA AULA:
   1. Envie o arquivo HTML da aula para a pasta "aulas/" no GitHub.
   2. Edite este arquivo no GitHub (ícone do lápis).
   3. Copie o modelo abaixo, preencha os campos e cole dentro da
      lista, antes do "];". Se já houver outra aula, coloque uma
      vírgula depois do "}" da aula anterior.
   4. Clique em "Commit changes". Pronto.

   MODELO:
   {
     id: "aula-6t1n1",
     ano: "6",                          // "6", "7", "8" ou "9"
     trimestre: 1,                      // 1, 2 ou 3
     aula: 1,                           // número da aula (1 a 12)
     titulo: "Título da aula",
     descricao: "Breve descrição do conteúdo.",
     tipo: "arquivo",                   // "arquivo" (pasta aulas/) ou "link"
     link: "aulas/nome-do-arquivo.html"
   }
   ============================================================ */

window.APRESENTACOES = [
  {
    id: "aula-9t3n3-1788174439224",
    ano: "9",
    trimestre: 3,
    aula: 10,
    titulo: "Esportes de Campo e Taco - Práticas de Aventura na Natureza",
    descricao: "Esportes de Campo e Taco - Práticas de Aventura na Natureza",
    tipo: "link",
    link: "https://brunodiasef.github.io/9ano/"
  },
  {
    id: "aula-8t3n3-1788175593417",
    ano: "8",
    trimestre: 3,
    aula: 3,
    titulo: "Dança de salão e Lutas pelo mundo",
    descricao: "Dança de salão e Lutas pelo mundo",
    tipo: "link",
    link: "https://brunodiasef.github.io/8ano/"
  },
  {
    id: "aula-7t3n1-1788175761978",
    ano: "7",
    trimestre: 3,
    aula: 8,
    titulo: "Jogos Eletrônicos + Danças Urbanas + Práticas de Aventura",
    descricao: "Jogos Eletrônicos + Danças Urbanas + Práticas de Aventura",
    tipo: "link",
    link: "https://brunodiasef.github.io/7ano/"
  },
  {
    id: "aula-9t3n2-1788180316503",
    ano: "9",
    trimestre: 3,
    aula: 2,
    titulo: "MATERIAL DE APOIO",
    descricao: "Material com conte[udo e lista de exerc[icios, para passar na sala de aula",
    tipo: "arquivo",
    link: "aula/3ºtri/9ºano/CONTEÚDO 9º ANO - 3º TRIMESTRE.pdf"
  },
  {
    id: "aula-8t3n2-1788184891015",
    ano: "8",
    trimestre: 3,
    aula: 2,
    titulo: "MATERIAL DE APOIO",
    descricao: "Material com conte[udo e lista de exerc[icios, para passar na sala de aula",
    tipo: "arquivo",
    link: "aula/3ºtri/8ºano/conteúdo 8º ano - 3º trimestre.pdf"
  },
  {
    id: "aula-6t3n8-1788191505836",
    ano: "6",
    trimestre: 3,
    aula: 8,
    titulo: "Jogos Eletrônicos + Danças Urbanas + Práticas de Aventura",
    descricao: "",
    tipo: "link",
    link: "https://brunodiasef.github.io/6ANO/"
  },
  {
    id: "aula-6t3n2-1788191590738",
    ano: "6",
    trimestre: 3,
    aula: 2,
    titulo: "MATERIAL DE APOIO",
    descricao: "Material com conte[udo e lista de exerc[icios, para passar na sala de aula",
    tipo: "arquivo",
    link: "aula/3ºtri/6ºano/Conteúdo 6º ano - 3º trimestre.pdf"
  },
  {
    id: "aula-7t3n2-1788191851575",
    ano: "7",
    trimestre: 3,
    aula: 2,
    titulo: "MATERIAL DE APOIO",
    descricao: "Material com conte[udo e lista de exerc[icios, para passar na sala de aula",
    tipo: "arquivo",
    link: "aula/3ºtri/7ºano/Conteúdo 7º ano - 3º trimestre.pdf"
  },
  {
    id: "aula-9t2n10-1788230926989",
    ano: "9",
    trimestre: 2,
    aula: 10,
    titulo: "Dança de Salão-Ginástica de Conscientização Corporal-Ginástica de Condicionamento Físico",
    descricao: "Material com conte[udo e lista de exerc[icios, para passar na sala de aula",
    tipo: "arquivo",
    link: "aula/2ºtri/9ºano/2tri.html"
  },{
    id: "aula-8t2n8-1788230800708",
    ano: "8",
    trimestre: 2,
    aula: 8,
    titulo: "Ginástica de condicionamento físico e consciêntização corporal",
    descricao: "Material com conte[udo e lista de exerc[icios, para passar na sala de aula",
    tipo: "arquivo",
    link: "aula/2ºtri/8ºano/2tri.html"
  }
  /* ADICIONE NOVAS AULAS ACIMA DESTA LINHA, separando por vírgula */
];

