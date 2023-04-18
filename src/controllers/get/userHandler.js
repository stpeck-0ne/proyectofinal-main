const { createUsuario, deleteUsuario, readUsuario, updateUsuario, readUsuarios } = require('../../services/func/users')

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const createUsuarioHandler = (req, res) => {
  const { correo, password, admin, nombre, domicilio, telefono } = req.body

  if (!correo && !password && !admin && !nombre && !domicilio && !telefono) {
    res.status(403).send({ type: 'error', message: 'Datos invalidos' })
  }

  createUsuario({ correo, password, admin, nombre, domicilio, telefono })
    .then((r) => res.status(200).send({ type: 'sucess', r }))
    .catch((e) => res.status(500).send({ type: 'error', e }))
}

const readUsuarioHandler = (req, res) => {
  const { correo, pw } = req.body

  if (!correo || !pw) {
    return res.status(500).send({ type: 'error', message: 'Faltaron datos we' })
  }

  readUsuario({ correo, pw })
    .then((r) => {
      if (!r[0]) {
        return res.status(500).send({ type: 'error', message: 'Datos invalidos' })
      }
      res.status(200).send({ type: 'success', r })
    })
    .catch((e) => res.status(500).send({ type: 'error', e }))
}

const readUsuariosHandler = (req, res) => {
  readUsuarios()
    .then((r) => res.status(200).send({ type: 'success', r }))
    .catch((e) => res.status(500).send({ type: 'error', e }))
}

const updateUsuarioHandler = (req, res) => {
  const { idUsuario } = req.params
  const { correo, password, admin, nombre, domicilio, telefono } = req.body

  updateUsuario(idUsuario, { correo, password, admin, nombre, domicilio, telefono })
    .then((r) => res.status(200).send({ type: 'success', r }))
    .catch((e) => res.status(500).send({ type: 'error', e }))
}

const deleteUsuarioHandler = (req, res) => {
  const { idUsuario } = req.params

  deleteUsuario(idUsuario)
    .then((r) => res.status(200).send({ type: 'success', r }))
    .catch((e) => res.status(500).send({ type: 'error', e }))
}

module.exports = {
  createUsuarioHandler,
  readUsuarioHandler,
  readUsuariosHandler,
  deleteUsuarioHandler,
  updateUsuarioHandler
}
