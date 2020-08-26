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
      imageUrl: 'https://lh3.googleusercontent.com/proxy/9VryojA_R_08l3UWgPwi1iskyQ_fHW2TESXEZLHF6RG22aD4XscmtLpqu7Tfrr7nSLHuooFLlvMJeCXsM0zq7v4Jy0gDEAdQ5lFKsbqWClKbTh1wgXViYV7N'
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

  const buildDinoCards = (array) => {
    // return `<div class="card" style="width: 18rem;">
    //             <img class="card-img-top" src="${dinos.imageUrl}" alt="Card image cap">
    //             <div class="card-body">
    //                 <h5 class="card-title">${dinos.name}</h5>
    //             </div>
    //             <div class="progress" id="healthStatusBar">
    //                 <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="${dinos.health}" aria-valuemin="0" aria-valuemax="100">${dinos.health}</div>
    //             </div>
    //             <div id="healthStatusBar">
    //                 <progess class="progress-bar" id="healthStatus" max="100" value="${dinos.health}">${dinos.health}</progress>
    //             </div>
    //         </div>`;

    $('#kennelDinos').html('');
    array.forEach((dino) => {
        $('#kennelDinos').append(`
        <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${dino.imageUrl}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${dino.name}</h5>
                </div>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="${dino.health}" aria-valuemin="0" aria-valuemax="100">${dino.health}</div>
                </div>
            </div>`
    );
    
    });
};

const init = () => {
    buildDinoCards(dinos);

}

init();