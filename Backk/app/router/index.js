const { Router } = require('express')
const router = Router();

const { cadastPessoa,
    deletePesquisa,
    cadastCliente,
    getClient,
    getPesquisas,
    cadastPergunta,
    updatePerguntaResp,
    getPerguntas,
    updatePergunta,
    getPessoas,
    cadastTelefone,
    getPesquisaById } = require('../controllers/index.controllers')

router.post('/cadPessoa', cadastPessoa)
router.post('/cadClient', cadastCliente)
router.post('/cadPergunta/:idcliente', cadastPergunta)
router.post('/cadTelefone', cadastTelefone)


router.get('/pessoas', getPessoas)
router.get('/listClient', getClient)
router.get('/ListaPesquisasVazias', getPesquisas)
router.get('/listPerguntas', getPerguntas)

router.get('/pesquisaDo/:id', getPesquisaById)

router.delete('/pesquisa/:id', deletePesquisa)




router.put('/updatePergunta/:idpergunta', updatePergunta)
router.put('/updatePerguntaResp/:idpergunta', updatePerguntaResp)


module.exports = router;