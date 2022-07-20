function calcular() {


    let adulto = Number(document.getElementById('qtadulto').value);
    let crianca = Number(document.getElementById('qtcrianca').value);
    let duracao = Number(document.getElementById('duracao').value);
    let res = document.getElementById('res');
    
    function totalhr(duracao) {
        if (duracao <= 4){
            return 0.4;
        } else {
            let carnead = 0.4 + (0.05 * (duracao - 4)); 
            return carnead
        }
    }
    function totalcerv(duracao) {
        if (duracao <= 4){
            return 3;
        } else {
            let cervejaad = 3 + (duracao - 4); 
            return cervejaad
        }
    }
    function totalbebida(duracao) {
        if (duracao <= 4){
            return 0.08;
        } else {
            let bebidaad = 0.08 + (0.05 *(duracao - 4)); 
            return bebidaad
        }
    }



    let qtcarne = (adulto * totalhr(duracao)) + (crianca * (totalhr(duracao)/2))
    let qtcerveja = (adulto * totalcerv(duracao))
    let qtbebida = (adulto * totalbebida(duracao)) + (crianca * (totalbebida(duracao)/2))


    
    res.innerHTML = `<p>Quantidade de carne: ${Math.ceil(qtcarne)} kg.`;
    res.innerHTML += `<p>Quantidade de cerveja: ${qtcerveja} latas.`;
    res.innerHTML += `<p>Quantidade de refrigerante(Garrafas de 2 litros): ${Math.ceil(qtbebida)}.`;
    


}
