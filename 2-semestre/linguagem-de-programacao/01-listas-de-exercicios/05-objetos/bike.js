

let vetor = []
for(let i = 0; i < 10; i++) {
    let objeto  = {
        marca: prompt("Informe a marca da bike").toLocaleUpperCase(),
        modelo: prompt("Informe o modelo da bike"),
        quadro: parseInt(prompt("Informe o tamanho do quadro da bike")),
        aro: parseInt(prompt("Informe o tamanho do aro da bike")),
        ano: parseInt(prompt("Informe o ano da bike")),
        preco: parseFloat(prompt("Informe o preço da bike"))
    }
    vetor.push(objeto)
}    

let mediaPreco = 0
//Media de preço das bikes
for(let i = 0; i < 10; i++) {
    mediaPreco += vetor[i].preco
}
mediaPreco/vetor.length

//Bike mais antiga
let maisAntiga = []
maisAntiga[0] = vetor[0] // atribui todo o objeto
for(let i=1;i<3;i++){
    if (vetor[i].ano < maisAntiga[0].ano){
        maisAntiga = [] //   o vetor
        maisAntiga[0] = vetor[i]
    }
    else if (vetor[i].ano == maisAntiga[0].ano){
        maisAntiga.push(vetor[i]) // mais uma com o mesmo ano
    }
}

//quais as bikes são do marca Caloi
let qntdCaloi = []
for(let i =0;i<10;i++){
    if(vetor[i].marca === "CALOI"){
        qntdCaloi.push(vetor[i])
    }
}

//Quantas bikes possuem aro 29
let contAro = 0
for(let i =0;i<10;i++){
    if(vetor[i].aro === 29){
        contAro++
    }
}

let maiorQuadro = vetor[0]
for(let i=1;i<vetor.length;i++){
    if (vetor[i].quadro > maiorQuadro.quadro){
        maiorQuadro = vetor[i]
    }
}

