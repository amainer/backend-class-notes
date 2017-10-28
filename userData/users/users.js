// const uuid = require('uuid');
const moment = require('moment');
const router = require('express').Router();

// console.log(uuidv1());
// console.log(moment().format('MMMM Do YYYY h:mm a'));

const usersData = [
  {
    userName: 'amainer',
    firstName: 'Andrew',
    lastName: 'Mainer',
    password: 'fakePassword',
    id: 'c086a982-2a5c-49a8-ab04-36b052e695d9',
    created: moment().format('MMMM Do YYYY h:mm a')
  },
  {
    userName: 'amainer',
    firstName: 'Andrew',
    lastName: 'Mainer',
    password: 'fakePassword',
    id: '6ab3bc82-bd43-404d-904b-735e9a5bd2c0',
    created: moment().format('MMMM Do YYYY h:mm a')
  },
  {
    userName: 'amainer',
    firstName: 'Andrew',
    lastName: 'Mainer',
    password: 'fakePassword',
    id: '109156be-c4fb-41ea-b1b4-efe1671c5836',
    created: moment().format('MMMM Do YYYY h:mm a')
  },
  {
    userName: 'amainer',
    firstName: 'Andrew',
    lastName: 'Mainer',
    password: 'fakePassword',
    id: '01cf7d16-906c-4fc8-9a39-e572f9ba710d',
    created: moment().format('MMMM Do YYYY h:mm a')
  },
  {
    userName: 'amainer',
    firstName: 'Andrew',
    lastName: 'Mainer',
    password: 'fakePassword',
    id: '153b5d77-a27e-452c-8d50-6c40a1a0e2f7',
    created: moment().format('MMMM Do YYYY h:mm a')
  }
];

// router.get('/', (request,response) => {
//   response.status(200).json(usersData);
// })

module.exports = usersData
