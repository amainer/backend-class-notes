const router = require('express').Router();

const puppies = [
  {
    id: 1,
    name: 'Jip',
    breed: 'corgie/boston mix',
    likes: ['being hand fed by mom'],
    dislikes: ['other dogs']
  },
  {
    id: 2,
    name: 'Lily',
    breed: 'boston terrier',
    likes: ['sleeping in a clothes basket', 'attention'],
    dislikes: ['other dogs']
  }
];

router.get('/', (request,response) => {
  const breed = request.query.sortBy;
  let puppyData;

  if (breed) {
    puppyData = sortByBreed(puppies);
  } else {
    puppyData = puppies;
  }

  response.status(200).json(puppyData);
})

router.get('/:id', (request,response) => {
  let puppy = getPuppy(puppies,request.params.id);
  response.status(200).json(puppy)
})

router.post('/', (request,response) => {
  const puppyID = request.body.id;
  puppies.push(request.body);
  const puppy = getPuppy(puppies,puppyID);
  response.status(200).json(puppy)
})

router.put('/:id', (request, response) => {
  let puppyId = request.params.id;
  for (let i = 0; i< puppies.length; i++) {
    if (puppyId.toString() === puppies[i].id.toString()) {
      puppies[i].name = request.body.name;
      puppies[i].breed = request.body.breed;
      puppies[i].likes = request.body.likes;
      puppies[i].dislikes = request.body.dislikes;
    }
  }
  let puppy = getPuppy(puppies, puppyId);
  response.status(200).json(puppy);
})

function getPuppy(arr,id) {
  let puppy;

  for (let i = 0; i< arr.length; i++) {
    if (id.toString() === arr[i].id.toString()) {
      puppy = arr[i];
    }
  }
  return puppy;
}

function sortByBreed(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i])
  }

  return newArr.sort((a,b) => {
    if (a.breed.toUpperCase() < b.breed.toUpperCase()) {
      return -1;
    }

    if (a.breed.toUpperCase() > b.breed.toUpperCase()) {
      return 1;
    }

    return 0;
  })

}

module.exports = router;

// router.get('/:id', (request, response) => {
//   let kitty;
//   for (let i = 0; i < kitties.length; i++) {
//     if (request.params.id.toString() === kitties[i].id.toString()) {
//       kitty = kitties[i]
//     }
//   }
//
//   response.status(200).json(kitty);
//
// })
