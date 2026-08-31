 <script>
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
    id: "exemplo-001",
    ano: "6",
    trimestre: 1,
    aula: 1,
    titulo: "Apresentação de exemplo",
    descricao: "Aula de exemplo do painel. Substitua este registro pelas aulas do seu projeto, seguindo o modelo descrito no topo deste arquivo.",
    tipo: "arquivo",
    link: "aulas/exemplo-aula01.html"
  },   {
    id: "aula-9t3n3-1788174439224",
    ano: "9",
    trimestre: 3,
    aula: 3,
    titulo: "Esportes de Campo e Taco - Práticas de Aventura na Natureza",
    descricao: "Esportes de Campo e Taco
Práticas de Aventura na Natureza",
    tipo: "link",
    link: "https://brunodiasef.github.io/9ano/"
  }
  /* ADICIONE NOVAS AULAS ACIMA DESTA LINHA, separando por vírgula */
];


              </script>
                        </body>
                        </html>
                    
