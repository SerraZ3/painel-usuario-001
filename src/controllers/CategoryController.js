// ATIVIDADE
// Reproduzir o que foi feito para o usuário na parte de categorias
// - Configurar rota
// - Configurar controladores
// - Criar views

// category
// categories
const categories = [
  {
    id: 1,
    nome: "Bebidas",
    descricao: "Tudo aquilo que se pode beber",
    codigo: "AF4E2A",
    imagem: "https://random.imagecdn.app/300/300",
  },
  {
    id: 2,
    nome: "Comida",
    descricao: "Tudo aquilo que se pode comer",
    codigo: "AF4E2B",
    imagem: "https://random.imagecdn.app/300/300",
  },
];
const categoryController = {
  index: (req, res) => {},
  show: (req, res) => {},
  create: (req, res) => {},
  store: (req, res) => {},
  edit: (req, res) => {},
  update: (req, res) => {},
  delete: (req, res) => {},
  destroy: (req, res) => {},
};

module.exports = categoryController;
