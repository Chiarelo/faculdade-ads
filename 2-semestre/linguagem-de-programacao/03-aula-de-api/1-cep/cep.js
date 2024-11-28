//função deve ser assincrona pois tem uma chamada assincrona dentro dela

async function api(){
    let cep = Number(document.getElementById("cep").value)
    //vamos chamar a api usando a função fetch do JS
    //await é sincrono, pos teremos que aguardar a resposta para continuar
    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    //os dados chegaram no formato string, vamos converter em JSON
    let dados = await resposta.json()
    //colca o logradouro no formulario
    document.getElementById('logradouro').value = dados.logradouro
}