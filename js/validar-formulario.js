window.onload = function() {
    var form = document.getElementById('formulario');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        var nombre = document.getElementById('nombre').value.trim();
        var precio = document.getElementById('precio').value.trim();
        var inventario = document.getElementById('inventario').value.trim();

        validateField(nombre, 'nombre-error', 'Por favor, ingrese el nombre del producto.');
        validateField(precio, 'precio-error', 'Por favor, ingrese el precio del producto.');
        validateField(inventario, 'inventario-error', 'Por favor, ingrese el inventario del producto.');

        if (nombre && precio && inventario) {
            // Si todos los campos están llenos, se envía el formulario
            alert('¡Producto creado!');
            form.submit();
        }
    });

    function validateField(value, errorId, errorMessage) {
        var errorElement = document.getElementById(errorId);
        if (!value) {
            displayError(errorElement, errorMessage);
        } else {
            hideError(errorElement);
        }
    }

    function displayError(element, message) {
        element.textContent = message;
        element.style.display = 'block';
    }

    function hideError(element) {
        element.textContent = '';
        element.style.display = 'none';
    }
};