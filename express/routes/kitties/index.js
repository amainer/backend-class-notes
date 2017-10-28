const router = require('express').Router();

const kitties = [
  {
    id: 1,
    name: 'Rasputin',
    breed: 'tuxedo',
    likes: ['head boops', 'laying on the couch'],
    dislikes: ['hugs']
  },
  {
    id: 2,
    name: 'Thorvald',
    breed: 'black tabby',
    likes: ['blankets', 'snacks'],
    dislikes: ['When other cats get pats']
  },
  {
    id: 3,
    name: 'Solveig',
    breed: 'black',
    likes: ['Brenna\'s husband'],
    dislikes: ['Brenna', 'other cats', 'literally everything in teh world']
  }
];

router.get('/', (request,response) => {
  const breed = request.query.sortBy;
  let kittyData;

  if (breed) {
    kittyData = sortByBreed(kitties);
  } else {
    kittyData = kitties
  }

  response.status(200).json(kittyData);
})

router.get('/:id', (request, response) => {
  let kitty = getKitty(kitties, request.params.id);
  response.status(200).json(kitty);
})

router.post('/', (request,response) => {
  const kittyId = request.body.id;
  kitties.push(request.body);
  const kitty = getKitty(kitties,kittyId);
  response.status(200).json(kitty)
})

router.put('/:id', (request,response) => {
  let kittyId = request.params.id;
  for (let i = 0; i < kitties.length; i++) {
    if (kittyId.toString() === kitties[i].id.toString()) {
      kitties[i].name = request.body.name;
      kitties[i].breed = request.body.breed;
      kitties[i].likes = request.body.likes;
      kitties[i].dislikes = request.body.dislikes;
    }
  }
  let kitty = getKitty(kitties, kittyId)
  response.status(200).json(kitty);
})

function getKitty(arr, id) {
  let kitty;

  for (let i = 0; i < arr.length; i++) {
    if (id.toString() === arr[i].id.toString()) {
      kitty = arr[i]
    }
  }
  return kitty;
}

function sortByBreed(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  return newArr.sort((a,b) => {
    if (a.breed.toUpperCase() < b.breed.toUpperCase()) {
      return -1;
    }

    if(a.breed.toUpperCase() > b.breed.toUpperCase()) {
      return 1
    }

    return 0;

  })

}

module.exports = router;
