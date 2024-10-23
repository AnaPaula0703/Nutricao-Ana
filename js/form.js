var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();
  
  var form = document.querySelector("#form-adiciona");
  
  //Extraindo os dados digitados no formulário
  
  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;
  
 //Criando a linha e as células da tabela do novo paciente 
  var pacienteTr = document.createElement("tr");
  
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");
  
  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent = calculaImc(peso, altura);
  
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);
  
  //Aqui adicionamos a linha com todos os seus dados na tabela do "HTML";
  var tabela = document.querySelector("#tabela-pacientes");
  
  tabela.appendChild(pacienteTr);
});