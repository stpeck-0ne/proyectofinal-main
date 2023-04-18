const { pool } = require('../../services/db')

/**
 * @param {import('express').Request} req
 * @param {import('express').Responsee} res
 */
const postHistoryAdd = (req, res) => {
  const { user, productos } = req.body

  if (!user || !productos) return res.status(404).send({ message: 'No hay productos we' })

  pool.query('insert into historial (user, productos) values (?,?)', [user, productos], (err, _res) => {
    if (err) return res.send({ message: err })
    return res.send({ message: _res })
  })
}

module.exports = { postHistoryAdd }
