

  //let resp = document.getElementById(resp)
  //let borrar = document.getElementById(borrar);
  //borrar.addeventlistener("click",clickBorrar);
  let calcular = document.getElementById("calcular");
  calcular.addEventListener("click",clickCalcular);


  function saludo(event){
    console.log(event);
  }

  function clickCalcular() {
    let m=  document.getElementById("altura").value;
    let kg=  document.getElementById("peso").value;
    let indice= (kg / Math.pow(m, 2));

        if (indice < 20)
        {
          resultado = "Peso inferior al normal.";
        }
        else if (indice >= 20 && indice < 24)
        {
          resultado = "Peso Normal.";
        }
        else if (indice >= 24 && indice < 29)
        {
          resultado = "Peso superior al normal.";
        }
        else if (indice >= 29 )
        {
          resultado = "Obesidad.";
        }  else
        {
          resultado = "No se ha podido calcular.Complete correctamente los campos";
        }

    //Con "toFixed" reduzco a 2 decimales a mostrar
    console.log( "Su IMC es: " + indice.toFixed(2) + " y su clasificación es: " + resultado);
    return "Su IMC es: " + indice.toFixed(2) + " y su clasificación es: " + resultado;
  }

  //Función para mostrar el resultado por pantalla

  function MostrarResultadoIMC (altura, peso, indice)
  {
    let mensaje = "Usted mide " + altura + " metros y pesa " + peso + " Kg. \n \n " + indice;
    alert (resultado);
  }
