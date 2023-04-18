const { pool } = require('../../services/db')

/**
 * @param {import('express').Request} req
 * @param {import('express').Responsee} res
 */
const getHistoy = (req, res) => {
  pool.query('select * from historial', (err, _res) => {
    if (err) return res.send({ message: err })
    return res.send(_res)
  })
}

module.exports = { getHistoy }
