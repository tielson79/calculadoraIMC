function Calcule(){
    var altura = parseInt(document.getElementById('altura').value);
    var peso = parseInt(document.getElementById('peso').value);
    var response = document.getElementById('imc');

   //  console.log(altura);
    imc=Peso/(altura*altura);

    if(imc <=18.5){
        imc = "Baixo Peso";
        response.style.color = "#00FF00";
     } 
     
     else if(imc > 18.5 && imc<= 24.99){
        imc = "Normal";
        response.style.color = "#F7FE2E";
     } 
     
     else if(imc >= 25 && imc <= 29.99){
        imc = "Sobrepeso";
        response.style.color = "#FE9A2E";
     } 
    
     else if(imc > 30){
        imc = "Obesidade";
        response.style.color = "#FF4000";
     } 

 
}
