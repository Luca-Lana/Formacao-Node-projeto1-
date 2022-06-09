const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta');

//conexao com banco
connection.authenticate().then(() => {
    console.log('conexao feita');
}).catch((error) => {
    console.log(error);
})

//setando ejs como redenrizador de html
app.set('view engine', 'ejs');
//usar arquivos estaticos
app.use(express.static('public'));
//configurando biblioteca bodyParser para receber dados 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//perguntas 
app.get('/',(req, res) => {
    Pergunta.findAll({ raw: true, order: [ ['id','DESC'] ] })
    .then((perguntas) => {
        res.render('index.ejs',{ perguntas: perguntas });
    })
})

app.get('/perguntar', (req, res) => {
    res.render('perguntar.ejs');
})

app.post('/salvarpergunta', (req, res) => {
    let {titulo, descricao} = req.body;
    Pergunta.create({ titulo: titulo, descricao: descricao })
    .then(() => {
        res.redirect('/');
    })
})

app.get('/pergunta/:id', (req, res) => {
    let { id } = req.params;
    Pergunta.findOne({ where: { id: id } })
    .then((pergunta) => {  

        if(pergunta != undefined){
            Resposta.findAll({ where: { perguntaId: pergunta.id }, order: [ ['id','DESC'] ] })
            .then((respostas) => {
                res.render('pergunta.ejs', { pergunta: pergunta, respostas: respostas });
            })
        }else{
            res.redirect('/');
        }
    })
})

//respostas

app.post('/responder', (req, res) => {
    let {corpo, perguntaId} = req.body;
    Resposta.create({ corpo: corpo, perguntaId: perguntaId })
    .then(() => {
        res.redirect(`/pergunta/${perguntaId}`);
    })
})

app.listen(8080, () => {
    console.log('Server is running...');
})
