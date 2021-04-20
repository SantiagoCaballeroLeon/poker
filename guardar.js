function guardar(carta, numero) {
    var carta = document.getElementById("carta").value;
    var numero = document.getElementById("numero").value;
    var tbody = document.getElementById("tbody");
    tbody.innerHTML += `
        <tr>
            <th class='border border-black p-2'>${numero}</th>
            <td class='border border-black p-2'>${carta}</td>
        </tr>`;
    localStorage.setItem("carta", carta)
    localStorage.setItem("numero", numero)
}

function validar() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    if(usuario == "admin" && clave == "1234") {
        localStorage.setItem("usuario", usuario)
        localStorage.setItem("clave", clave)
        location.href ="index.html";
    } else {
        alert("Datos incorrectos")
    }
}