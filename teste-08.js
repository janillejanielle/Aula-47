let cpf = "11111111115"

try {

    if (cpf.length != 11) {

        let erroCPF = {
            "name": "CPFTamanhoInválido",
            "message": "Tamanho inválido! O tamanho do CPF deve ser igual a 11"
        }

        throw erroCPF

    }else {
        console.log("O tamanho do CPF é válido")
    }

} catch (erro) {
    console.log(erro)
}