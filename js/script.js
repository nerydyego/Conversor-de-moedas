function changeBackground(mouseOver){
    var converterBtn = document.getElementById('converterBtn')
    if(mouseOver){
        converterBtn.style.backgroundColor = '#8B0000';
    }else{
        converterBtn.style.backgroundColor = '';
    }
}
var select = document.querySelectorAll('.form-select'),
input_moeda = document.getElementById('input_moeda'),
output_moeda = document.getElementById('output_moeda');

const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then((data) => data.json())
  .then((data) => {
    const entries = Object.entries(data);
    const select1 = document.getElementById("moeda1");
    const select2 = document.getElementById("moeda2");
    console.log(entries)
    //alert(`10 GBP = ${data.rates.USD} USD`);
    for( i = 0; i < entries.length; i++){
        select1.innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}-${entries[i][1]}</option>`;
        select2.innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}-${entries[i][1]}</option>`;
    }
  });

  function converter(){
    var input_valor = document.getElementById('input_moeda').value;
    var select1Value = document.getElementById('moeda1').value;
    var select2Value = document.getElementById('moeda2').value;

    if(select1Value != select2Value){
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=${input_valor}&from=${select1Value.value}&to=${select2Value.value}`)
            .then((val) => val.json())
            .then((val) => {
            output_moeda.value = Object.values(val.rates)[0];
            //alert(`10 GBP = ${data.rates.USD} USD`);
        });

    }else{
        alert("Selecione valor de moeda diferente!")
    }
  }

