const yup = require('yup')
const mongoose = require('mongoose')

const schema = yup.object().shape(
  {
    titulo: yup.string().required("nome é obrigatório"),
    descricao: yup.string().required("descrição é obrigatório"),
    dataInicio: yup.date().required("data de inicio é obrigatório"),
    dataFim: yup.date().required("data de fim é obrigatório"),
    funcionario: yup.string().required("funcionario é obrigatório")
      .test(
        'id-validator',
        'ID do cargo é inválido',
        value => mongoose.Types.ObjectId.isValid(value)
      ),
    projeto: yup.string().required("projeto é obrigatório")
      .test(
        'id-validator',
        'ID do departamento é inválido',
        value => mongoose.Types.ObjectId.isValid(value)
      ),
  }
)

async function validarTarefa(req, res, next) {
  try {
    await schema.validate(req.body, { abortEarly: false })
    next()
  } catch (error) {
    return res.status(400).json({ erros: error.errors })
  }
}

module.exports = { validarTarefa }