import { dinoData } from '../helpers/data/dinoData.js';
import { showCards } from '../components/dinoCards.js';

const buildForm = () => {
    $('#addDinoToKennel').html(`
    <a class="btn btn-primary" data-toggle="collapse" href="#collapseForm" role="button" aria-expanded="false" aria-controls="collapseExample">
    Add to Kennel
    </a>
    <div class="collapse" id="collapseForm">
    <form>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="dinoName">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Enter Name">
      </div>
      <div class="form-group col-md-6">
        <label for="dinoOwner">Owner</label>
        <input type="text" class="form-control" id="inputOwner" placeholder="Enter Owner">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="dinoAge">Age</label>
        <input type="text" class="form-control" id="inputAge" placeholder="Enter Age">
      </div>
      <div class="form-group col-md-6">
        <label for="dinoImage">Image</label>
        <input type="text" class="form-control" id="inputImage" placeholder="Enter Image URL">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="dinoType">Type</label>
        <input type="text" class="form-control" id="inputType" placeholder="Enter Type">
      </div>
    </div>
    <button type="button" class="btn btn-primary" id="addDinoToKennelBtn">Submit</button>
  </form>
  </div>`)
  };

  const addDinoToKennel = () => {
    $('#addDinoToKennelBtn').click(() => {
      let newDinoCard = {
        name: $('#inputName').val(),
        type: $('#inputType').val(),
        age: $('#inputAge').val(),
        owner: $('#inputOwner').val(),
        adventures: [],
        health: 80,
        imageUrl: $('#inputImage').val(),
      }
      $('#kennelDinos').html('');
      $('#hospitalDinos').html('');
      $('#graveyardDinos').html('');
      
      dinoData().push(newDinoCard);
  
      showCards(dinoData());
   
    })
  }

  export { buildForm, addDinoToKennel };