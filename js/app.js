function validar(){
    let user = document.getElementById("user").value;
    let cont = document.getElementById("cont").value;
    let valid = document.getElementById("valid");
    let usuario = "Federico";
    let clave = "123";

    if(user == usuario && cont == clave){
        valid.textContent = "Sesión iniciada.";
    } else{
        if(user != usuario && cont != clave){
            valid.textContent = "El nombre de usuario y la contraseña son incorrectos.";
        } else{
            if(user != usuario){
                valid.textContent = "El nombre de usuario ingresado es incorrecto.";
            } else{
                valid.textContent = "La contraseña ingresada es incorrecta.";
            }
        }
    }
}