//NO COMPILAR EL ARCHIVO AL COMPILAR TIENE UN ERROR, LOS ERRORES FUERON ARREGLADOS A MANO EN EL JS
import { Serie } from "./serie.js";
import { series } from './data.js';
import './styles.css';

const coursesTbody: HTMLElement = document.getElementById('Series')!; // Nodo tbody que tiene el id="Series"
const seasonsbody: HTMLElement = document.getElementById('Seasons')!;


function renderCoursesInTable(series: Serie[]): void {
  series.forEach(c =>{console.log(c.name)})
  series.forEach(c => {
    const row = document.createElement("tr"); // Crear una nueva fila
    let nombreid: number= c.id;
    row.innerHTML = `<td>${c.id}</td>
                     <td><button id=${c.id} class="button-like">${c.name}</button></td>
                     <style>
                        /* Estilo del botón */
                        .button-like {
                            border: none;
                            background: none;
                            color: blue;
                            text-decoration: underline;
                            cursor: pointer;
                            padding: 0;
                            font-size: inherit;
                        }

                        /* Estilo cuando se pasa el mouse */
                        .button-like:hover {
                            color: darkblue;
                        }
                    </style>
                     <td>${c.channel}</td>
                     <td>${c.seasons}</td>`;
    const platformLink = `<a href="${c.platform}" target="_blank">${c.name}</a>`;
    coursesTbody.appendChild(row); // Agregar la fila al tbody
  });
}

function getseasonsaverage(series: Serie[]): void{
  let seasons: number;
  seasons=0;
  let total: number;
  total=0;
  series.forEach(c =>{total+=1;
                      seasons+=c.seasons;
  })
  let promedio= seasons/total;
  const paragraph = document.createElement("p");
  paragraph.innerHTML=`Seasons average: ${promedio}`


}






renderCoursesInTable(series);
getseasonsaverage(series);