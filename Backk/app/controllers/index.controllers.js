const { response } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'db_pesquisa',
    port: '5432'
});


const getClient = async (req, res) => {
    const response = await pool.query('select * from cliente');
    console.table(response.rows);
    //    res.send('users');
    res.status(200).json(response.rows);
}
const getPessoas = async (req, res) => {
    const response = await pool.query('select * from pessoas');
    console.table(response.rows);
    //    res.send('users');
    res.status(200).json(response.rows);
}
const getPesquisas = async (req, res) => {
    const response = await pool.query("select * from pesquisa where resposta=''");
    console.table(response.rows);
    //    res.send('users');
    res.status(200).json(response.rows);
}
const getPesquisaById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('select * from pesquisa where idcliente = $1', [id])
    res.json(response.rows)
}
const getPerguntas = async (req, res) => {
    const response = await pool.query('select * from pesquisa');
    console.table(response.rows);
    //    res.send('users');
    res.status(200).json(response.rows);
}




const cadastCliente = async (req, res) => {
    const { name, password } = req.body;
    await pool.query(`insert into Cliente (
        name,
        password
        ) values($1,$2)`, [name, password])
    //console.log(response)
    res.json({
        message: 'Cliente Cadastrado',
        body: {
            user: { name, password }
        }
    })
};
const cadastPergunta = async (req, res) => {
    const { idcliente } = req.params;
    const { datainicio, datafim, pergunta, resposta, pessoaresp } = req.body;
    await pool.query(`insert into pesquisa (
        datainicio,
        datafim,
        idcliente,
        pergunta,
        resposta,
        pessoaresp
        ) values($1,$2,$3,$4,$5,$6)`, [datainicio, datafim, idcliente, pergunta, resposta, pessoaresp])
    //console.log(response)
    res.json({
        message: 'Pergunta Cadastrada',
        body: {
            user: { datainicio, datafim, idcliente, pergunta, resposta, pessoaresp }
        }
    })
};
const cadastPessoa = async (req, res) => {
    //console.log("oiiiiii")
    const { cpf, email, name, rua, numerorua, bairro, cep, cidade, password } = req.body;
    await pool.query(`insert into pessoas (
        cpf,
        email,
        name,
        rua,
        numerorua,
        bairro,
        cep,
        cidade,
        password
        ) values($1,$2,$3,$4,$5,$6,$7,$8,$9)`, [cpf, email, name, rua, numerorua, bairro, cep, cidade, password])
    // console.log(response)
    res.json({
        message: 'Pessoa Cadastrada',
        body: {
            user: { cpf, email, name, rua, numerorua, bairro, cep, cidade, password }
        }
    })
};
const cadastTelefone = async (req, res) => {
    const { telefone, telfixo, pessoa } = req.body;
    await pool.query(`insert into pessoas_telefones (
        telefone,
        telfixo,pessoa
        ) values($1,$2,$3)`, [telefone, telfixo, pessoa])

    res.json({
        message: 'Telefone Cadastrado',
        body: {
            user: { telefone, telfixo, pessoa }
        }
    })
};




const updatePesquisa = async (req, res) => {
    const id = req.params.id
    const {
        datainicio, datafim
    } = req.body
    pool.query('update pesquisa set datainicio=$1, datafim=$2 where id =$3', [datainicio, datafim, id])
    res.json(`Pesquisa ${id} atualizada com Sucesso!`)
}
const updatePergunta = async (req, res) => {
    const id = req.params.idpergunta
    const {
        datainicio, datafim, pergunta
    } = req.body
    pool.query('update pesquisa set datainicio=$1, datafim=$2, pergunta=$3 where id =$4', [datainicio, datafim, pergunta, id])
    res.json(`Pergunta ${id} atualizada com Sucesso!`)
}
const updatePerguntaResp = async (req, res) => {
    const id = req.params.idpergunta
    const {
        resposta, pessoaresp
    } = req.body
    pool.query('update pesquisa set resposta=$1, pessoaresp=$2 where id =$3', [resposta, pessoaresp, id])
    res.json(`Pergunta ${id} atualizada com Sucesso!`)
}



const deletePesquisa = async (req, res) => {
    const id = req.params.id
    pool.query('delete from pesquisa where id = $1', [id])

    res.json(`Pesquisa ${id} deletada`)
}
module.exports = {
    getClient,
    getPerguntas,
    getPesquisaById,
    getPessoas,
    getPesquisas,
    cadastPessoa,
    cadastCliente,
    cadastPergunta,
    cadastTelefone,
    updatePesquisa,
    updatePergunta,
    updatePerguntaResp,
    deletePesquisa
}