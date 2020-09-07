import { cardEvents } from './buttonEvents.js';

const buildDinoCard = (item, index) => {
    const card = `
        <div id="dinoCard-${item.id}" style="border: 2px solid #000000;">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${item.imageUrl}" alt="Card image cap" id=dinoImage-${index}>
                <div class="card-body">
                  <h5 class="card-title">${item.name}</h5>
                </div>
                <div class="progress" id="healthStatusBar">
                  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="${item.health}" aria-valuemin="0" aria-valuemax="100">${item.health}</div>
                </div>
                <div id="containerButtons">
                  <button type="button" class="btn btn-outline-success" id="petBtn-${index}">Pet</button>
                  <button type="button" class="btn btn-outline-warning" id="feedBtn-${index}">Feed</button>
                  <button type="button" class="btn btn-outline-info" id="adventureBtn-${index}">Adventure</button>
                  <button type="button" class="btn btn-outline-danger" id="removeBtn-${index}">Remove</button>
                  <button type="button" class="btn btn-outline-danger" id="infoBtn-${item.id}">Info</button>
                </div>
            </div>
        </div>`
    return card
  };
  
  const showCards = (array) => {
    array.forEach((dinoObject, index) => {
      if (dinoObject.health >= 100) {
        dinoObject.health = 100;
      } else if (dinoObject.health <= 0) {
        dinoObject.health = 0;
      }
  
      if (dinoObject.health === 0) {
        $('#graveyardDinos').append(buildDinoCard(dinoObject, index));
      } else if (dinoObject.health <= 50) {
        $('#hospitalDinos').append(buildDinoCard(dinoObject, index));
      } else if (dinoObject.health > 50) {
        $('#kennelDinos').append(buildDinoCard(dinoObject, index));
      }
      cardEvents(index, dinoObject);
    })
  };

  export { showCards };