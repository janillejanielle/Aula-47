class ErroLogin extends Error {

    constructor(name, message){

        super(message)

        this.name = name 
    }
}

try {

    let email = "cassiano@dio.me"
    let senha = "123456"

    let emailSistema = "cassiano@dio.me"
    let senhaSistema = "123456"

    if (senha == senhaDoSistema && email == emailSistema) {

        console.log("Acesso autorizado")

    }else {

        let erroLogin = new erroLogin("ErroLogin","Credenciais do usuário estão incorretas")

        throw erroLogin
    }


} catch (erro) {

    console.log(erro.name)
    console.log(erro.message)
}