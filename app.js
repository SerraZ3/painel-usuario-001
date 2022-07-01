const express = require("express");
const app = express();
const port = 3000;
// Importa pacote method-override
// Serve para alterar método da requisição
// Ex: Post vira put, get vira delete, get vira put...
const methodOverride = require("method-override");
const indexRoute = require("./src/routes/indexRoute");
const userRoute = require("./src/routes/userRoute");

// Configura pasta estática para acesso externo
app.use(express.static(__dirname + "/public"));
// Configura o template engine, troca do padrão (jade) para ejs
app.set("view engine", "ejs");
// Configura o caminho para os views, troca o padrão que é no raiz para o src
app.set("views", __dirname + "/src/views");

// Configura o methodOverride no express
app.use(methodOverride("_method"));
// Converter corpo da requisição (body) em objeto literal
app.use(express.json());
// Converte requisição para formato que o json aceita
app.use(express.urlencoded({ extended: false }));

// localhost:3000/
app.use("/", indexRoute);
// localhost:3000/user/
app.use("/user", userRoute);
// localhost:3000/category/

app.listen(port, () => {
  console.log("Estamos rodando na porta" + port);
});
