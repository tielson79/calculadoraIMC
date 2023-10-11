<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Calculadora de IMC</title>
  </head>
  <body>
    <main>
      <h2>Calculadora de IMC</h2>

    <label for="altura">altura:</label>
     <input type="text" name="altura" id="altura"><br><br>

     <label for="peso">peso:</label>
     <input type="text" name="peso" id="peso"><br><br>

     <button type="imc" id="imc" Onclick = "Calcule()">Calcule</button>

     <p id="imc"></p>
     
     <br><br>

  </body>
</html>
