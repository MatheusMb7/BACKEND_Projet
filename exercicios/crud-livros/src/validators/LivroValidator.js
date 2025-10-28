const yup = require('yup')

const schemaNovoLivro = yup.object().shape(
    {
      titulo: yup.string()
      .min(5, 'nome invalido')
      .max(50, 'nome inválido')
      .required("campo nome é obrigatório!"),
      autor: yup.string()
      .length(11, 'CPF invalido')
      .matches(/{0 - 9}/, 'CPF inválido')
      .required('campo cpf é obrigatorio'),
      editora: yup.string().required("email é obrigatorio"),
      ano: yup.date().required('ano é obrigatorio'),
      preco: yup.string().required('preço é obrigatorio')
    }
)
// middleware de validação
async function validarNovoLivro(req, res, next) {
    try {
        await schemaNovoLivro.validate(req, body, {abortEarly: false})
        next(error) 
    }catch(error){
                return res.status(400).json({erros: error.errors})
            }
        }

// exporte middleware de validação
module.exports = {
    validarNovoLivro
}