const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.get("/", (req, res) => {
res.json({ mensagem: "API funcionando no Render ■", hora: new Date().toISOString() });
});
app.get("/alunos", (req, res) => {
res.json([
{ nome: "Ana", nota: 8 },
{ nome: "Bruno", nota: 7 }
]);
});
app.listen(PORT, () => console.log(`Servidor ouvindo na porta ${PORT}`));
