const yup = require('yup')

const schemaNovaPessoa = yup.object().shape(
    {
      nome: yup.string()
      .min(5, 'nome invalido')
      .max(50, 'nome inválido')
      .required("campo nome é obrigatório!"),
      cpf: yup.string()
      .length(11, 'CPF invalido')
      .matches(/{0 - 9}/, 'CPF inválido')
      .required('campo cpf é obrigatorio'),
      email: yup.string().email('email invalido').required("email é obrigatorio"),
      dataNascimento: yup.date().required('dataNascimento é obrigatorio'),
      telefone: yup.string().required('telefone é obrigatorio'),
      genero: yup.string().required('obrigatorio')
    }
)
// middleware de validação
async function validarNovaPessoa(req, res, next) {
    try {
        await schemaNovaPessoa.validate(req, body, {abortEarly: false})
        next(error) 
    }catch(error){
                return res.status(400).json({erros: error.errors})
            }
        }

// exporte middleware de validação
module.exports = {
    validarNovaPessoa
}