function modesombre() {
    var currentColor = document.body.style.backgroundColor;
    logo1 = document.getElementsByClassName('logo')[0];
    logo2 = document.getElementsByClassName('logo')[1];
    footer = document.getElementById('footer');
    
    if (currentColor === '' || currentColor === 'black') {
      document.body.style.backgroundColor = '#F0F8FF';
      document.body.style.color = 'black';
      logo1.style.color = 'black';
      logo2.style.color = 'black';
      footer.style.backgroundColor = 'darkturquoise';
      footer.style.border = '1px solid black'

    } else {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = '#F0F8FF';
      logo1.style.color = 'white';
      logo2.style.color = 'white';
      footer.style.backgroundColor = 'black';
      footer.style.border = '1px solid cyan'

    }
}

function langue() {
    document.getElementById('language-select').addEventListener('change', function() {
        var selectedLanguage = this.value;
        var parametresTitle = document.querySelector('h1');
        var h2 = document.getElementsByClassName('h2')[0];
        var h21 = document.getElementsByClassName('h2')[1]; 
        var button = document.getElementsByClassName('log')[0];
    
        if (selectedLanguage === 'en') {
            parametresTitle.textContent = 'Settings';
            h2.textContent = 'Dark theme';
            h21.textContent = 'Language';
            button.textContent = '  Back';
        } else {
            parametresTitle.textContent = 'Paramètres';
            h2.textContent = 'Mode sombre';
            h21.textContent = 'Langue';
            button.textContent = '  Retour';
        }
    });
}
