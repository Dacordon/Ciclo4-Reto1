
$(document).ready(function () {
  estadoInicial();
});

/**
 * Intento de autenticar al usuario en la aplicaciòn
 */
function login() {
  let email = $("#useremail").val();
  let password = $("#password").val();

  $.ajax({
    url: "http://localhost:8081/api/user/" + email + "/" + password,
    type: "GET",
    dataType: "json",
    success: function (respuesta) {
      console.log(respuesta);
      resultado(respuesta);
    },

    error: function (xhr, status) {
      //$("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
      console.log("algo fallo");
    },
    //complete: funcion con al final de la petición
    // código a ejecutar sin importar si la petición falló o no
    complete: function (xhr, status) {
      console.log("Todo super bien" + status);
    },
  });
}

/**
 * valida si en el id viene un dato nulo, o viene el codigo del usuario
 * 
 * Configura mensaje de bienvenida o de error según el caso
 */
function resultado(respuesta){
  let id = respuesta.id
  let nombre= respuesta.name
  let email_bd = respuesta.email
  let password_bd = respuesta.password

  let email = $("#useremail").val();
  let password = $("#password").val();

  if (id==null)
      alert("Usuario no registrado : " + nombre)
  else if (email != email_bd || password!= password_bd) {
      alert("Email o contraseña incorrecto")
  }
  else{
      alert("Bienvenido : " + id + " "+ nombre)

}
}
function estadoInicial(){
  $("#useremail").focus()
}



function mostrar() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
