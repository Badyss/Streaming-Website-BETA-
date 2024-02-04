
function croixpub() {
    var pubElements = document.getElementsByClassName('pub');

    for (var i = 0; i < pubElements.length; i++) {
        pubElements[i].style.display = 'none';
    }
}

function entree(event){
    if (event.keyCode === 13) {
        recupmail();
    }
}

function recupmail() {
    var erreur = document.getElementsByClassName('prob')[0];
    var adresse = document.getElementById('mail').value;
    var caracteres = /[!#$%^&*()_+\-=\[\]{};'€: "\\|,<>\/?]/;

    var aro = adresse.indexOf('@');
    var point = adresse.lastIndexOf('.');

    if (caracteres.test(adresse) || !adresse.includes('@') || !adresse.includes('.') ||
        aro === -1 || point === -1 || aro >= point) {
        erreur.style.display = 'flex';
        adresse.value = '';
    } else {
        sessionStorage.setItem('thet', JSON.stringify(adresse));
        window.location.href = '../formulaire/conexion.html';
    }
}

function register() {
    document.getElementById('entr').value =''
    var page = sessionStorage.getItem('thet');
    var mail = JSON.parse(page);
    document.getElementById('entr').value = mail
}

function first() {
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div2').style.display = 'block';
}

function password() {
    erreurcheck = document.getElementsByClassName('prob')[0];
    erreurmdp = document.getElementsByClassName('prob')[1];
    erreurmdp.style.display = 'none';
    erreurcheck.style.display = 'none';
    mdp = document.getElementsByClassName('mdp')[1];
    var check = document.getElementById('check');
    if ( mdp.value.length < 8) {
        erreurmdp.style.display = 'block';
    }
    else {
        if (!check.checked) {
            erreurcheck.style.display = 'block';
        }
        else {
            document.getElementById('div2').style.display = 'none';
            document.getElementById('div3').style.display = 'block';

        }
    }
}

function offre(prix, elementText) {
    var div3 = document.getElementById('div3');
    var div4 = document.getElementById('div4');
    var prixElement = document.getElementById('prix');
    
    div3.style.display = 'none';
    div4.style.display = 'block';
    prixElement.innerHTML = prix + '€ / Mois <span class="offre"><br>' + elementText + '</span>';
    
    var offreElement = prixElement.querySelector('.offre');
    offreElement.style.color = 'grey';
}

function changeroffre(){
    document.getElementById('div4').style.display = 'none';
    document.getElementById('div3').style.display = 'block';
}

function payer() {
    var bouton = document.getElementsByClassName('payment')[0];
    bouton.style.display='none';
    document.getElementById('erreurpay').style.display='block';
}

function compte(){
    var mail = document.getElementById('entr').value;
    var mdp =  document.getElementById('mdp').value;
    base(mail,mdp)
}

function base(mail,mdp,offre){
    var dict = {"mail":mail,"mot de passe":mdp,"offre":offre}
}