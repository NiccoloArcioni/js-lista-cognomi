//array con cognomi
var surnameList = [
    "Bianchi",
    "Rossi",
    "Duzioni",
    "Balsano",
    "Verdi"
];

//variabile posizione utente
var userPosition = 1;

//variabile titolo lista
var listTitle = document.getElementById('ms_list_title');

// inizializzazione variabile form input
var userInputForm = document.getElementById('surname');

//inizializzazione variabile submit
var submit = document.getElementById('submit');

//inizializzazione variabile reset
var reset = document.getElementById('reset');


submit.addEventListener('click',
    function () {

        // inizializzazione variabile cognome utente
        var userSurname = document.getElementById('surname').value;
        console.log(userSurname);

        if(userSurname.length != 0) {

            //in caso di succevvive aggiunte di cognomi cancella la precendente lista
            document.getElementById('ms_surname_list').innerHTML = ' ';

            //aggiunta cognome utente all'array
            surnameList.push(userSurname);
    
            //copia array con cognomi da ordinare 
            var surnameListSorted = surnameList;
    
            //sort ordine alfabetico del secondo array
            surnameListSorted.sort(function (a, b) {
                a = a.toLowerCase();
                b = b.toLowerCase();
                if (a == b) return 0;
                if (a > b) return 1;
                return -1;
            })
    
            console.log(surnameListSorted);
            listTitle.style.display = "block";
    
            //display titolo della lista
    
            // stampa lista cognomi ordinata e ricerca posizione utente
            for(var i = 0; i < surnameListSorted.length; i++) {
                document.getElementById('ms_surname_list').innerHTML += "<li>" + surnameListSorted[i] + "</li>";
                if(surnameListSorted[i] === userSurname) {
                    document.getElementById('ms_user_surname_position').innerHTML = userSurname + " sei in posizione " + userPosition;
                } else {
                    userPosition += 1;
                }
            }
    
            //reset posizione utente per successivi inserimenti
            userPosition = 1;
    
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