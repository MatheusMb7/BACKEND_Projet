const yup = require('yup')
const mongoose = require('mongoose')

const schema = yup.object().shape(
  {
    nome: yup.string().required("nome é obrigatório"),
    cpf: yup.string().required("cpf é obrigatório"),
    dataNascimento: yup.date().required("dataNascimento é obrigatório"),
    dataContratacao: yup.date().required("dataContratacao é obrigatório"),

  }
)

async function validarProjeto(req, res, next) {
  try {
    await schema.validate(req.body, { abortEarly: false })
    next()
  } catch (error) {
    return res.status(400).json({ erros: error.errors })
  }
}

module.exports = { validarProjeto }