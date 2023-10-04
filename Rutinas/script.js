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
            
            // Crear un nuevo documento HTML con el contenido de los elementos seleccionados
            let nuevoHTML = '<html><head><title>Contenido Seleccionado</title></head><body>';
            selectedElements.forEach(function(selectedElement) {
                nuevoHTML += `<div>${selectedElement.nextElementSibling.innerHTML}</div>`;
            });
            nuevoHTML += '</body></html>';

            // Llamar a la función para abrir una nueva pestaña con el contenido HTML
            openNewTabWithHTML(nuevoHTML);
        } else {
            alert("Por favor, selecciona al menos un elemento antes de exportar.");
        }
    });
});