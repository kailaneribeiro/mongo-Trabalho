const express = require("express")
const mongoose = require("mogoose")


const app = express()
app.use(express.json())


mongoose.conect("mongodb://locallhost:27017/livraria").then(()=>console.log("Conectado ao MogoDB")).catch((erro)=> console.error("Erro ao conectar ao MongoDB:", erro))


const port = 3000
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})


async function criarEstudante(nome, matricula, curso, ano){
    try{
        const novoEstudante = new Estudante({nome, matricula, curso, ano})
        return await novoEstudante.save()
    } catch (erro){
        console.error("Error ao criar:", erro)
        throw erro
    }
}

app.post("/livros ", async (req, res) =>{
    const {nome, matricula, curso, ano} = req.body
    const novoEstudante = await criar
})