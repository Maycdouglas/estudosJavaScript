import express from "express"
import LivroController from "../controllers/livroController.js"

const routes = express.Router()

routes.get("/livros", LivroController.listarLivros)
routes.get("/livros/busca", LivroController.listarLivrosPorEditora)// deve ficar antes do livros/:id, pois senão confundirá.
routes.post("/livros",LivroController.cadastrarLivro)
routes.get("/livros/:id",LivroController.listarLivroPorId)
routes.put("/livros/:id",LivroController.atualizarLivro)
routes.delete("/livros/:id",LivroController.deletarLivro)
export default routes