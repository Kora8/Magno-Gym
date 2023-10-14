// Este código tuvo un pequeño avance
// Función para obtener los elementos seleccionados
function getSelectedElements() {
    const selectedElements = document.querySelectorAll('input[name="divSelector"]:checked');
    return selectedElements;
  }
  
  // Función para abrir una nueva pestaña con el contenido HTML
  function openNewTabWithHTML(content) {
    const newTab = window.open();
    newTab.document.open();
    newTab.document.write(content);
    newTab.document.close();
  }

  
  document.addEventListener("DOMContentLoaded", function() {
    const exportButton = document.getElementById("exportButton");
  
    exportButton.addEventListener("click", function() {
        const selectedElements = getSelectedElements();
  
        if (selectedElements.length > 0) {
            // Mostrar un alert con la cantidad de elementos seleccionados
            alert(`Has seleccionado ${selectedElements.length} elemento(s). Haz clic en Aceptar para continuar con la exportación.`);

            //Poner el display a los inputs
             var elementosSpan = document.querySelectorAll('span');
            // Itera a través de la lista y cambia el estilo de display a flex para cada uno
            elementosSpan.forEach(function(span) {
              span.style.display = 'flex';
            });
            // Obtén una lista de todos los elementos <input> con la clase "form-control" en el documento
            var elementosInput = document.querySelectorAll('input.form-control');

            // Itera a través de la lista y cambia el estilo de display a flex para cada uno
            elementosInput.forEach(function(input) {
            input.style.display = 'flex';
             });
            
            
            // Crear un nuevo documento HTML con el contenido de los elementos seleccionados
            let nuevoHTML = '<html><head><title>Contenido Seleccionado</title>';
            
            // Agregar el enlace a la hoja de estilos local
            nuevoHTML += '<link rel="stylesheet" href="estilos.css">';
        
            nuevoHTML += '</head><body><div class="contenedor">';
             // Aquí agregamos la tabla generada con JavaScript
             nuevoHTML += '<table>';
             nuevoHTML += '<tr>';
             nuevoHTML += '<th>Días:</th>';
             nuevoHTML += '<td>Lunes</td>';
             nuevoHTML += '<td>Martes</td>';
             nuevoHTML += '<td>Miércoles</td>';
             nuevoHTML += '<td>Jueves</td>';
             nuevoHTML += '<td>Viernes</td>';
             nuevoHTML += '<td>Sábado</td>';
             nuevoHTML += '<td>Domingo</td>';
             nuevoHTML += '</tr>';
             nuevoHTML += '<tr>';
             nuevoHTML += '<th>Músculo a entrenar:</th>';
             nuevoHTML += '<td><textarea name="" class="input-dias" cols="20" rows="5"></textarea></td>';
             nuevoHTML += '<td><textarea name="" class="input-dias" cols="20" rows="5"></textarea></td>';
             nuevoHTML += '<td><textarea name="" class="input-dias" cols="20" rows="5"></textarea></td>';
             nuevoHTML += '<td><textarea name="" class="input-dias" cols="20" rows="5"></textarea></td>';
             nuevoHTML += '<td><textarea name="" class="input-dias" cols="20" rows="5"></textarea></td>';
             nuevoHTML += '<td><textarea name="" class="input-dias" cols="20" rows="5"></textarea></td>';
             nuevoHTML += '<td><textarea name="" class="input-dias" cols="20" rows="5"></textarea></td>';
             nuevoHTML += '</tr>';
             nuevoHTML += '</table>';
             
            selectedElements.forEach(function(selectedElement) {
                nuevoHTML += `<div>${selectedElement.nextElementSibling.innerHTML}</div>`;
            });
            nuevoHTML += '</body></html></div>';
  
            // Llamar a la función para abrir una nueva pestaña con el contenido HTML
            openNewTabWithHTML(nuevoHTML);
        } else {
            alert("Por favor, selecciona al menos un elemento antes de exportar.");
        }
    });
  });
  

