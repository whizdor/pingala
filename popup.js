var a = localStorage.getItem("monday");
console.log(a);

var len;
var cur = new Date();
var day = cur.getDay();
// day = 3;

if (day == 1) {
    chrome.storage.sync.get("Ms", function (mon) {
        len = mon.Ms.length;
        function generateTableHead(table) {
            let thead = table.createTHead();
            let row = thead.insertRow();
            th = document.createElement("th");
            text = document.createTextNode("TIME")
            th.appendChild(text);
            row.appendChild(th);
            th = document.createElement("th");
            text = document.createTextNode("COURSE")
            th.appendChild(text);
            row.appendChild(th);
        }
        var i;
        function generateTable(table) {
            for (i = 0; i < 8; i++) {
                let row = table.insertRow();
                th = document.createElement("th");
                text = document.createTextNode(mon.Ms[i][0][0]);
                th.appendChild(text);
                row.appendChild(th);
                th = document.createElement("th");
                text = document.createTextNode(mon.Ms[i][0][1])
                th.appendChild(text);
                row.appendChild(th);
            }
        }

        let table = document.querySelector("table");
        generateTableHead(table);
        generateTable(table);
    });
}
else if (day == 2) {
    chrome.storage.sync.get("Ts", function (mon) {
        len = mon.Ts.length;
        function generateTableHead(table) {
            let thead = table.createTHead();
            let row = thead.insertRow();
            th = document.createElement("th");
            text = document.createTextNode("TIME")
            th.appendChild(text);
            row.appendChild(th);
            th = document.createElement("th");
            text = document.createTextNode("COURSE")
            th.appendChild(text);
            row.appendChild(th);
        }
        var i;
        function generateTable(table) {
            for (i = 0; i < 8; i++) {
                let row = table.insertRow();
                th = document.createElement("th");
                text = document.createTextNode(mon.Ts[i][0][0]);
                th.appendChild(text);
                row.appendChild(th);
                th = document.createElement("th");
                text = document.createTextNode(mon.Ts[i][0][1])
                th.appendChild(text);
                row.appendChild(th);
            }
        }

        let table = document.querySelector("table");
        generateTableHead(table);
        generateTable(table);
    });
}
else if (day == 3) {
    chrome.storage.sync.get("Ws", function (mon) {
        len = mon.Ws.length;
        function generateTableHead(table) {
            let thead = table.createTHead();
            let row = thead.insertRow();
            th = document.createElement("th");
            text = document.createTextNode("TIME")
            th.appendChild(text);
            row.appendChild(th);
            th = document.createElement("th");
            text = document.createTextNode("COURSE")
            th.appendChild(text);
            row.appendChild(th);
        }
        var i;
        function generateTable(table) {
            for (i = 0; i < 8; i++) {
                let row = table.insertRow();
                th = document.createElement("th");
                text = document.createTextNode(mon.Ws[i][0][0]);
                th.appendChild(text);
                row.appendChild(th);
                th = document.createElement("th");
                text = document.createTextNode(mon.Ws[i][0][1])
                th.appendChild(text);
                row.appendChild(th);
            }
        }

        let table = document.querySelector("table");
        generateTableHead(table);
        generateTable(table);
    });
}
else if (day == 4) {
    chrome.storage.sync.get("Ths", function (mon) {
        len = mon.Ths.length;
        function generateTableHead(table) {
            let thead = table.createTHead();
            let row = thead.insertRow();
            th = document.createElement("th");
            text = document.createTextNode("TIME")
            th.appendChild(text);
            row.appendChild(th);
            th = document.createElement("th");
            text = document.createTextNode("COURSE")
            th.appendChild(text);
            row.appendChild(th);
        }
        var i;
        function generateTable(table) {
            for (i = 0; i < 8; i++) {
                let row = table.insertRow();
                th = document.createElement("th");
                text = document.createTextNode(mon.Ths[i][0][0]);
                th.appendChild(text);
                row.appendChild(th);
                th = document.createElement("th");
                text = document.createTextNode(mon.Ths[i][0][1])
                th.appendChild(text);
                row.appendChild(th);
            }
        }

        let table = document.querySelector("table");
        generateTableHead(table);
        generateTable(table);
    });
}
else {
    document.querySelector("#text").innerHTML = "Chill!";
}





