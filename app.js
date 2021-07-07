const express = require('express');
const app = express();
const { Op } = require('sequelize');

const Lancamentos = require('./models/Lancamentos');

//informando o formanto de dados que iremos receber
app.use(express.json())

app.get('/listar/:mes/:ano', async (req, res)=>{
    //forço a convenção da STRING para um tipo INTEIRO
    const mes = new Number(req.params.mes)
    const ano  = new Number(req.params.ano)

    // console.log(`Mes: ${mes} / Ano: ${ ano }`)
    const date = new Date(ano + "-" + mes);
    const primeiroDia = new Date(date.getFullYear(), date.getMonth(),1)
    //month inicia em 0 - logo jan = 0 + 1, para nós usuarios entendermos
    // usamos zero para apontar ultimo dia do mes
    const ultimoDia = new Date(date.getFullYear(), date.getMonth()+1,0)

    // console.log(`Primeiro dia do mes: ${primeiroDia}`)
    // console.log(`Ultimo dia do mes: ${ultimoDia}`)
//atribuo os valores recebidos a um constante 
    const lancamentos = await Lancamentos.findAll({
        order: [['dataPagamento', 'ASC']],
        where: {
            "dataPagamento": {
                [Op.between]: [primeiroDia, ultimoDia]
            }
        }
    });

    //retornando o total de pagamentos realizados
    const valorPagamento = await Lancamentos.sum('valor', {
        where: {
            tipo: '1',
            "dataPagamento":{
                [Op.between]: [primeiroDia, ultimoDia]
            }
        }
    })

       //retornando o total de pagamentos realizados
       const valorReceitas = await Lancamentos.sum('valor', {
        where: {
            tipo: '2',
            "dataPagamento":{
                [Op.between]: [primeiroDia, ultimoDia]
            }
        }
    })

    const saldo= new Number(valorReceitas) - new Number(valorPagamento)

    return res.json({
                error: false,
                lancamentos,
                valorPagamento,
                valorReceitas,
                saldo
            })

})

app.post('/cadastrar', async (req, res)=>{
    //  Para salvar no banco de dados 
    await Lancamentos.create(req.body).then(function(){
        //para para a execução e informar o sucesso do cadastro
        return res.json({
            error: false, 
            mensagem: "Lançamento cadastrado com sucesso"
        })
    }).catch(function(){
        return res.status(400).json({
            error: true,
            mensagem: "Lançamento não cadastrado com sucesso!"
        })
    })
})

app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
})