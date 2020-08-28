const dinos = [
    {
      id: 'dino1',
      name: 'Rex',
      type: 'T Rex',
      age: 100,
      owner: 'Jacob',
      adventures: [],
      health: 92,
      imageUrl: 'https://www.fieldandstream.com/resizer/8xkluKAxQZsEHJKj6qwyU0mLhTo=/760x448/filters:focal(458x270:459x271)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/TQFN3CD5DAEM4DL2ACD42ZJ5E4.png'
    },
    {
      id: 'dino2',
      name: 'Steve',
      type: 'Velociraptor',
      age: 1,
      owner: 'Jacob',
      adventures: [],
      health: 1,
      imageUrl: 'https://i.ebayimg.com/images/g/61UAAOSweNpdmtI2/s-l640.png'
    },
    {
      id: 'dino3',
      name: 'Susan',
      type: 'stegosaurus',
      age: 55,
      owner: 'Jacob',
      adventures: [],
      health: 0,
      imageUrl: 'https://cdn.mos.cms.futurecdn.net/owYTb9X5fKpeBhgiaxD73b-320-80.jpg'
    },
    {
      id: 'dino4',
      name: 'Barry',
      type: 'Brontosaurus',
      age: 100,
      owner: 'Abbey',
      adventures: [],
      health: 100,
      imageUrl: 'https://media.wired.com/photos/590a5551f5d3a93367708fcf/master/pass/165517482-featured.jpg'
    },
    {
      id: 'dino5',
      name: 'Steph',
      type: 'Spinosaurus',
      age: 100,
      owner: 'Dr. T',
      adventures: [],
      health: 75,
      imageUrl: 'https://cdn1.bigcommerce.com/n-yp39j5/ujq6o/products/1060/images/2390/Papo_Spinosaurus_2019_DansDinosaurs__69805.1552618774.1280.1280.jpg?c=2'
    },
    {
      id: 'dino6',
      name: 'Tim',
      type: 'Talarurus',
      age: 100,
      owner: 'Dr. T',
      adventures: [],
      health: 55,
      imageUrl: 'https://vignette.wikia.nocookie.net/dinosaurs/images/2/2b/TalarurusInfobox.png/revision/latest/scale-to-width-down/340?cb=20150512165226'
    },
    {
      id: 'dino7',
      name: 'Tracy',
      type: 'Triceratops',
      age: 100,
      owner: 'Abbey',
      adventures: [],
      health: 0,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81Wsvp2M7iL._AC_SX425_.jpg'
    },
    {
      id: 'dino8',
      name: 'Percy',
      type: 'Pterodactyl',
      age: 10,
      owner: 'Jacob',
      adventures: [],
      health: 10,
      imageUrl: 'https://images.dinosaurpictures.org/3_pterodactyl_63be.jpg'
    },
    {
      id: 'dino9',
      name: 'Betty',
      type: 'brontosaurus',
      age: 22,
      owner: 'Dr. T',
      adventures: [],
      health: 22,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOdrC7hlvBawFQ7g8vgwHcfQphX5WfeN2bth0dvc4M2oxNGdSD'
    }
  ];

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
        <input type="email" class="form-control" id="inputName" placeholder="Enter Name">
      </div>
      <div class="form-group col-md-6">
        <label for="dinoOwner">Owner</label>
        <input type="password" class="form-control" id="inputOwner" placeholder="Enter Owner">
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

const buildDinoCard = (item, index) => {
    return `
        <div id="dinoCard-${index}">
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
                </div>
            </div>
        </div>`
};

const showCards = (array) => {
  array.forEach((item, index) => {
    if (item.health === 0) {
      $('#graveyardDinos').append(buildDinoCard(item, index));
    } else if (item.health <= 50) {
      $('#hospitalDinos').append(buildDinoCard(item, index));
    } else if (item.health > 50) {
      $('#kennelDinos').append(buildDinoCard(item, index));
    }
  })
};

const buildModal = () => {
  return `
  <div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`
};

const showModal = (array) => {
  array.forEach((item)=> {
    $(`item-${index}`).click(() => {
      $('#containerModal').html(`
      <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save changes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`);
    })
  })
  // $('#dinoCard-0').click(() => {
  //   $('#containerModal').append(buildModal());
  // })
};

const init = () => {
    buildForm();
    showCards(dinos);
    showModal(dinos);
}

init();