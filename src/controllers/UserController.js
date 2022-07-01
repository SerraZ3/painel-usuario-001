const users = [
  {
    id: 1,
    nome: "Roberto",
    sobrenome: "Silva",
    email: "robertinho123@email.com",
    idade: 27,
    avatar: "https://i.pravatar.cc/300?img=70",
  },
  {
    id: 2,
    nome: "Ana",
    sobrenome: "Monteiro",
    email: "aninha123@email.com",
    idade: 22,
    avatar: "https://i.pravatar.cc/300?img=49",
  },
  {
    id: 3,
    nome: "Juliana",
    sobrenome: "Rios",
    email: "ju123@email.com",
    idade: 18,
    avatar: "https://i.pravatar.cc/300?img=48",
  },
  {
    id: 4,
    nome: "João",
    sobrenome: "Oliveira",
    email: "joaozinho123@email.com",
    idade: 45,
    avatar: "https://i.pravatar.cc/300?img=33",
  },
  {
    id: 5,
    nome: "Roberto",
    sobrenome: "Carlos",
    email: "robertinho123@email.com",
    idade: 70,
    avatar: "https://i.pravatar.cc/300?img=17",
  },
  {
    id: 6,
    nome: "Pedro",
    sobrenome: "Santos",
    email: "pedrinho123@email.com",
    idade: 20,
    avatar: "https://i.pravatar.cc/300?img=18",
  },
  {
    id: 7,
    nome: "Lucas",
    sobrenome: "Morais",
    email: "luquinhas123@email.com",
    idade: 30,
    avatar: "https://i.pravatar.cc/300?img=14",
  },
  {
    id: 8,
    nome: "Hélder",
    sobrenome: "Santos",
    email: "helder123@email.com",
    idade: 25,
    avatar: "https://i.pravatar.cc/300?img=6",
  },
  {
    id: 9,
    nome: "Marcos",
    sobrenome: "Souza",
    email: "marquinhos123@email.com",
    idade: 40,
    avatar: "https://i.pravatar.cc/300?img=3",
  },
];

const userController = {
  index: (req, res) => {
    return res.render("users", { title: "Lista de usuários", users });
  },
  show: (req, res) => {
    // Pega o parametro que vem da url, ou seja, na url a baixo, pegaria o valor 4
    // localhost:3000/user/4
    // id = 4
    const { id } = req.params;
    const userResult = users.find((user) => user.id === parseInt(id));
    // const userResult = users.find((user) => user.id.toString() === id);
    if (!userResult) {
      return res.render("error", {
        title: "Ops!",
        message: "Usuário não encontrado",
      });
    }
    return res.render("user", {
      title: "Visualizar usuário",
      user: userResult,
    });
  },
  create: (req, res) => {
    return res.render("user-create", { title: "Cadastrar usuário" });
  },
  store: (req, res) => {
    const { nome, sobrenome, idade, email, avatar } = req.body;
    if (!nome || !sobrenome || !idade || !email || !avatar) {
      return res.render("user-create", {
        title: "Cadastrar usuário",
        error: {
          message: "Preencha todos os campos!",
        },
      });
    }
    const newUser = {
      id: users.length + 1,
      nome,
      sobrenome,
      idade,
      email,
      avatar: `https://i.pravatar.cc/300?img=${avatar}`,
    };
    users.push(newUser);
    return res.render("success", {
      title: "Sucesso!",
      message: "Usuário criado com sucesso!",
    });
  },
  edit: (req, res) => {
    const { id } = req.params;
    const userResult = users.find((user) => user.id === parseInt(id));
    // const userResult = users.find((user) => user.id.toString() === id);
    if (!userResult) {
      return res.render("error", {
        title: "Ops!",
        message: "Nenhum usuário encontrado",
      });
    }
    return res.render("user-edit", {
      title: "Editar usuário",
      user: userResult,
    });
  },
  update: (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, idade, email, avatar } = req.body;
    const userResult = users.find((user) => user.id === parseInt(id));
    // const userResult = users.find((user) => user.id.toString() === id);
    if (!userResult) {
      return res.render("error", {
        title: "Ops!",
        message: "Nenhum usuário encontrado",
      });
    }
    const updateUser = userResult;
    if (nome) updateUser.nome = nome;
    if (sobrenome) updateUser.sobrenome = sobrenome;
    if (email) updateUser.email = email;
    if (idade) updateUser.idade = idade;
    if (avatar) updateUser.avatar = `https://i.pravatar.cc/300?img=${avatar}`;
    return res.render("success", {
      title: "Usuário atualizado",
      message: `Usuário ${updateUser.nome} foi atualizado`,
    });
  },
  delete: (req, res) => {
    const { id } = req.params;
    const userResult = users.find((user) => user.id === parseInt(id));
    // const userResult = users.find((user) => user.id.toString() === id);
    if (!userResult) {
      return res.render("error", {
        title: "Ops!",
        message: "Nenhum usuário encontrado",
      });
    }
    return res.render("user-delete", {
      title: "Deletar usuário",
      user: userResult,
    });
  },
  destroy: (req, res) => {
    const { id } = req.params;
    const result = users.findIndex((user) => user.id === parseInt(id));
    if (result === -1) {
      return res.render("error", {
        title: "Ops!",
        message: "Nenhum usuário encontrado",
      });
    }
    
    users.splice(result, 1);
    return res.render("success", {
      title: "Usuário deletado",
      message: "Usuário deletado com sucesso!",
    });
  },
};

module.exports = userController;
