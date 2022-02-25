function pozycja() {
    let element = document.getElementById('aside-show');
    let element2 = document.getElementById('back2');
    let position = window.pageYOffset;

        if (position < 250) {
            element.classList.add('fade')
            element2.classList.add('fade')
        
        }else{
            element.classList.remove('fade')
            element2.classList.remove('fade')
        }

        setTimeout('pozycja()',2000); //sprawdzić.
}

pozycja();