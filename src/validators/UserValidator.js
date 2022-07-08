const userValidator = {
  storeValidator: (req, res, next) => {
    const { nome, email, idade, sobrenome } = req.body;
    console.log("entrei no validador");

    if (!nome || !email || !idade || !sobrenome) {
      return res.render("user-create", {
        title: "Cadastrar usuário",
        error: {
          message: "Preencha todos os campos!",
        },
      });
    }
    next();
  },
};
module.exports = userValidator;
