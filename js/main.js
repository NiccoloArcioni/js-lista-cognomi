//array con cognomi
var surnameList = [
    "Bianchi",
    "Rossi",
    "Duzioni",
    "Balsano",
    "Verdi"
];

//variabile titolo lista
var listTitle = document.getElementById('ms_list_title');

// variabile form input
var userInputForm = document.getElementById('surname');

// variabile submit
var submit = document.getElementById('submit');

// variabile reset
var reset = document.getElementById('reset');


submit.addEventListener('click',
    function () {

        //  variabile cognome utente
        var userSurname = document.getElementById('surname').value;
        console.log(userSurname);

        if(userSurname.length != 0) {

            //in caso di succevvive aggiunte di cognomi cancella la precendente lista
            document.getElementById('ms_surname_list').innerHTML = ' ';

            //trasforma l'input mettendo la prima lettera maiuscola e il resto minuscolo
            userSurname = userSurname.charAt(0).toUpperCase() + userSurname.slice(1).toLowerCase();

            //aggiunta cognome utente all'array
            surnameList.push(userSurname);
            
            //copia array con cognomi da ordinare 
            var surnameListSorted = surnameList.slice();
            
            //sort ordine alfabetico del secondo array
            surnameListSorted.sort();
            console.log(surnameListSorted);
            
            //display titolo della lista
            listTitle.style.display = "block";
            
            //variabile posizione utente e reset posizione utente per successivi inserimenti
            var userPosition = 1;
            
            // stampa lista cognomi ordinata e ricerca posizione utente
            for(var i = 0; i < surnameListSorted.length; i++) {
                document.getElementById('ms_surname_list').innerHTML += "<li>" + surnameListSorted[i] + "</li>";
                if(surnameListSorted[i] === userSurname) {
                    document.getElementById('ms_user_surname_position').innerHTML = userSurname + " sei in posizione " + userPosition;
                } else {
                    userPosition += 1;
                }
            }
            
            //ripulire l'input
            userInputForm.value = '';

        } else {
            alert("Inserisci un cognome valido");
        }
    }
);


reset.addEventListener('click',
    function () {
        location.reload();
    }
);

