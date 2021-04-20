// const url = "https://carlosreneas.github.io/endpoints/cartas.json";
const url = "cartas.json";
fetch(url)
.then(response => response.json())
.then(data => {
    let tbody = document.getElementById("tbody");
    data.data.map(obj => {
        tbody.innerHTML += `
        <tr>
            <th id="cont" class='border border-black p-2'>${obj.numero}</th>
            <td class='border border-black p-2'>${obj.carta}</td>
        </tr>
        `;
    });
})
.catch(err=>console.log(err))

