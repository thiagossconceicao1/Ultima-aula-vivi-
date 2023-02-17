import { Router } from "express";
import {Request, Response} from "express"
import * as usuarioController from '../controllers/usuarioController'

const router = Router()

router.get('/',(req:Request, res:Response) =>{
    res.send("SERVIDOR RODANDO 8D")
})

router.get('/usuarios',usuarioController.index)

//pagina de visualização 
router.get('/cadastro',usuarioController.VisualizaPaginaCadastro)

//pagina de envio de dados
router.post('/cadastro',usuarioController.cadastroUsuario)

router.get ('/Editar/:id',usuarioController.editaUsuario)

router.post('/Editar/:id',usuarioController.atualizaUsuario)

router.get('/excluir/:id',usuarioController.deletaUsuario)

export default router

