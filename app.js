let card = document.getElementsByClassName('card');
let btn = document.getElementsByClassName('btn');
let progress = document.getElementById('progress');

for (var i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function(e) {
      e.target.classList.add('selected');
      progress.value = progress.value +10;      
      let allSelected = document.querySelectorAll('.selected');
      if(card.length === allSelected.length){        
        btn[0].onclick = () => {
          console.log('clicked');
        };        
        btn[0].disabled = false;        
      }      
    });
  }    
