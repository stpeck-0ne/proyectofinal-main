const { pool } = require('../db')

function createUsuario ({ correo, password, admin, nombre, domicilio, telefono }) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO usuarios (correo, password, admin, nombre, domicilio, telefono) VALUES (?, ?, ?, ?, ?, ?)'
    const values = [correo, password, admin, nombre, domicilio, telefono]
    pool.query(sql, values, (err, results) => {
      if (err) reject(err)
      resolve(results)
    })
  })
}

function readUsuario ({ correo, pw }) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM usuarios WHERE correo = ? and password = ?'
    const values = [correo, pw]
    pool.query(sql, values, (err, results) => {
      if (err) reject(err)
      resolve(results)
    })
  })
}

function readUsuarios () {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM usuarios'
    pool.query(sql, (err, results) => {
      if (err) reject(err)
      resolve(results)
    })
  })
}

function updateUsuario (idUsuario, { correo, password, admin, nombre, domicilio, telefono }) {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE usuarios SET correo = ?, password = ?, admin = ?, nombre = ?, domicilio = ?, telefono = ? WHERE id_usuario = ?'
    const values = [correo, password, admin, nombre, domicilio, telefono, idUsuario]
    pool.query(sql, values, (err, results) => {
      if (err) reject(err)
      resolve(results)
    })
  })
}

function deleteUsuario (idUsuario) {
  return new Promise((resolve, reject) => {
    const sql = 'DELETE FROM usuarios WHERE id_usuario = ?'
    const values = [idUsuario]
    pool.query(sql, values, (err, results) => {
      if (err) reject(err)
      resolve(results)
    })
  })
}

module.exports = {
  createUsuario,
  readUsuario,
  updateUsuario,
  deleteUsuario,
  readUsuarios
}
