import {series} from "./data.js"
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var coursesTbody = document.getElementById('Series'); 
var seasonsbody = document.getElementById('Seasons');

function renderCoursesInTable(series) {
    series.forEach(function (c) { console.log(c.name); });
    series.forEach(function (c) {
        var row = document.createElement("tr"); 
        var nombreid = c.id;
        row.innerHTML = "<td>".concat(c.id, "</td>\n                     <td><button id=").concat(c.id, " class=\"button-like\">").concat(c.name, "</button></td>\n                     <style>\n                        /* Estilo del bot\u00F3n */\n                        .button-like {\n                            border: none;\n                            background: none;\n                            color: blue;\n                            text-decoration: underline;\n                            cursor: pointer;\n                            padding: 0;\n                            font-size: inherit;\n                        }\n\n                        /* Estilo cuando se pasa el mouse */\n                        .button-like:hover {\n                            color: darkblue;\n                        }\n                    </style>\n                     <td>").concat(c.channel, "</td>\n                     <td>").concat(c.seasons, "</td>");
        var platformLink = "<a href=\"".concat(c.platform, "\" target=\"_blank\">").concat(c.name, "</a>");
        coursesTbody.appendChild(row); 
    });
}
function getseasonsaverage(series) {
    var seasons = 0;
    var total = 0;

    series.forEach(function (c) {
        total += 1;
        seasons += c.seasons;
    });

    var promedio = seasons / total;

    var paragraph = document.createElement("p");
    paragraph.innerHTML = "Seasons average: " + promedio;

    
    document.body.appendChild(paragraph);
}

renderCoursesInTable(series);
getseasonsaverage(series);
