function tmbResult(){
    var getPeso = document.getElementById('peso')
    var getAltura = document.getElementById('altura')
    var getIdade = document.getElementById('idade')
    var getResult = document.getElementById('resultado')

    var getMale = document.getElementById('male')
    var getFemale = document.getElementById('female')

    var n1 = Number(getPeso.value)
    var n2 = Number(getAltura.value)
    var n3 = Number(getIdade.value)

    if (getMale.checked){//esse checked é especial para escolher entre uma opção ou outra
        var tmbM = 66 + (13.8 * n1) + (5 * n2) - (6.8 * n3)
        getResult.innerHTML = `Sua Taxa de Metabolismo Basal é aproximadamente <strong>${tmbM}</strong> Kcal`;
    } else if (getFemale.checked) {
        var tmbF = 655 + (9.6 * n1) + (1.8 * n2) - (4.7 * n3)
        getResult.innerHTML = `Sua Taxa de Metabolismo Basal é aproximadamente <strong>${tmbF}</strong> Kcal`;
    } else {
        alert('Selecione uma opção para sexo');
    }   
}





























/*Backup caso de merda

function tmbResult(){
    var getPeso = document.getElementById('peso')
    var getAltura = document.getElementById('altura')
    var getIdade = document.getElementById('idade')
    var getResult = document.getElementById('resultado')

    var getMale = document.getElementById('male')
    var getFemale = document.getElementById('female')

    var n1 = Number(getPeso.value)
    var n2 = Number(getAltura.value)
    var n3 = Number(getIdade.value)

    if (v)    
    var tmbM = 66 + (13.8 * n1) + (5 * n2) - (6.8 * n3)
    getResult.innerHTML = `Sua Taxa de Metabolismo Basal é aproximadamente <strong>${tmbM}</strong>`;*/
//formula feminina - terei que colocar um IF para separar masculino e feminino
/* var tmbF = 655 + (9.6 * n1) + (1.8 * n2) - (4.7 * n3)
    getResult.innerHTML = `Sua Taxa de Metabolismo Basal é aproximadamente <strong>${tmbF}</strong>`;
*/


