const express = require('express')
const router = express.Router()
const { getProductos } = require('../controllers/get/getProductos')
const { postProducto } = require('../controllers/post/postProducto')
const { updateProducto } = require('../controllers/post/updateProducto')
const { createUsuarioHandler, readUsuarioHandler, readUsuariosHandler, updateUsuarioHandler, deleteUsuarioHandler } = require('../controllers/get/userHandler')
const { postHistoryAdd } = require('../controllers/post/postHistoryAdd')
const { getHistoy } = require('../controllers/get/getHistoy')

router
  .get('/productos', getProductos)
  .post('/producto', postProducto)
  .put('/producto', updateProducto)
  .post('/usuarios', createUsuarioHandler)
  .post('/usuario', readUsuarioHandler)
  .get('/usuarios', readUsuariosHandler)
  .put('/usuarios/:idUsuario', updateUsuarioHandler)
  .delete('/usuarios/:idUsuario', deleteUsuarioHandler)
  .post('/reg/producto', postHistoryAdd)
  .get('/history', getHistoy)

module.exports = { router }
