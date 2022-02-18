
    <script>
      {
      let resp document.getelementbyid(resp)
      let borrar document.getelementbyid(borrar);
          borrar.addeventlistener("click",Clickborrar))    
      let borrar document.getelementbyid(calcular);
          borrar.addeventlistener("click",Clickcalcular);

       
      function clickcalcular() {
        let m=  document.getelementbyid(altura).value;
        let kg=  document.getelementbyid(peso).value;
       let indice= (peso / Math.pow(altura, 2));
      }
        {
          case (indice):
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
            else
            {
              resultado = "Obesidad.";
            }  
            break
      
          default:
            resultado = "No se ha podido calcular.Complete correctamente los campos";
        }
        //Con "toFixed" reduzco a 2 decimales a mostrar

        return "Su IMC es: " + indice.toFixed(2) + " y su clasificación es: " + resultado;
      }
 
      //Función para mostrar el resultado por pantalla

      function MostrarResultadoIMC (altura, peso, indice)
      {
        let mensaje = "Usted mide " + altura + " metros y pesa " + peso + " Kg. \n \n " + indice;
        alert (resultado);
      }	
 
           </script>