import { dinoData } from '../helpers/data/dinoData.js';
import { showCards } from './dinoCards.js';

const cardEvents = (index, item) => {
    $(`#removeBtn-${index}`).click(function() {
      removeDinos(index);
    })
  
    $(`#petBtn-${index}`).click(function() {
      petDino(item);
    })
  
    $(`#feedBtn-${index}`).click(function() {
      feedDino(item);
    })
  
    $(`#adventureBtn-${index}`).click(function() {
      adventureTime(item);
    })
};


function removeDinos(index) {
    dinoData().splice(index, 1);
    $('#kennelDinos').html('');
    $('#hospitalDinos').html('');
    $('#graveyardDinos').html('');
    showCards(dinoData());
  }

  const petDino = (item) => {
    item.health += 10;
    $('#kennelDinos').html('');
    $('#hospitalDinos').html('');
    $('#graveyardDinos').html('');
    showCards(dinoData());
    };
  
  const feedDino = (item) => {
    item.health += 5;
    $('#kennelDinos').html('');
    $('#hospitalDinos').html('');
    $('#graveyardDinos').html('');
    showCards(dinoData());
  }
  
  const adventureTime = (item) => {
    item.health -= 25;
    $('#kennelDinos').html('');
    $('#hospitalDinos').html('');
    $('#graveyardDinos').html('');
    showCards(dinoData());
  }

  export { cardEvents };