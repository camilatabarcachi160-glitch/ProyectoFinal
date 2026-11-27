const usuario = document.getElementById("nombre");
const correo = document.getElementById("gmail");
const edad= document.getElementById("edad");
const contraseña = document.getElementById("contraseña");
const formulario = document.getElementById("registroForm");


document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

if (edad.value > 80) {
        document.getElementById('mensaje').textContent = 'La edad no puede ser mayor a 80 años.';
        return;
    }
 if (edad.value < 13) {
        document.getElementById('mensaje').textContent = 'La edad no puede ser menor a 13 años.';
        return;
    }


 if (!usuario.value || !correo.value || !edad.value || !contraseña.value) {
        document.getElementById('mensaje').textContent = 'Por favor, complete todos los campos.';
        return;
    }
 else if (usuario.value && correo.value && edad.value && contraseña.value) {
    localStorage.setItem("usuarioRegistrado", usuario.value);

    document.getElementById('mensaje').textContent = '¡Registro exitoso!';

    window.location.assign("inicio.sesion.html");
    }
}
);

