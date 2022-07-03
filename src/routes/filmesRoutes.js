import express from "express";
import FilmeController from "../controllers/FilmesController.js";

const router = express.Router()

router
    .get('/filmes', FilmeController.listarFilmes)
    .get('/filmes/:id', FilmeController.listarFilmesPorId)
    .post('/filmes', FilmeController.cadastrarFilme)
    .delete('/filmes/:id', FilmeController.excluirFilme)
    .put('/filmes/:id', FilmeController.atualizarFilme)

export default router;
