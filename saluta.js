// Codice javascript per mettere il nome del visitatore nel sito

// La var indirizzo_pagina è uguale all'indirizzo della pagina, trasformato in testo
var indirizzo_pagina = window.location.toString();

// La var dati_visitatore è uguale all'indirizzo_pagina diviso al ? ma prendendo la parte dopo
// 1 si usa perché le parti si contano partendo da 0
var dati_visitatore = indirizzo_pagina.split("?")[1];

// La var dati_visitatore è uguale ai dati_visitatore divisi dalla & ma prendendo la prima parte
var dati_visitatore = dati_visitatore.split("&")[0];

// La var nome_visitatore è uguale ai dati_visitatore ma divisi dall'= ma prendendo la prima paret
var nome_visitatore = dati_visitatore.split("=")[1];

// La var tag_con_id_nome è uguale al tag che ha id uguale a nome
var tag_con_id_nome = document.getElementById("nome");

// Il contenuto del tag_con_id_nome è uguale al nome_visitatore
tag_con_id_nome.textContent = "Ciao " + nome_visitatore + "!";