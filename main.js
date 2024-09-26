var titulo = document.querySelector('.titulo');
titulo.textContent = "Ana Nutrição";

var paciente = document.querySelector('#primeiro-paciente');
var tdPeso = paciente.querySelector('.info-peso');
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;

var tdIMC = paciente.querySelector('.info-imc');
var imc = peso / (altura * altura);
tdIMC.textContent = imc;

if (peso <= 0){
  tdPeso.textContent = "Peso inválido";
}