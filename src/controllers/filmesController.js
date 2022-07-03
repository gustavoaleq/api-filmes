import filmes from "../models/Filmes.js";

class FilmeController {
    
    static listarFilmes = (req, res) => {
            filmes.find((err, filmes) => {
            res.status(200).json(filmes)
    })
}

    static listarFilmesPorId = (req, res) => {
        const id = req.params.id

        filmes.findById(id).exec((err, filmes) => {
            if (err) {
                res.status(400).send({message: `${err.message} - Id do filme não localizado.`})
            } else {
                res.status(200).send(filmes)
            }
        })
    }

    static cadastrarFilme = (req, res) => {
        let filme = new filmes(req.body);
        filme.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar filme.`})
            } else {
                res.status(201).send(filme.toJSON())
            }
        })
    }

    static excluirFilme = (req, res) => {
        const id = req.params.id;

        filmes.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: 'Livro removido com sucesso'})}
        })
    }

    static atualizarFilme = (req, res) => {
        const id = req.params.id

        filmes.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            }
        })
    }
}

export default FilmeController