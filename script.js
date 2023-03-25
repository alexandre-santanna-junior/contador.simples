function calcular(){
    const ini = Number(document.getElementById('inicio').value);
    const fim = Number(document.getElementById('fim').value);
    const passo = Number(document.getElementById('passo').value);
    if(ini == 0 || fim == 0 || passo == 0){
        alert(`ERRO: faltam dados`);
        document.querySelector('.res').innerHTML = `Impossivel contar`
    }
    else{
        document.querySelector('.res').innerHTML = `Contando: <br>`
    
        if(ini<fim){
            for(let c = ini; c <= fim; c += passo){
            document.querySelector('.res').innerHTML += ` ${c}  `;
            }
        }
        else{
            for(let c = ini; c >= fim; c -= passo){
                document.querySelector('.res').innerHTML += ` ${c}  `;
            }
        }
    }
}