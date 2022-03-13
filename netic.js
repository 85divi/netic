let btnAdd = document.querySelector('button');
let table = document.querySelector('table');


let letterInput = document.getElementById('letter');
let phoneticInput = document.getElementById('phonetic');
let filmInput = document.getElementById('filmetic');


btnAdd.addEventListener('click', () => {
    let letter = letterInput.value;
    let film = filmInput.value;
    let phonetic = phoneticInput.value;

    let template = `
                <tr>
                    <td></td>                   
                    <td>${letter}</td>                    
                    <td>${phonetic}</td>
                    <td>${film}</td>
                </tr>`;

    table.innerHTML += template;
});

